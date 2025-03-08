# ANOTAÇÕES AULA 02

## **1. Como Criar um HTML Bem Estruturado**
Para criar um HTML bem estruturado, você precisa seguir algumas boas práticas:

### **A) Comece com a Estrutura Básica**
Todo documento HTML deve ter a estrutura mínima, que inclui o `DOCTYPE`, a `tag <html>`, o `head` e o `body`:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu Site Bem Estruturado</title>
</head>
<body>
    <h1>Bem-vindo ao Meu Site</h1>
    <p>Este é um exemplo de um HTML bem estruturado.</p>
</body>
</html>
```

**Explicação:**
- `<!DOCTYPE html>` → Define que o documento usa HTML5.
- `<html lang="pt-BR">` → Define o idioma do site (importante para acessibilidade e SEO).
- `<meta charset="UTF-8">` → Garante suporte a caracteres especiais, como "ç" e "ã".
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">` → Torna o site responsivo.
- `<title>` → Define o título da aba do navegador.

---

### **B) Organize o Conteúdo com Elementos Semânticos**
Usar **elementos semânticos** melhora a estrutura do código e facilita a acessibilidade.

Exemplo de estrutura bem organizada:

```html
<header>
    <h1>Meu Blog</h1>
    <nav>
        <ul>
            <li><a href="#">Início</a></li>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Contato</a></li>
        </ul>
    </nav>
</header>

<main>
    <article>
        <h2>Título do Artigo</h2>
        <p>Conteúdo do artigo...</p>
    </article>
    
    <aside>
        <h3>Links Relacionados</h3>
        <ul>
            <li><a href="#">Artigo 1</a></li>
            <li><a href="#">Artigo 2</a></li>
        </ul>
    </aside>
</main>

<footer>
    <p>&copy; 2025 Meu Blog</p>
</footer>
```

**Explicação dos elementos semânticos:**
- `<header>` → Cabeçalho da página, pode conter logo, título e menu de navegação.
- `<nav>` → Agrupa links de navegação.
- `<main>` → Parte principal do conteúdo.
- `<article>` → Representa um artigo independente.
- `<aside>` → Barra lateral com informações complementares.
- `<footer>` → Rodapé da página.

---

## **2. Elementos Semânticos**
Os **elementos semânticos** são aqueles que dão significado ao conteúdo da página, tornando o código mais organizado e compreensível para navegadores, motores de busca e tecnologias assistivas (como leitores de tela).

Exemplos de elementos semânticos importantes:
| Elemento | Uso |
|----------|-----|
| `<header>` | Cabeçalho da página ou seção |
| `<nav>` | Agrupa links de navegação |
| `<main>` | Indica a área principal do conteúdo |
| `<section>` | Agrupa conteúdos relacionados dentro do `<main>` |
| `<article>` | Representa um artigo independente, como um post de blog |
| `<aside>` | Conteúdo complementar, como barras laterais |
| `<footer>` | Rodapé da página, pode conter informações de contato, direitos autorais, etc. |

**Exemplo de um site estruturado com esses elementos:**
```html
<header>
    <h1>Loja Online</h1>
    <nav>
        <ul>
            <li><a href="#">Produtos</a></li>
            <li><a href="#">Contato</a></li>
        </ul>
    </nav>
</header>

<main>
    <section>
        <h2>Produtos em Destaque</h2>
        <article>
            <h3>Produto 1</h3>
            <p>Descrição do produto...</p>
        </article>
        <article>
            <h3>Produto 2</h3>
            <p>Descrição do produto...</p>
        </article>
    </section>
</main>

<footer>
    <p>© 2025 Loja Online</p>
</footer>
```
Isso ajuda na **SEO (Otimização para Motores de Busca)** e melhora a experiência do usuário.

---

## **3. Acessibilidade (A11Y)**
A acessibilidade no HTML é essencial para permitir que **todas as pessoas**, incluindo aquelas com deficiências visuais, motoras ou cognitivas, possam navegar na web de forma eficiente.

Aqui estão algumas boas práticas:

### **A) Adicione Textos Alternativos (`alt`) em Imagens**
Usuários com deficiência visual utilizam leitores de tela que leem o conteúdo da página. Se uma imagem não carregar ou o usuário não puder vê-la, o atributo `alt` é lido pelo leitor de tela.

**Exemplo correto:**
```html
<img src="cachorro.jpg" alt="Um cachorro feliz brincando no parque">
```

**Exemplo errado:**
```html
<img src="cachorro.jpg">
```
Sem o `alt`, usuários cegos não terão ideia do que a imagem representa.

---

### **B) Use Cabeçalhos (`h1` a `h6`) na Ordem Correta**
Os cabeçalhos ajudam a organizar o conteúdo e são essenciais para navegabilidade por leitores de tela.

**Errado:**
```html
<h3>Sobre Mim</h3>
<h1>Contato</h1>
```
(Aqui a hierarquia está confusa.)

**Certo:**
```html
<h1>Sobre Mim</h1>
<h2>Minha História</h2>
<h3>Infância</h3>
```

---

### **C) Evite Apenas Cores para Transmitir Informação**
Pessoas daltônicas podem não distinguir certas cores. Se um botão tiver apenas a cor como indicação, elas podem não perceber sua função.

**Errado:**
```html
<p style="color: red;">Este campo é obrigatório</p>
```
(Não deixa claro para quem não enxerga vermelho.)

**Certo:**
```html
<p><strong>Atenção:</strong> Este campo é obrigatório</p>
```
(O texto **"Atenção"** transmite o significado mesmo sem cor.)

---

### **D) Use Elementos Semânticos em Formulários**
Os formulários precisam ser acessíveis para que leitores de tela consigam interpretar os campos corretamente.

**Errado:**
```html
<input type="text" placeholder="Digite seu nome">
```
(Usuários de leitores de tela não saberão que campo é esse.)

**Certo:**
```html
<label for="nome">Nome:</label>
<input type="text" id="nome" name="nome">
```
(O `<label>` associa o texto ao campo corretamente.)

---

## **Resumo**
1. **HTML bem estruturado**: Use `DOCTYPE`, defina `lang`, use `<head>` corretamente, e organize o `<body>`.
2. **Elementos semânticos**: Use `<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<aside>`, `<footer>`, etc.
3. **Acessibilidade (A11Y)**:
   - Use `alt` nas imagens.
   - Organize os títulos corretamente (`h1` a `h6`).
   - Não dependa apenas de cores para transmitir informação.
   - Use `<label>` para formulários.
