### **1. Significado de Semântica**

Semântica, no contexto de HTML, refere-se ao significado ou propósito de um elemento dentro de uma página web. Em vez de focar apenas na aparência (como o texto ficará visualmente), a semântica prioriza o **significado do conteúdo** para os navegadores, motores de busca e tecnologias assistivas (como leitores de tela).

- **Exemplo**: Usar `<header>` para o cabeçalho da página, `<nav>` para a área de navegação e `<footer>` para o rodapé, em vez de apenas `<div>` para tudo.

---

### **2. Por que usar tags semânticas?**
- **Acessibilidade**: Facilita a interpretação do conteúdo por leitores de tela, ajudando usuários com deficiência visual.
- **SEO (Search Engine Optimization)**: Motores de busca, como o Google, entendem melhor a estrutura e o significado do conteúdo, melhorando o posicionamento do site.
- **Manutenção do código**: Código mais organizado e legível, facilitando a manutenção e colaboração em equipe.
- **Compatibilidade futura**: Tags semânticas são padrões modernos e garantem que o site funcione bem em navegadores atuais e futuros.

---

### **3. Migração do HTML4 para o HTML5**
A maior mudança do HTML4 para o HTML5 foi a introdução de **elementos semânticos**. Enquanto o HTML4 focava em estruturas genéricas (como `<div>` e `<span>`), o HTML5 trouxe tags específicas para diferentes partes de uma página, como:
- `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`.

#### **Tags obsoletas / não conformidade**
- **Tags obsoletas**: Algumas tags do HTML4 não são mais recomendadas ou foram removidas no HTML5. Exemplos:
  - `<font>`: Usada para definir fontes (substituída por CSS).
  - `<center>`: Usada para centralizar conteúdo (substituída por CSS).
  - `<blink>`: Fazia o texto piscar (removida por ser considerada má prática).
  - `<applet>`: Usada para embedar applets Java (substituída por `<object>`).

---

### **4. Negrito e Itálico**
- **Negrito**:
  - `<strong>`: Indica que o texto é **importante** (semântico).
  - `<b>`: Apenas deixa o texto em negrito (não semântico).
- **Itálico**:
  - `<em>`: Indica **ênfase** no texto (semântico).
  - `<i>`: Apenas deixa o texto em itálico (não semântico).

---

### **5. Outras tags semânticas e de formatação**
- **`<mark>`**: Destaca parte do texto, como um marcador de texto.
- **`<small>`**: Usada para textos secundários ou de menor importância (a tag `<big>` foi removida no HTML5).
- **`<del>`**: Indica texto **excluído** (riscado).
- **`<ins>`**: Indica texto **inserido** (sublinhado).
- **`<sub>`**: Texto subscrito (exemplo: H<sub>2</sub>O).
- **`<sup>`**: Texto sobrescrito (exemplo: 2<sup>2</sup> = 4).

---

### **6. Tags para código e citações**
- **`<pre>`**: Mantém o formato pré-formatado do texto (útil para exibir código ou texto com espaçamento específico).
- **`<code>`**: Usada para destacar trechos de código.
- **`<q>`**: Usada para citações curtas (adiciona aspas automaticamente).
- **`<blockquote>`**: Usada para citações longas. Pode incluir o atributo `cite` para referenciar a fonte da citação.
  - Exemplo: `<blockquote cite="https://exemplo.com">Texto citado</blockquote>`.

---

### **7. Abreviações**
- **`<abbr>`**: Usada para definir abreviações ou siglas. O atributo `title` pode ser usado para explicar o significado.
  - Exemplo: `<abbr title="HyperText Markup Language">HTML</abbr>`.

---

### **8. Direção do texto**
- **`<bdo>`**: Usada para definir a direção do texto. Os atributos `rtl` (right-to-left) e `ltr` (left-to-right) controlam a direção.
  - Exemplo: `<bdo dir="rtl">Texto invertido</bdo>`.

---

### **Resumo**
A migração do HTML4 para o HTML5 trouxe uma abordagem mais semântica, com foco em melhorar a estrutura, acessibilidade e SEO. Tags obsoletas foram substituídas por alternativas modernas, e novas tags semânticas foram introduzidas para organizar melhor o conteúdo. Além disso, tags como `<strong>`, `<em>`, `<mark>`, `<del>`, `<ins>`, `<sub>`, `<sup>`, `<pre>`, `<code>`, `<q>`, `<blockquote>`, `<abbr>` e `<bdo>` ajudam a dar significado e formatação ao texto de forma eficiente.

