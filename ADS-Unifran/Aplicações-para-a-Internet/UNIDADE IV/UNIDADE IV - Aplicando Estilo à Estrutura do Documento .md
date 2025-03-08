# Aplicando Estilo à Estrutura do Documento  

### O que é CSS (Cascading Style Sheets) ou Folha de Estilo em Cascata?  

CSS é uma linguagem utilizada para definir a apresentação visual de páginas web. Com ela, podemos estilizar elementos HTML, alterando propriedades como fontes, cores, espaçamentos e layouts.  

### Evolução do CSS  

A especificação do CSS é desenvolvida pela W3C (World Wide Web Consortium). A cada nova versão, mais funcionalidades são adicionadas:  

- **CSS1**: Primeira versão, introduziu estilos básicos como cores, fontes e espaçamentos.  
- **CSS2**: Expandiu os recursos do CSS1, incluindo layouts de múltiplas colunas e estilos para impressão.  
- **CSS3**: Introduziu módulos individuais, permitindo que os navegadores implementem novos recursos gradualmente, como animações, gradientes e flexbox.  

### Diferença entre HTML e CSS  

| Característica | HTML | CSS |
|--------------|----------------------------|---------------------------|
| **Função** | Define a estrutura do conteúdo | Define o estilo e aparência |
| **Uso** | Parágrafos, listas, tabelas, links | Cores, fontes, margens, layout |
| **Exemplo** | `<h1>Olá, mundo!</h1>` | `h1 { color: blue; }` |

### Por que usar CSS?  

- **Separação de conteúdo e estilo**: HTML cuida da estrutura, enquanto CSS cuida do design.  
- **Reutilização de código**: Podemos aplicar um mesmo estilo em várias páginas, economizando tempo.  
- **Facilidade de manutenção**: Alterações de design podem ser feitas de forma centralizada.  
- **Melhor experiência do usuário**: Permite criar layouts responsivos e modernos.  

### Métodos para aplicar CSS  

1. **CSS Inline** (no próprio elemento)  
   ```html
   <p style="color: red;">Este é um texto vermelho.</p>
   ```
   **Vantagem**: Aplicação rápida em um único elemento.  
   **Desvantagem**: Difícil de manter e reutilizar.  

2. **CSS Incorporado** (no `<head>` da página)  
   ```html
   <style>
     p { color: red; }
   </style>
   ```
   **Vantagem**: Permite estilizar vários elementos sem precisar repetir código.  
   **Desvantagem**: Ainda está dentro do próprio HTML, dificultando a reutilização.  

3. **CSS Externo** (arquivo separado, recomendado)  
   ```html
   <link rel="stylesheet" href="styles.css">
   ```
   **Vantagem**: Organização, reutilização e fácil manutenção.  

---

## Prioridade dos Estilos CSS  

Quando utilizamos múltiplas formas de aplicar CSS em um documento HTML, é importante entender a hierarquia de prioridade entre elas.  

### Ordem de Prioridade (da menor para a maior):  

1. **CSS Externo** (`<link rel="stylesheet" href="styles.css">`)  
2. **CSS Incorporado** (`<style>` dentro do `<head>`)  
3. **CSS Inline** (atributo `style=""` dentro do próprio elemento)  

Se houver conflito entre os estilos, a regra mais específica e recente será aplicada.  

### Exemplo prático:  

#### Código HTML:
```html
<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Prioridade do CSS</title>
    <link rel="stylesheet" href="styles.css"> <!-- CSS externo -->
    <style>
        p {
            color: blue; /* CSS incorporado */
        }
    </style>
</head>
<body>
    <p style="color: red;">Este é um parágrafo.</p> <!-- CSS inline -->
</body>
</html>
```

#### Código CSS Externo (`styles.css`):  
```css
p {
    color: green;
}
```

### Resultado esperado:  
O texto do `<p>` será vermelho.  

#### Explicação:  
- O CSS externo define `color: green;`, mas é sobrescrito pelo CSS incorporado (`color: blue;`).  
- O CSS inline (`style="color: red;"`) tem a maior prioridade, então o parágrafo será vermelho.  

Se o CSS inline fosse removido, o parágrafo ficaria azul. Se tanto o inline quanto o incorporado fossem removidos, o estilo externo (verde) prevaleceria.  


---

# **Seletores CSS**  

Um seletor CSS é um padrão utilizado para aplicar estilos a elementos específicos dentro do HTML.  

