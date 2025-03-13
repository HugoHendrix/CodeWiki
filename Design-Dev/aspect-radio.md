### **Mantendo a Proporção de Aspecto com a Propriedade `aspect-ratio` no CSS**


- Manter a proporção de aspecto (aspect ratio) em layouts de design web é essencial, especialmente para elementos como **imagens** e **vídeos**.
- A propriedade CSS **`aspect-ratio`** simplifica esse desafio, permitindo definir uma proporção fixa para um elemento.
- Neste exemplo, vamos explorar como usar `aspect-ratio` para manter uma imagem com proporção **16:9**, independentemente do tamanho do contêiner.

---

#### **Como Funciona?**
- **`aspect-ratio`**:
  - Define a proporção entre a largura e a altura de um elemento.
  - No exemplo, usamos `aspect-ratio: 16/9` para garantir que a imagem sempre mantenha uma proporção de 16:9.

- **`object-fit: cover`**:
  - Garante que a imagem cubra todo o espaço do contêiner sem distorcer a proporção.
  - Se a imagem for maior que o contêiner, ela será cortada para se ajustar.

---

#### **Código HTML**
```html
<figure>
    <img src="example.jpg" alt="demo image">
</figure>
```

---

#### **Código CSS**
```css
figure {
    width: 100%; /* Largura do contêiner */
    aspect-ratio: 16/9; /* Proporção de aspecto 16:9 */
    overflow: hidden; /* Esconde qualquer conteúdo que ultrapasse o contêiner */
}

figure img {
    width: 100%; /* Largura da imagem igual ao contêiner */
    height: 100%; /* Altura da imagem igual ao contêiner */
    object-fit: cover; /* Cobrir o contêiner sem distorcer a imagem */
}
```

---

#### **Explicação do Código**
1. **`figure`**:
   - O contêiner (`figure`) tem uma largura de 100% e uma proporção de aspecto fixa de 16:9.
   - O `overflow: hidden` garante que qualquer parte da imagem que ultrapasse o contêiner seja cortada.

2. **`img`**:
   - A imagem ocupa 100% da largura e altura do contêiner.
   - O `object-fit: cover` faz com que a imagem cubra todo o espaço do contêiner, mantendo sua proporção original.

---

#### **Benefícios**
1. **Layout Responsivo**:
   - A proporção de aspecto é mantida em diferentes tamanhos de tela, garantindo um design consistente.

2. **Sem Distorções**:
   - A imagem não é esticada ou comprimida, mantendo sua qualidade visual.

3. **Simplicidade**:
   - A propriedade `aspect-ratio` elimina a necessidade de cálculos manuais ou hacks para manter a proporção.

---

#### **Considerações**
1. **Suporte a Navegadores**:
   - A propriedade `aspect-ratio` é relativamente nova e pode não ser suportada em navegadores mais antigos.
   - Verifique a compatibilidade em [Can I use](https://caniuse.com/).

2. **Fallback para Navegadores Antigos**:
   - Para navegadores que não suportam `aspect-ratio`, considere usar técnicas como padding hack (ex.: `padding-top: 56.25%` para 16:9).

---

#### **Exemplo Prático**
```html
<figure>
    <img src="example.jpg" alt="demo image">
</figure>
```

```css
figure {
    width: 100%;
    aspect-ratio: 16/9;
    overflow: hidden;
}

figure img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
```

---

#### **Conclusão**
- A propriedade **`aspect-ratio`** é uma solução moderna e eficaz para manter proporções de aspecto em elementos como imagens e vídeos.
- Combinada com `object-fit: cover`, ela garante que o conteúdo visual seja exibido de forma consistente e sem distorções.
- Ideal para designs responsivos e projetos que visam navegadores modernos.

---

