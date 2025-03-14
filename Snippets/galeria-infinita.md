### Galeria de Imagens com Rolagem Infinita

Este código cria uma galeria de imagens com rolagem infinita, onde as imagens se movem continuamente da direita para a esquerda. Vamos detalhar cada parte do código (HTML, CSS e JavaScript) para entender como ele funciona.

[Galeria One Piece](https://hugohendrix.github.io/galeria-one-piece/)

---

## **1. Estrutura HTML**

O HTML define a estrutura básica da galeria de imagens.

```html
<div id="photo-gallery-container">
    <div id="photo-gallery">
        <!-- Imagens com links -->
        <a class="photo-link" href="URL_IMAGEM_LARGA">
            <img class="photo" src="URL_THUMBNAIL" alt="Descrição da Imagem">
        </a>
        <!-- Outras imagens seguem a mesma estrutura -->
    </div>
</div>
```

### **Explicação:**
- **`#photo-gallery-container`**: Contêiner principal que envolve a galeria.
- **`#photo-gallery`**: Contêiner que hospeda as imagens e seus links.
- **`.photo-link`**: Links que envolvem as imagens. Cada link contém uma imagem (`<img>`).
- **`.photo`**: As imagens em si, que são exibidas como thumbnails.

---

## **2. Estilos CSS**

O CSS define o layout e a aparência da galeria.

### **Configuração Básica**
```css
#photo-gallery-container {
    white-space: nowrap; /* Impede que as imagens quebrem para a próxima linha */
    width: 100vw; /* Ocupa toda a largura da viewport */
    position: fixed; /* Fixa o contêiner na tela */
    top: 50%; /* Centraliza verticalmente */
    transform: translateY(-50%); /* Ajusta a centralização */
    padding: 3vh 0; /* Adiciona padding vertical */
}

#photo-gallery {
    display: inline-block; /* Permite que as imagens fiquem em linha */
    width: max-content; /* A largura se ajusta ao conteúdo */
}
```

### **Estilo das Imagens**
```css
.photo-link {
    display: inline-block; /* Exibe os links em linha */
    width: 33vh; /* Largura fixa para cada imagem */
    height: 33vh; /* Altura fixa para cada imagem */
    margin: 0 3vh; /* Margem entre as imagens */
    border-radius: 5px; /* Bordas arredondadas */
    box-shadow: 0 12.5px 12.5px rgba(0, 0, 0, .15); /* Sombra */
    overflow: hidden; /* Esconde partes da imagem que ultrapassam o contêiner */
    transition: transform 0.3s; /* Animação de escala ao passar o mouse */
}

.photo-link:hover {
    transform: scale(1.15); /* Aumenta a imagem ao passar o mouse */
}

.photo {
    width: 100%; /* Ocupa 100% da largura do link */
    height: 100%; /* Ocupa 100% da altura do link */
    object-fit: cover; /* Garante que a imagem cubra o espaço sem distorcer */
}
```

### **Explicação:**
- **`white-space: nowrap;`**: Mantém as imagens em uma única linha.
- **`position: fixed;`**: Fixa a galeria na tela, independente da rolagem da página.
- **`transform: translateY(-50%);`**: Centraliza verticalmente o contêiner.
- **`object-fit: cover;`**: Garante que as imagens cubram o espaço sem distorcer.

---

## **3. JavaScript**

O JavaScript cria a rolagem infinita e replica os itens da galeria para criar um efeito contínuo.

### **Função Principal**
```javascript
function initInfiniteCarousel(selector, speed) {
    const carousel = document.querySelector(selector);
    if (!carousel) return;

    const originalItems = Array.from(carousel.querySelectorAll('a'));
    let totalScroll = 0;
    let singleCycleWidth = 0;

    // Clonar itens até preencher a tela
    function fillCarousel() {
        singleCycleWidth = originalItems.reduce((acc, item) => {
            return acc + item.offsetWidth + parseFloat(getComputedStyle(item).marginRight);
        }, 0);

        const numClones = Math.ceil(window.innerWidth / singleCycleWidth) * 2;
        for (let i = 0; i < numClones; i++) {
            originalItems.forEach(item => {
                const clone = item.cloneNode(true);
                clone.classList.add('clone');
                carousel.appendChild(clone);
            });
        }
    }

    // Animar a rolagem
    function animateScroll() {
        totalScroll += speed;
        if (totalScroll >= singleCycleWidth) totalScroll = 0;
        carousel.style.transform = `translateX(-${totalScroll}px)`;
        requestAnimationFrame(animateScroll);
    }

    fillCarousel();
    animateScroll();
}
```

### **Configuração**
```javascript
initInfiniteCarousel('#photo-gallery', 1);
```

### **Debounce (Opcional)**
```javascript
function debounce(func, wait) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}
```

### **Explicação:**
1. **`fillCarousel()`**:
   - Calcula a largura total de um ciclo de imagens (`singleCycleWidth`).
   - Clona os itens originais para preencher a tela e criar o efeito de rolagem infinita.

2. **`animateScroll()`**:
   - Move a galeria para a esquerda (`translateX`) continuamente.
   - Quando a rolagem atinge o final de um ciclo, ela reinicia.

3. **`initInfiniteCarousel()`**:
   - Inicializa a galeria com a velocidade de rolagem especificada.

4. **`debounce()`**:
   - Evita execuções excessivas em eventos como redimensionamento da tela (`resize`).

---

## **4. Como Funciona o Efeito de Rolagem Infinita?**
- As imagens são clonadas várias vezes para criar uma sequência contínua.
- A galeria é movida para a esquerda usando `transform: translateX`.
- Quando a rolagem atinge o final de um ciclo, ela reinicia, criando a ilusão de uma rolagem infinita.

---

## **5. Exemplo Prático**
Aqui está o código completo para você testar:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Galeria com Rolagem Infinita</title>
    <style>
        #photo-gallery-container {
            white-space: nowrap;
            width: 100vw;
            position: fixed;
            top: 50%;
            transform: translateY(-50%);
            padding: 3vh 0;
        }
        #photo-gallery {
            display: inline-block;
            width: max-content;
        }
        .photo-link {
            display: inline-block;
            width: 33vh;
            height: 33vh;
            margin: 0 3vh;
            border-radius: 5px;
            box-shadow: 0 12.5px 12.5px rgba(0, 0, 0, .15);
            overflow: hidden;
            transition: transform 0.3s;
        }
        .photo-link:hover {
            transform: scale(1.15);
        }
        .photo {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    </style>
</head>
<body>
    <div id="photo-gallery-container">
        <div id="photo-gallery">
            <a class="photo-link" href="URL_IMAGEM_LARGA">
                <img class="photo" src="URL_THUMBNAIL" alt="Descrição da Imagem">
            </a>
            <!-- Adicione mais imagens aqui -->
        </div>
    </div>

    <script>
        function initInfiniteCarousel(selector, speed) {
            const carousel = document.querySelector(selector);
            if (!carousel) return;

            const originalItems = Array.from(carousel.querySelectorAll('a'));
            let totalScroll = 0;
            let singleCycleWidth = 0;

            function fillCarousel() {
                singleCycleWidth = originalItems.reduce((acc, item) => {
                    return acc + item.offsetWidth + parseFloat(getComputedStyle(item).marginRight);
                }, 0);

                const numClones = Math.ceil(window.innerWidth / singleCycleWidth) * 2;
                for (let i = 0; i < numClones; i++) {
                    originalItems.forEach(item => {
                        const clone = item.cloneNode(true);
                        clone.classList.add('clone');
                        carousel.appendChild(clone);
                    });
                }
            }

            function animateScroll() {
                totalScroll += speed;
                if (totalScroll >= singleCycleWidth) totalScroll = 0;
                carousel.style.transform = `translateX(-${totalScroll}px)`;
                requestAnimationFrame(animateScroll);
            }

            fillCarousel();
            animateScroll();
        }

        initInfiniteCarousel('#photo-gallery', 1);
    </script>
</body>
</html>
```

---

## **6. Considerações Finais**
- **Responsividade**: O código já é responsivo, mas você pode ajustar os tamanhos das imagens e margens para diferentes dispositivos.
- **Desempenho**: Em dispositivos móveis ou com muitas imagens, teste o desempenho para garantir que a animação seja suave.
- **Personalização**: Altere a velocidade da rolagem, o tamanho das imagens ou o efeito de hover para se adequar ao seu projeto.

---