## **Tipos de Seletores**  

1. **Seletor Universal (`*`)** – Aplica estilos a todos os elementos da página.  
2. **Seletor de Tipo** – Aplica estilos a um elemento HTML específico.  
3. **Seletor Agrupado** – Aplica um mesmo estilo a vários elementos.  
4. **Seletor Descendente** – Aplica estilos a elementos dentro de um outro elemento específico.  
5. **Seletor de Classe (`.`)** – Aplica estilos a elementos que possuem uma determinada classe.  
6. **Seletor de ID (`#`)** – Aplica estilos a um único elemento identificado por um ID.  
7. **Seletor de Filho (`>`)** – Aplica estilos apenas aos filhos diretos de um elemento.  

---

## **1️⃣ Seletor Universal (`*`)**  

Aplica a mesma configuração para **todos os elementos** da página.  

### **Sintaxe**  
```css
* {
    font-size: 22px;
    color: blue;
}
```
### **Explicação**  
- `*` → Seleciona todos os elementos da página.  
- `font-size: 22px;` → Define o tamanho da fonte como 22 pixels.  
- `color: blue;` → Define a cor do texto como azul.  

### **Exemplo Prático**  
#### Código HTML:
```html
<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Seletor Universal</title>
    <style>
        * {
            font-size: 22px;
            color: blue;
        }
    </style>
</head>
<body>
    <h1>Título Principal</h1>
    <p>Este é um parágrafo.</p>
    <span>Este é um span.</span>
</body>
</html>
```
🟢 **Todos os elementos (`h1`, `p`, `span`) terão texto azul e tamanho 22px**.  

---

## **2️⃣ Seletor de Tipo**  

Aplica estilos a um elemento HTML específico.  

### **Sintaxe**  
```css
p {
    color: red;
}
```
### **Explicação**  
- `p` → Seleciona todos os parágrafos.  
- `color: red;` → Define a cor do texto dos parágrafos como vermelho.  

### **Exemplo Prático**  
```css
h1 {
    text-align: center;
}
p {
    font-style: italic;
}
```
✅ **O `h1` será centralizado e o `p` ficará em itálico.**  

---

## **3️⃣ Seletor Agrupado**  

Permite aplicar um mesmo estilo a diferentes elementos ao mesmo tempo.  

### **Sintaxe**  
```css
h1, h2, p {
    color: green;
}
```
### **Explicação**  
- `h1, h2, p` → Seleciona todos os elementos `<h1>`, `<h2>` e `<p>`.  
- `color: green;` → Define a cor do texto desses elementos como verde.  

---

## **4️⃣ Seletor Descendente**  

Aplica estilos a elementos que estão **dentro de outro elemento específico**.  

### **Sintaxe**  
```css
div p {
    color: blue;
}
```
### **Explicação**  
- `div p` → Seleciona todos os parágrafos (`<p>`) que **estão dentro** de uma `<div>`.  
- `color: blue;` → Define a cor do texto desses `<p>` como azul.  

### **Exemplo Prático**  
#### Código HTML:
```html
<div>
    <p>Este parágrafo estará azul.</p>
</div>
<p>Este parágrafo estará na cor padrão.</p>
```
✅ **Somente o `<p>` dentro da `<div>` ficará azul.**  

---

## **5️⃣ Seletor de Classe (`.`)**  

Permite aplicar estilos a elementos que possuem um determinado atributo `class`.  

### **Sintaxe**  
```css
.texto-vermelho {
    color: red;
}
```
### **Exemplo Prático**  
```html
<p class="texto-vermelho">Este parágrafo ficará vermelho.</p>
<p>Este outro parágrafo manterá a cor padrão.</p>
```
✅ **Somente o `<p>` com `class="texto-vermelho"` ficará vermelho.**  

---

## **6️⃣ Seletor de ID (`#`)**  

Aplica estilos a um elemento específico identificado por um `id`.  

### **Sintaxe**  
```css
#titulo {
    font-size: 30px;
    color: purple;
}
```
### **Exemplo Prático**  
```html
<h1 id="titulo">Este título terá 30px e cor roxa.</h1>
```
✅ **Como o `id` deve ser único, esse estilo será aplicado apenas a esse `<h1>`.**  

---

## **7️⃣ Seletor de Filho Direto (`>`)**  

Aplica estilos **apenas** aos elementos que são filhos diretos de um determinado elemento pai.  

