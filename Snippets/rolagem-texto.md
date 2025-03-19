### Rolagem de Texto ao Passar o Mouse

Este código cria uma série de "piadas" (ou textos) que, ao passar o mouse, rolam horizontalmente para revelar o conteúdo completo. É uma técnica útil para exibir textos longos em espaços limitados, como manchetes, trechos ou comentários.

[Exemplo do código](https://codepen.io/themolitor/live/Jjzxvma/4a4e4787ebd4aad2a91909debef126e6?utm_source=design.dev)

---

## **1. Estrutura HTML**

O HTML define a estrutura básica da caixa de piadas.

```html
<div id="joke-box">
    <div class="jokes" id="joke1">Why can't CSS devs clean their desk?&nbsp; Because everything is !important. 😅</div>
    <div class="jokes" id="joke2">Why did the dev quit their job?&nbsp; They didn't get arrays. 🤣</div>
    <div class="jokes" id="joke3">How do you comfort a JS dev?&nbsp; You console them. 😄</div>
    <!-- Outras piadas seguem a mesma estrutura -->
</div>
```

### **Explicação:**
- **`#joke-box`**: Contêiner principal que envolve todas as piadas.
- **`.jokes`**: Cada piada é um elemento dentro do contêiner. O texto é exibido em uma única linha.
- **`&nbsp;`**: Espaço não quebrável para garantir que o texto não seja dividido em linhas.

---

## **2. Estilos CSS**

O CSS define o layout e a aparência das piadas.

### **Estilos Globais**
```css
* {
  margin: 0; /* Remove margens padrão */
}

#joke-box {
  margin: 12px; /* Adiciona margem ao contêiner */
}
```

### **Estilo das Piadas**
```css
.jokes {
  line-height: 60px; /* Altura da linha */
  font-family: sans-serif; /* Fonte */
  border-radius: 5px; /* Bordas arredondadas */
  font-size: 26px; /* Tamanho da fonte */
  height: 60px; /* Altura fixa */
  margin: 4px; /* Margem entre as piadas */
  display: inline-block; /* Exibe as piadas em linha */
  cursor: help; /* Cursor de ajuda ao passar o mouse */
  box-sizing: border-box; /* Inclui padding e borda no cálculo do tamanho */
  max-width: 100%; /* Largura máxima */
}
```

### **Estilos Individuais para Cada Piada**
Cada piada tem uma largura, cor de texto e fundo personalizados.

```css
#joke1 {
  width: 470px;
  color: #1E90FF;
  background: #1E90FF33;
}
#joke2 {
  width: 378px;
  color: #FF9D1E;
  background: #FF9D1E36;
}
#joke3 {
  width: 380px;
  color: #FF1EDC;
  background: #FF1EDC40;
}
/* Outras piadas seguem a mesma estrutura */
```

### **Explicação:**
- **`line-height` e `height`**: Garantem que o texto fique centralizado verticalmente.
- **`display: inline-block;`**: Permite que as piadas fiquem em linha, mas ainda possam ter largura e altura definidas.
- **`cursor: help;`**: Altera o cursor ao passar o mouse, indicando interatividade.

---

## **3. JavaScript**

O JavaScript adiciona a funcionalidade de rolagem horizontal ao passar o mouse.

### **Função Principal**
```javascript
function scrollMeTheWay(selector, buffer = 20, speed = 2) {
    const elements = document.querySelectorAll(selector);

    elements.forEach(element => {
        // Cria um span para envolver o conteúdo do texto
        const textContent = element.innerHTML;
        const textWrapper = document.createElement('span');
        textWrapper.innerHTML = textContent;
        textWrapper.style.display = 'inline-block';
        textWrapper.style.whiteSpace = 'nowrap';
        textWrapper.style.padding = '0 15px';
        element.innerHTML = '';
        element.appendChild(textWrapper);

        // Aplica estilos ao contêiner
        element.style.overflow = 'hidden';
        element.style.whiteSpace = 'nowrap';
        element.style.textOverflow = 'ellipsis';
        element.style.position = 'relative';

        let currentIndent = 0;
        let animationFrameId = null;

        const startAnimation = () => {
            const contentWidth = textWrapper.scrollWidth;
            const containerWidth = element.offsetWidth;
            const maxIndent = contentWidth - containerWidth + buffer;

            const animate = () => {
                if (currentIndent < maxIndent) {
                    currentIndent += speed;
                    textWrapper.style.transform = `translateX(-${currentIndent}px)`;
                    animationFrameId = requestAnimationFrame(animate);
                } else {
                    // Para a animação ao chegar ao final
                    cancelAnimationFrame(animationFrameId);
                }
            };

            animationFrameId = requestAnimationFrame(animate);
        };

        const resetIndent = () => {
            currentIndent = 0;
            textWrapper.style.transform = `translateX(0px)`;
        };

        const stopAnimation = () => {
            if (animationFrameId !== null) {
                cancelAnimationFrame(animationFrameId);
                animationFrameId = null;
            }
            resetIndent();
        };

        element.addEventListener('mouseenter', startAnimation);
        element.addEventListener('mouseleave', stopAnimation);
    });
}
```

### **Inicialização**
```javascript
document.addEventListener('DOMContentLoaded', () => {
    const jokes = document.querySelectorAll('.jokes');
    if (jokes.length > 0) {
        scrollMeTheWay('.jokes', 20, 2);
    }
});
```

### **Explicação:**
1. **`scrollMeTheWay()`**:
   - Envolve o conteúdo de cada piada em um `<span>` para facilitar a animação.
   - Calcula a largura do conteúdo e do contêiner para determinar o ponto final da rolagem.
   - Usa `requestAnimationFrame` para criar uma animação suave.

2. **Eventos**:
   - **`mouseenter`**: Inicia a animação de rolagem.
   - **`mouseleave`**: Para a animação e retorna o texto à posição inicial.

3. **Parâmetros**:
   - **`buffer`**: Espaço adicional após o término do texto.
   - **`speed`**: Velocidade da rolagem.

---

## **4. Como Funciona a Rolagem?**
- Ao passar o mouse sobre uma piada, o texto rola horizontalmente para revelar o conteúdo completo.
- Quando o mouse é retirado, o texto retorna à posição inicial.

---

## **5. Exemplo Completo**

Aqui está o código completo para você testar:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rolagem de Texto ao Passar o Mouse</title>
    <style>
        * {
            margin: 0;
        }
        #joke-box {
            margin: 12px;
        }
        .jokes {
            line-height: 60px;
            font-family: sans-serif;
            border-radius: 5px;
            font-size: 26px;
            height: 60px;
            margin: 4px;
            display: inline-block;
            cursor: help;
            box-sizing: border-box;
            max-width: 100%;
        }
        #joke1 { width: 470px; color: #1E90FF; background: #1E90FF33; }
        #joke2 { width: 378px; color: #FF9D1E; background: #FF9D1E36; }
        #joke3 { width: 380px; color: #FF1EDC; background: #FF1EDC40; }
        /* Adicione mais estilos para outras piadas */
    </style>
