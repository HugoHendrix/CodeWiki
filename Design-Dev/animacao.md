### **Criando Animações Interessantes com CSS: Exemplo de Efeito de Olhos Brilhantes**

#### **Introdução**
- O **CSS** pode ser uma ferramenta poderosa para criar animações e efeitos visuais impressionantes, sem a necessidade de JavaScript.
- Um exemplo criativo é o efeito de **olhos brilhantes** ao passar o mouse sobre o logotipo do site **Build Tier List**, que utiliza pseudoelementos e transições CSS.

#### **Como Funciona?**
1. **Pseudoelementos `::before` e `::after`**:
   - São usados para criar os "olhos" que aparecem ao passar o mouse.
   - Eles são posicionados de forma absoluta e estilizados com bordas arredondadas (`border-radius`), cores e desfoque (`filter: blur`).

2. **Efeito de Brilho**:
   - A opacidade dos olhos é controlada pela propriedade `opacity`.
   - A transição suave é alcançada com `transition: opacity 0.4s ease-in-out`.

3. **Posicionamento e Rotação**:
   - Os olhos são posicionados com `top`, `left` e `right`.
   - A rotação é aplicada com `transform: rotate()` para dar um ângulo natural.

4. **Efeito de Hover**:
   - Quando o mouse passa sobre o logotipo (`a#logo:hover`), a opacidade dos olhos muda de `0` para `1`, criando o efeito de aparecimento.

#### **Código CSS**
```css
a#logo, a#logo:visited {
    position: relative;
}

/* Olhos brilhantes */
a#logo::before, a#logo::after {
    content: "";
    width: 10px;
    height: 6px;
    border-radius: 100%;
    background-color: orange;
    display: block;
    opacity: 0;
    filter: blur(3px);
    position: absolute;
    top: 37px;
    z-index: 2;
    transition: opacity 0.4s ease-in-out;
}

a#logo::before {
    transform: rotate(27deg);
    left: 37px;
}

a#logo::after {
    transform: rotate(-27deg);
    right: 37px;
}

/* Efeito de hover */
a#logo:hover::before,
a#logo:hover::after {
    opacity: 1;
}
```

#### **Exemplo Prático**
- Para ver o efeito em ação, visite o site:  
  [Build Tier List](https://buildtierlist.com/)

#### **Conclusão**
- Esse exemplo demonstra como o CSS pode ser usado de forma criativa para adicionar interatividade e detalhes visuais impressionantes a um design.
- Com técnicas simples como pseudoelementos, transições e transformações, é possível criar efeitos que chamam a atenção e melhoram a experiência do usuário.

---
