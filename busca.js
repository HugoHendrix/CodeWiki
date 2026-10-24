// Busca com autocomplete + menu mobile da CodeWiki.
// O índice é montado em tempo de execução a partir do próprio index.html
// (links da sidebar e das seções), então não precisa ser atualizado à mão.
(function () {
    'use strict';

    var MAX_RESULTADOS = 8;

    var input = document.getElementById('busca');
    var lista = document.getElementById('busca-resultados');
    if (!input || !lista) return;

    var norm = function (s) {
        return s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
    };
    var limpa = function (s) {
        return s.replace(/\s+/g, ' ').trim();
    };

    /* ---------- índice ---------- */
    function montaIndice() {
        var itens = [];
        var vistos = {};

        function add(titulo, grupo, el, tipo) {
            titulo = limpa(titulo);
            if (!titulo) return;
            var href = el.getAttribute('href');
            var chave = href + '|' + titulo;
            if (vistos[chave]) return;
            vistos[chave] = true;
            itens.push({
                titulo: titulo,
                grupo: grupo,
                tipo: tipo,
                href: href,
                alvo: el.target,
                t: norm(titulo),
                g: norm(grupo)
            });
        }

        // 1) seções da sidebar
        document.querySelectorAll('#sidebar a[href^="#"]').forEach(function (a) {
            add(a.textContent, 'Seção', a, 'secao');
        });

        // 2) links do conteúdo
        document.querySelectorAll('main a[href]').forEach(function (a) {
            var href = a.getAttribute('href');
            if (href.charAt(0) === '#') return;
            var secao = a.closest('section');
            var h2 = secao && secao.querySelector('h2');
            var grupo = h2 ? limpa(h2.textContent) : '';
            var titulo = a.textContent;
            // links do tipo "Acessar": usa a primeira célula da linha da tabela
            var tr = a.closest('tr');
            if (tr && limpa(titulo).length < 12 && tr.cells[0] !== a.closest('td')) {
                titulo = tr.cells[0].textContent + ' – ' + titulo;
            }
            var externo = /^https?:\/\//.test(href);
            add(titulo, grupo, a, externo ? 'externo' : 'pagina');
        });

        return itens;
    }

    var indice = montaIndice();

    /* ---------- busca ---------- */
    function pontua(item, termos) {
        var total = 0;
        for (var i = 0; i < termos.length; i++) {
            var termo = termos[i];
            var pos = item.t.indexOf(termo);
            if (pos === 0) total += 4;
            else if (pos > 0 && item.t.charAt(pos - 1) === ' ') total += 3;
            else if (pos > 0) total += 2;
            else if (item.g.indexOf(termo) !== -1) total += 1;
            else return 0;
        }
        return total;
    }

    function busca(q) {
        var termos = norm(limpa(q)).split(' ').filter(Boolean);
        if (!termos.length) return [];
        return indice
            .map(function (item) { return { item: item, s: pontua(item, termos) }; })
            .filter(function (r) { return r.s > 0; })
            .sort(function (a, b) { return b.s - a.s || a.item.titulo.length - b.item.titulo.length; })
            .slice(0, MAX_RESULTADOS)
            .map(function (r) { return r.item; });
    }

    /* ---------- render ---------- */
    var ativo = -1;
    var atuais = [];

    function destaca(el, texto, termos) {
        var n = norm(texto);
        if (n.length !== texto.length) { el.textContent = texto; return; }
        var marcado = new Array(texto.length);
        termos.forEach(function (t) {
            var i = n.indexOf(t);
            while (i !== -1) {
                for (var k = i; k < i + t.length; k++) marcado[k] = true;
                i = n.indexOf(t, i + t.length);
            }
        });
        var buf = '';
        var emMarca = false;
        function flush() {
            if (!buf) return;
            if (emMarca) {
                var m = document.createElement('mark');
                m.textContent = buf;
                el.appendChild(m);
            } else {
                el.appendChild(document.createTextNode(buf));
            }
            buf = '';
        }
        for (var j = 0; j < texto.length; j++) {
            if (!!marcado[j] !== emMarca) { flush(); emMarca = !!marcado[j]; }
            buf += texto.charAt(j);
        }
        flush();
    }

    function rotulo(item) {
        if (item.tipo === 'secao') return 'Seção';
        if (item.tipo === 'externo') return item.grupo ? item.grupo + ' · link externo ↗' : 'link externo ↗';
        return item.grupo;
    }

    function abre() { lista.hidden = false; input.setAttribute('aria-expanded', 'true'); }
    function fecha() {
        lista.hidden = true;
        input.setAttribute('aria-expanded', 'false');
        input.removeAttribute('aria-activedescendant');
        ativo = -1;
    }

    function marcaAtivo(i) {
        var opcoes = lista.querySelectorAll('[role="option"]');
        if (ativo >= 0 && opcoes[ativo]) opcoes[ativo].setAttribute('aria-selected', 'false');
        ativo = i;
        if (i >= 0 && opcoes[i]) {
            opcoes[i].setAttribute('aria-selected', 'true');
            input.setAttribute('aria-activedescendant', opcoes[i].id);
            opcoes[i].scrollIntoView({ block: 'nearest' });
        } else {
            input.removeAttribute('aria-activedescendant');
        }
    }

    function render() {
        var q = input.value;
        lista.textContent = '';
        ativo = -1;
        if (!limpa(q)) { atuais = []; fecha(); return; }

        atuais = busca(q);
        var termos = norm(limpa(q)).split(' ').filter(Boolean);

        if (!atuais.length) {
            var vazio = document.createElement('li');
            vazio.className = 'search-empty';
            vazio.textContent = 'Nada encontrado para “' + limpa(q) + '”';
            lista.appendChild(vazio);
        }

        atuais.forEach(function (item, i) {
            var li = document.createElement('li');
            li.id = 'busca-op-' + i;
            li.setAttribute('role', 'option');
            li.setAttribute('aria-selected', 'false');

            var t = document.createElement('span');
            t.className = 'search-title';
            destaca(t, item.titulo, termos);

            var g = document.createElement('span');
            g.className = 'search-group';
            g.textContent = rotulo(item);

            li.appendChild(t);
            li.appendChild(g);
            // mousedown (e não click) para disparar antes do blur do input
            li.addEventListener('mousedown', function (e) {
                e.preventDefault();
                vai(item);
            });
            li.addEventListener('mousemove', function () { if (ativo !== i) marcaAtivo(i); });
            lista.appendChild(li);
        });
        abre();
    }

    function vai(item) {
        fecha();
        fechaMenu();
        if (item.tipo === 'externo') {
            window.open(item.href, '_blank', 'noopener,noreferrer');
        } else if (item.href.charAt(0) === '#') {
            var alvo = document.getElementById(item.href.slice(1));
            if (alvo) alvo.scrollIntoView();
            history.replaceState(null, '', item.href);
        } else {
            window.location.href = item.href;
        }
    }

    input.addEventListener('input', render);
    input.addEventListener('focus', function () { if (limpa(input.value)) render(); });
    input.addEventListener('blur', fecha);
    input.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (lista.hidden) render();
            if (atuais.length) marcaAtivo((ativo + 1) % atuais.length);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (atuais.length) marcaAtivo(ativo <= 0 ? atuais.length - 1 : ativo - 1);
        } else if (e.key === 'Enter') {
            var escolhido = atuais[ativo >= 0 ? ativo : 0];
            if (escolhido) { e.preventDefault(); vai(escolhido); }
        } else if (e.key === 'Escape') {
            if (!lista.hidden) fecha(); else input.value = '';
        }
    });

    // atalho "/" foca a busca (fora de campos de texto)
    document.addEventListener('keydown', function (e) {
        var tag = (document.activeElement && document.activeElement.tagName) || '';
        if (e.key === '/' && !/^(INPUT|TEXTAREA|SELECT)$/.test(tag) && !e.ctrlKey && !e.metaKey && !e.altKey) {
            e.preventDefault();
            abreMenu();
            input.focus();
        }
    });

    /* ---------- menu mobile ---------- */
    var botao = document.querySelector('.menu-toggle');
    var overlay = document.querySelector('.sidebar-overlay');
    var sidebar = document.getElementById('sidebar');

    function abreMenu() {
        document.body.classList.add('menu-open');
        if (botao) { botao.setAttribute('aria-expanded', 'true'); botao.setAttribute('aria-label', 'Fechar menu'); }
        if (overlay) overlay.hidden = false;
    }
    function fechaMenu() {
        document.body.classList.remove('menu-open');
        if (botao) { botao.setAttribute('aria-expanded', 'false'); botao.setAttribute('aria-label', 'Abrir menu'); }
        if (overlay) overlay.hidden = true;
    }

    if (botao) {
        botao.addEventListener('click', function () {
            if (document.body.classList.contains('menu-open')) fechaMenu(); else abreMenu();
        });
    }
    if (overlay) overlay.addEventListener('click', fechaMenu);
    if (sidebar) {
        sidebar.addEventListener('click', function (e) {
            if (e.target.closest('a')) fechaMenu();
        });
    }
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && e.target !== input && document.body.classList.contains('menu-open')) fechaMenu();
    });
})();
