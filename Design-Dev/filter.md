# A propriedade CSS **`filter`** 

Como ela funciona e como você pode usá-la para aplicar efeitos visuais em imagens. 

---

Um truque de CSS menos conhecido é usar a propriedade **`filter`** para aplicar efeitos gráficos, como desfoque ou mudança de cores, a uma imagem. A propriedade `filter` é muito poderosa e versátil, permitindo uma ampla gama de efeitos diretamente no código CSS, sem a necessidade de editores gráficos externos.

Aqui está um exemplo de como você poderia usá-la para aplicar um efeito de escala de cinza:

```css
img {
    filter: grayscale(100%);
}
```

Neste caso, a imagem será completamente convertida para escala de cinza. Você pode ajustar a porcentagem para controlar a intensidade do efeito.

Essa propriedade também pode ser combinada com outros efeitos CSS para criar modificações visuais mais complexas. Por exemplo, você poderia combinar desfoque e brilho para um efeito "dreamy":

```css
img {
    filter: blur(4px) brightness(150%);
}
```

---

### **Explicação Detalhada**

#### **1. O que é a propriedade `filter`?**
- **Definição**: A propriedade `filter` aplica efeitos visuais, como desfoque, brilho, contraste e escala de cinza, a elementos HTML (principalmente imagens).
- **Vantagens**:
  - Efeitos aplicados diretamente no navegador, sem necessidade de editar imagens externamente.
  - Combinação de múltiplos efeitos em uma única declaração.

---

#### **2. Efeitos disponíveis**
Aqui estão alguns dos efeitos mais comuns que você pode aplicar com a propriedade `filter`:

- **`grayscale()`**: Converte a imagem para escala de cinza.
  ```css
  filter: grayscale(100%);
  ```

- **`blur()`**: Aplica um desfoque à imagem.
  ```css
  filter: blur(4px);
  ```

- **`brightness()`**: Ajusta o brilho da imagem.
  ```css
  filter: brightness(150%);
  ```

- **`contrast()`**: Ajusta o contraste da imagem.
  ```css
  filter: contrast(200%);
  ```

- **`sepia()`**: Aplica um efeito sépia à imagem.
  ```css
  filter: sepia(100%);
  ```

- **`hue-rotate()`**: Rotaciona a matiz (hue) das cores da imagem.
  ```css
  filter: hue-rotate(90deg);
  ```

- **`invert()`**: Inverte as cores da imagem.
  ```css
  filter: invert(100%);
  ```

- **`opacity()`**: Ajusta a opacidade da imagem.
  ```css
  filter: opacity(50%);
  ```

- **`saturate()`**: Ajusta a saturação das cores da imagem.
  ```css
  filter: saturate(200%);
  ```

---

#### **3. Como combinar efeitos**
Você pode combinar vários efeitos em uma única declaração `filter`. Por exemplo:

```css
img {
    filter: grayscale(50%) blur(2px) brightness(120%);
}
```

Isso aplicará:
- 50% de escala de cinza.
- Um desfoque de 2 pixels.
- Aumento de 20% no brilho.

---

### **Organizando como Anotação de Estudo**

Aqui está um resumo organizado para você consultar:

---

#### **Propriedade CSS: `filter`**

**O que é?**
- Propriedade que aplica efeitos visuais a elementos HTML, como imagens.

**Efeitos disponíveis**
- **`grayscale()`**: Converte para escala de cinza.
  ```css
  filter: grayscale(100%);
  ```
- **`blur()`**: Aplica desfoque.
  ```css
  filter: blur(4px);
  ```
- **`brightness()`**: Ajusta o brilho.
  ```css
  filter: brightness(150%);
  ```
- **`contrast()`**: Ajusta o contraste.
  ```css
  filter: contrast(200%);
  ```
- **`sepia()`**: Aplica efeito sépia.
  ```css
  filter: sepia(100%);
  ```
- **`hue-rotate()`**: Rotaciona a matiz das cores.
  ```css
  filter: hue-rotate(90deg);
  ```
- **`invert()`**: Inverte as cores.
  ```css
  filter: invert(100%);
  ```
- **`opacity()`**: Ajusta a opacidade.
  ```css
  filter: opacity(50%);
  ```
- **`saturate()`**: Ajusta a saturação.
  ```css
  filter: saturate(200%);
  ```

**Como combinar efeitos**
- Use múltiplos efeitos em uma única declaração:
  ```css
  img {
      filter: grayscale(50%) blur(2px) brightness(120%);
  }
  ```

---

#### **Exemplos Práticos**
1. **Efeito de escala de cinza**:
   ```css
   img {
       filter: grayscale(100%);
   }
   ```

2. **Efeito "dreamy" (desfoque + brilho)**:
   ```css
   img {
       filter: blur(4px) brightness(150%);
   }
   ```

3. **Efeito vintage (sépia + contraste)**:
   ```css
   img {
       filter: sepia(80%) contrast(120%);
   }
   ```

---

#### **Próximos Passos**
1. **Experimente no seu projeto**: Aplique efeitos `filter` em imagens do seu site.
2. **Combine efeitos**: Crie combinações únicas para diferentes estilos visuais.
3. **Teste em navegadores**: Verifique a compatibilidade com [Can I Use](https://caniuse.com/css-filters).

---