### **Sintaxe**  
```css
div > p {
    color: orange;
}
```
### **Exemplo Prático**  
#### Código HTML:
```html
<div>
    <p>Este parágrafo será laranja.</p>
    <span>
        <p>Este parágrafo **não** será laranja, pois está dentro de um `<span>`.</p>
    </span>
</div>
```
✅ **Somente os `<p>` que são filhos diretos de `<div>` ficarão laranja.**  

---

## **Resumo dos Seletores**  

| Seletor | Sintaxe | O que faz? |
|---------|---------|-----------|
| **Universal (`*`)** | `* {}` | Aplica estilos a todos os elementos. |
| **Tipo** | `h1 {}` | Aplica estilos a todos os elementos de um tipo específico. |
| **Agrupado** | `h1, p {}` | Aplica o mesmo estilo a vários elementos. |
| **Descendente** | `div p {}` | Aplica estilo a elementos dentro de outro elemento. |
| **Classe (`.`)** | `.classe {}` | Aplica estilo a elementos com determinada classe. |
| **ID (`#`)** | `#id {}` | Aplica estilo a um elemento específico. |
| **Filho Direto (`>`)** | `div > p {}` | Aplica estilo apenas aos filhos diretos de um elemento. |




# Guia de CSS - Estrutura e Seletores

## Prioridade no CSS
Quando utilizamos diferentes formas de inserir CSS em um documento HTML, é importante entender a ordem de prioridade dos estilos aplicados:

1. **CSS Inline (Maior prioridade)** - Definido diretamente no elemento HTML usando o atributo `style`.
2. **CSS Incorporado** - Definido dentro da tag `<style>` no próprio documento HTML.
3. **CSS Externo** - Definido em um arquivo separado `.css` e vinculado ao HTML.
4. **Estilos padrão do HTML (Menor prioridade)** - O estilo padrão do navegador.

Se houver conflito entre os estilos, a regra com maior prioridade será aplicada.

---

## Seletores CSS
Um **seletor CSS** é um padrão utilizado para aplicar estilos aos elementos desejados no HTML.

### 1. Seletor Universal (`*`)
Aplica um estilo a todos os elementos da página.
```css
* {
    font-size: 22pt;
}
```
### 2. Seletor Tipo (Elemento Específico)
Aplica estilos a um elemento específico.
```css
p {
    color: red;
}
h1 {
    font-size: 24px;
}
```

### 3. Seletores Agrupados
Aplicam o mesmo estilo a vários elementos.
```css
p, h1, h2 {
    color: blue;
}
```

### 4. Seletor Descendente
Aplica estilos a um elemento dentro de outro elemento específico.
```css
div p {
    color: blue;
}
p b {
    color: red;
}
```

### 5. Seletor Classe
Aplica estilos a elementos que possuem a mesma classe.
```css
.destacado {
    font-weight: bold;
    color: green;
}
```
Uso no HTML:
```html
<p class="destacado">Este é um texto destacado.</p>
```

### 6. Seletor ID
Aplica estilos a um único elemento com um identificador único.
```css
#titulo-principal {
    font-size: 30px;
    color: blue;
}
```
Uso no HTML:
```html
<h1 id="titulo-principal">Título Principal</h1>
```

### 7. Seletor Filho
Aplica estilos apenas aos elementos que são **filhos diretos** de um elemento específico.
```css
div > p {
    color: blue;
}
```

---

## Comentários no CSS
Comentários são usados para documentar o código e não afetam o estilo da página.
```css
/* Este é um comentário no CSS */
```

---

## Tags DIV, SPAN e Estrutura Semântica
- **`<div>`**: Usada para agrupar elementos e criar layouts.
- **`<span>`**: Usada para estilizar partes específicas do texto.
- **Tags semânticas**: `<article>`, `<aside>`, `<nav>`, `<section>`, etc.

```html
<div class="container">
    <span class="destaque">Texto destacado</span>
</div>
```

---

## Cores no CSS
### Valores Hexadecimais
- `#FF0000` ou `#F00` → Vermelho
- `#00FF00` ou `#0F0` → Verde
- `#0000FF` ou `#00F` → Azul

### RGB
```css
color: rgb(255, 0, 0); /* Vermelho */
```

---

## Recursos Complementares
- [Documentação CSS - MDN](https://mzl.la/2GYqrCc)
- [CSS3 Selectors Test](https://www.css3.info/selectors-test/)
- [CSS3 Generator](https://css3generator.com/)

---


