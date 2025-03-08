### 1. **Box Model (Modelo de Caixa)**
O **Box Model** é um conceito fundamental no CSS que descreve como os elementos HTML são estruturados e como eles ocupam espaço na página. Cada elemento é tratado como uma caixa composta por quatro partes:

- **Conteúdo (Content):** O conteúdo real do elemento, como texto ou imagens.
- **Preenchimento (Padding):** Espaço entre o conteúdo e a borda. Aumenta o espaço interno da caixa.
- **Borda (Border):** A linha que envolve o conteúdo e o padding.
- **Margem (Margin):** Espaço fora da borda, que separa o elemento de outros elementos.

Exemplo:
```css
div {
    width: 200px;
    padding: 20px;
    border: 5px solid black;
    margin: 10px;
}
```
Neste exemplo, a largura total do elemento será `200px (conteúdo) + 40px (padding) + 10px (borda) + 20px (margem)`.

---

### 2. **Layouts**
Layouts em CSS referem-se à organização dos elementos na página. Existem várias técnicas para criar layouts, mas as mais comuns são:

- **Flexbox:** Ideal para criar layouts flexíveis e alinhar itens em uma única dimensão (linha ou coluna). É muito usado para menus, grids simples e alinhamento de conteúdo.
  ```css
  .container {
      display: flex;
      justify-content: space-between;
  }
  ```

- **CSS Grid:** Permite criar layouts complexos em duas dimensões (linhas e colunas). É perfeito para designs mais elaborados.
  ```css
  .container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 10px;
  }
  ```

- **Positioning:** Usado para posicionar elementos de forma precisa, com propriedades como `position: relative`, `absolute`, `fixed` e `sticky`.

---

### 3. **Responsividade**
Responsividade é a capacidade de um site se adaptar a diferentes tamanhos de tela, como desktops, tablets e celulares. Isso é feito com:

- **Media Queries:** Permite aplicar estilos específicos dependendo do tamanho da tela.
  ```css
  @media (max-width: 768px) {
      body {
          font-size: 14px;
      }
  }
  ```

- **Unidades Relativas:** Usar unidades como `%`, `em`, `rem`, `vh` e `vw` ajuda a criar designs flexíveis.
  ```css
  .container {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
  }
  ```

- **Imagens Flexíveis:** Usar `max-width: 100%` em imagens para que elas não ultrapassem o tamanho do contêiner.
  ```css
  img {
      max-width: 100%;
      height: auto;
  }
  ```

---

### 4. **Animações e Transições**
Animações e transições permitem adicionar movimento e interatividade aos elementos da página.

- **Transições:** Mudanças suaves entre estados, como hover ou foco.
  ```css
  button {
      background-color: blue;
      transition: background-color 0.3s ease;
  }
  button:hover {
      background-color: red;
  }
  ```

- **Animações:** Cria movimentos mais complexos e controlados com `@keyframes`.
  ```css
  @keyframes slide {
      from { transform: translateX(0); }
      to { transform: translateX(100px); }
  }
  .box {
      animation: slide 2s infinite;
  }
  ```