---

# Exemplos práticos de uso para cada uma das tags mencionadas. 

---

### **1. Tags Semânticas Estruturais**
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Exemplo de Tags Semânticas</title>
</head>
<body>
    <header>
        <h1>Meu Site</h1>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Sobre</a></li>
                <li><a href="#">Contato</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <article>
            <h2>Título do Artigo</h2>
            <p>Este é um exemplo de artigo.</p>
        </article>

        <aside>
            <h3>Informações Adicionais</h3>
            <p>Conteúdo relacionado ao artigo.</p>
        </aside>
    </main>

    <footer>
        <p>&copy; 2023 Meu Site</p>
    </footer>
</body>
</html>
```

---

### **2. Negrito e Itálico**
```html
<p>
    Este é um exemplo de texto com <strong>importância</strong> e <em>ênfase</em>.
    Também podemos usar <b>negrito</b> e <i>itálico</i> sem significado semântico.
</p>
```

---

### **3. `<mark>`**
```html
<p>
    Este é um exemplo de texto com <mark>destaque</mark>.
</p>
```

---

### **4. `<small>`**
```html
<p>
    Texto principal <small>com texto secundário menor</small>.
</p>
```

---

### **5. `<del>` e `<ins>`**
```html
<p>
    O preço original era <del>R$ 100,00</del>, mas agora é <ins>R$ 80,00</ins>.
</p>
```

---

### **6. `<sub>` e `<sup>`**
```html
<p>
    Fórmula da água: H<sub>2</sub>O.
    Potência: 2<sup>3</sup> = 8.
</p>
```

---

### **7. `<pre>` e `<code>`**
```html
<pre>
    <code>
        function helloWorld() {
            console.log("Hello, World!");
        }
    </code>
</pre>
```

---

### **8. `<q>` e `<blockquote>`**
```html
<p>
    Como dizia o poeta: <q>A vida é feita de pequenos momentos.</q>
</p>

<blockquote cite="https://exemplo.com/frase-famosa">
    <p>
        Esta é uma citação longa de um autor famoso.
    </p>
</blockquote>
```

---

### **9. `<abbr>`**
```html
<p>
    O <abbr title="HyperText Markup Language">HTML</abbr> é a base da web.
</p>
```

---

### **10. `<bdo>`**
```html
<p>
    Texto normal: <bdo dir="ltr">Este texto está da esquerda para a direita.</bdo>
    Texto invertido: <bdo dir="rtl">Este texto está da direita para a esquerda.</bdo>
</p>
```

---

### **Exemplo Completo**
Aqui está um exemplo completo que combina várias tags:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Exemplo Completo</title>
</head>
<body>
    <header>
        <h1>Bem-vindo ao Meu Site</h1>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Sobre</a></li>
                <li><a href="#">Contato</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <article>
            <h2>Artigo Principal</h2>
            <p>
                Este é um exemplo de texto com <strong>importância</strong> e <em>ênfase</em>.
                Também podemos usar <b>negrito</b> e <i>itálico</i> sem significado semântico.
            </p>
            <p>
                Aqui está um exemplo de texto com <mark>destaque</mark>.
            </p>
            <p>
                Texto principal <small>com texto secundário menor</small>.
            </p>
            <p>
                O preço original era <del>R$ 100,00</del>, mas agora é <ins>R$ 80,00</ins>.
            </p>
            <p>
                Fórmula da água: H<sub>2</sub>O. Potência: 2<sup>3</sup> = 8.
            </p>
            <pre>
                <code>
                    function helloWorld() {
                        console.log("Hello, World!");
                    }
                </code>
            </pre>
            <p>
                Como dizia o poeta: <q>A vida é feita de pequenos momentos.</q>
            </p>
            <blockquote cite="https://exemplo.com/frase-famosa">
                <p>
                    Esta é uma citação longa de um autor famoso.
                </p>
            </blockquote>
            <p>
                O <abbr title="HyperText Markup Language">HTML</abbr> é a base da web.
            </p>
            <p>
                Texto normal: <bdo dir="ltr">Este texto está da esquerda para a direita.</bdo>
                Texto invertido: <bdo dir="rtl">Este texto está da direita para a esquerda.</bdo>
            </p>
        </article>
    </main>

    <footer>
        <p>&copy; 2023 Meu Site</p>
    </footer>
</body>
</html>
```

---

