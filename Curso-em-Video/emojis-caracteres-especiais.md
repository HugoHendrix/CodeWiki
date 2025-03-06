
#  Emojis e Caracteres Especiais

---

Os emojis são caracteres especiais que fazem parte do padrão **Unicode**. Eles podem ser usados diretamente em textos ou por meio de códigos HTML.

#### **Como usar emojis:**
1. **Diretamente no texto:**  
   - Basta copiar e colar o emoji no seu código ou documento.  
   - Exemplo:
     ```html
     <p>Olá! 😊</p>
     ```

2. **Usando códigos HTML:**  
   - Cada emoji tem um código Unicode que pode ser usado em HTML.  
   - Formato: `&#x[código hexadecimal];` ou `&#[código decimal];`.  
   - Exemplo:
     ```html
     <p>Olá! &#x1F60A;</p> <!-- Emoji "😊" -->
     <p>Olá! &#128522;</p>   <!-- Mesmo emoji em decimal -->
     ```

#### **Tabela de Emojis (HTML):**
```html
<table border="1">
    <thead>
        <tr>
            <th>Emoji</th>
            <th>Código Hexadecimal</th>
            <th>Código Decimal</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>😊</td>
            <td><code>&#x1F60A;</code></td>
            <td><code>&#128522;</code></td>
        </tr>
        <tr>
            <td>❤️</td>
            <td><code>&#x2764;</code></td>
            <td><code>&#10084;</code></td>
        </tr>
        <tr>
            <td>🌍</td>
            <td><code>&#x1F30D;</code></td>
            <td><code>&#127757;</code></td>
        </tr>
        <tr>
            <td>🚀</td>
            <td><code>&#x1F680;</code></td>
            <td><code>&#128640;</code></td>
        </tr>
    </tbody>
</table>
```

---

### **2. Símbolos Especiais**
Além dos emojis, o Unicode inclui uma variedade de símbolos especiais, como marcas registradas, setas, moedas, matemáticos, etc.

#### **Como usar símbolos especiais:**
1. **Diretamente no texto:**  
   - Copie e cole o símbolo no seu código ou documento.  
   - Exemplo:
     ```html
     <p>Marca registrada: ®</p>
     ```

2. **Usando códigos HTML:**  
   - Cada símbolo tem um código Unicode que pode ser usado em HTML.  
   - Formato: `&#x[código hexadecimal];` ou `&#[código decimal];`.  
   - Exemplo:
     ```html
     <p>Marca registrada: &#x00AE;</p> <!-- Símbolo "®" -->
     <p>Marca registrada: &#174;</p>    <!-- Mesmo símbolo em decimal -->
     ```

#### **Tabela de Símbolos Especiais (HTML):**
```html
<table border="1">
    <thead>
        <tr>
            <th>Símbolo</th>
            <th>Descrição</th>
            <th>Código Hexadecimal</th>
            <th>Código Decimal</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>®</td>
            <td>Marca registrada</td>
            <td><code>&#x00AE;</code></td>
            <td><code>&#174;</code></td>
        </tr>
        <tr>
            <td>©</td>
            <td>Copyright</td>
            <td><code>&#x00A9;</code></td>
            <td><code>&#169;</code></td>
        </tr>
        <tr>
            <td>™</td>
            <td>Trade Mark (Marca comercial)</td>
            <td><code>&#x2122;</code></td>
            <td><code>&#8482;</code></td>
        </tr>
        <tr>
            <td>€</td>
            <td>Euro</td>
            <td><code>&#x20AC;</code></td>
            <td><code>&#8364;</code></td>
        </tr>
        <tr>
            <td>¥</td>
            <td>Iene/Juan</td>
            <td><code>&#x00A5;</code></td>
            <td><code>&#165;</code></td>
        </tr>
        <tr>
            <td>→</td>
            <td>Seta para a direita</td>
            <td><code>&#x2192;</code></td>
            <td><code>&#8594;</code></td>
        </tr>
        <tr>
            <td>♥</td>
            <td>Coração</td>
            <td><code>&#x2665;</code></td>
            <td><code>&#9829;</code></td>
        </tr>
        <tr>
            <td>★</td>
            <td>Estrela</td>
            <td><code>&#x2605;</code></td>
            <td><code>&#9733;</code></td>
        </tr>
    </tbody>
</table>
```

---

### **3. Caracteres Especiais em HTML**
Alguns caracteres têm significados especiais em HTML (como `<`, `>`, `&`). Para exibi-los corretamente, você precisa usar **entidades HTML**.

#### **Exemplos de entidades HTML:**
```html
<table border="1">
    <thead>
        <tr>
            <th>Caractere</th>
            <th>Entidade HTML</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>&lt;</td>
            <td><code>&amp;lt;</code></td>
        </tr>
        <tr>
            <td>&gt;</td>
            <td><code>&amp;gt;</code></td>
        </tr>
        <tr>
            <td>&amp;</td>
            <td><code>&amp;amp;</code></td>
        </tr>
        <tr>
            <td>&quot;</td>
            <td><code>&amp;quot;</code></td>
        </tr>
        <tr>
            <td>&apos;</td>
            <td><code>&amp;apos;</code></td>
        </tr>
    </tbody>
</table>
```

---

### **4. Como Inserir Caracteres Especiais no CSS**
No CSS, você pode usar códigos Unicode para adicionar símbolos ou emojis ao conteúdo de um elemento.

**Exemplo:**
```css
/* Adiciona um coração antes de um parágrafo */
p::before {
    content: "\2665"; /* Código Unicode para "♥" */
    color: red;
    margin-right: 5px;
}
```

---

### **5. Como Inserir Caracteres Especiais no JavaScript**
No JavaScript, você pode usar códigos Unicode diretamente em strings.

**Exemplo:**
```javascript
let emoji = "😊";
let simbolo = "®";

console.log("Olá! " + emoji); // Exibe: Olá! 😊
console.log("Marca registrada: " + simbolo); // Exibe: Marca registrada: ®
```

---

### **Resumo**
- **Emojis:** Use códigos Unicode ou copie e cole diretamente.  
- **Símbolos especiais:** Use códigos Unicode ou entidades HTML.  
- **Caracteres especiais em HTML:** Use entidades HTML para exibir `<`, `>`, `&`, etc.  
- **CSS e JavaScript:** Use códigos Unicode para adicionar símbolos dinamicamente.

**Ferramentas úteis:**
- [Emojipedia](https://emojipedia.org/) para emojis.  
- [Unicode Table](https://unicode-table.com/) para símbolos especiais.  
- [HTML Entities](https://www.w3schools.com/html/html_entities.asp) para entidades HTML.
- [UTF-8 Miscellaneous Symbols](https://www.w3schools.com/charsets/ref_utf_symbols.asp) Tabela de simbolos W3Schools.
- [PDF Aula 05](curso-em-video-aulas-em-pdf/05.pdf)