</head>
<body>
    <div id="joke-box">
        <div class="jokes" id="joke1">Why can't CSS devs clean their desk?&nbsp; Because everything is !important. 😅</div>
        <div class="jokes" id="joke2">Why did the dev quit their job?&nbsp; They didn't get arrays. 🤣</div>
        <div class="jokes" id="joke3">How do you comfort a JS dev?&nbsp; You console them. 😄</div>
        <!-- Adicione mais piadas aqui -->
    </div>

    <script>
        function scrollMeTheWay(selector, buffer = 20, speed = 2) {
            const elements = document.querySelectorAll(selector);

            elements.forEach(element => {
                const textContent = element.innerHTML;
                const textWrapper = document.createElement('span');
                textWrapper.innerHTML = textContent;
                textWrapper.style.display = 'inline-block';
                textWrapper.style.whiteSpace = 'nowrap';
                textWrapper.style.padding = '0 15px';
                element.innerHTML = '';
                element.appendChild(textWrapper);

                element.style.overflow = 'hidden';
                element.style.whiteSpace = 'nowrap';
                element.style.textOverflow = 'ellipsis';
                element.style.position = 'relative';

                let currentIndent = 0;
                let animationFrameId = null;

                const startAnimation = () => {
                    const contentWidth = textWrapper.scrollWidth;
                    const containerWidth = element.offsetWidth;
                    const maxIndent = contentWidth - containerWidth + buffer;

                    const animate = () => {
                        if (currentIndent < maxIndent) {
                            currentIndent += speed;
                            textWrapper.style.transform = `translateX(-${currentIndent}px)`;
                            animationFrameId = requestAnimationFrame(animate);
                        } else {
                            cancelAnimationFrame(animationFrameId);
                        }
                    };

                    animationFrameId = requestAnimationFrame(animate);
                };

                const resetIndent = () => {
                    currentIndent = 0;
                    textWrapper.style.transform = `translateX(0px)`;
                };

                const stopAnimation = () => {
                    if (animationFrameId !== null) {
                        cancelAnimationFrame(animationFrameId);
                        animationFrameId = null;
                    }
                    resetIndent();
                };

                element.addEventListener('mouseenter', startAnimation);
                element.addEventListener('mouseleave', stopAnimation);
            });
        }

        document.addEventListener('DOMContentLoaded', () => {
            const jokes = document.querySelectorAll('.jokes');
            if (jokes.length > 0) {
                scrollMeTheWay('.jokes', 20, 2);
            }
        });
    </script>
</body>
</html>
```

---

## **6. Considerações Finais**
- **Responsividade**: O código já é responsivo, mas você pode ajustar os tamanhos das piadas para diferentes dispositivos.
- **Desempenho**: Teste a animação em dispositivos móveis para garantir que seja suave.
- **Personalização**: Altere a velocidade da rolagem, as cores ou o efeito de hover para se adequar ao seu projeto.

---

