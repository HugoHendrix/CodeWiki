# Documentação: HTML Skeleton (Esqueleto HTML)

Baseado no artigo de Josh W. Comeau: [HTML Skeleton](https://www.joshwcomeau.com/snippets/html/html-skeleton/)

## Visão Geral
Este documento descreve a estrutura básica (esqueleto) de um documento HTML moderno, incluindo metadados essenciais e configurações recomendadas para melhor desempenho e compatibilidade.

## Estrutura Básica

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
  </head>
  <body>
    <!-- Conteúdo da página aqui -->
  </body>
</html>
```

## Elementos Explicados

### 1. `<!DOCTYPE html>`
- Define o tipo de documento como HTML5
- Deve ser a primeira linha em qualquer documento HTML
- Não é uma tag HTML, mas uma instrução para o navegador

### 2. `<html lang="en">`
- Elemento raiz do documento
- O atributo `lang` define o idioma principal da página (neste caso, inglês)
- Para português, use `lang="pt"` ou `lang="pt-BR"`

### 3. Seção `<head>`
Contém metadados e configurações que não são exibidos diretamente na página:

#### `<meta charset="UTF-8">`
- Define a codificação de caracteres como UTF-8
- Essencial para exibir caracteres especiais e acentos corretamente

#### `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
- Configura a viewport para layouts responsivos
- `width=device-width` faz a página corresponder à largura da tela
- `initial-scale=1.0` define o nível de zoom inicial

#### `<meta http-equiv="X-UA-Compatible" content="ie=edge">`
- Força o Internet Explorer a usar o motor de renderização mais recente
- Menos relevante hoje em dia, mas ainda usado para compatibilidade

#### `<title>Document</title>`
- Define o título da página (mostrado na aba do navegador)
- Importante para SEO e acessibilidade
- Substitua "Document" pelo título apropriado da sua página

### 4. `<body>`
- Contém todo o conteúdo visível da página
- Onde você coloca textos, imagens, links e outros elementos HTML

## Recomendações Adicionais

### Favicon
Adicione um favicon (ícone exibido na aba do navegador):

```html
<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="icon" href="/icon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
```

### Metatags para SEO
Metadados básicos para melhorar a descoberta:

```html
<meta name="description" content="Uma descrição concisa da sua página">
<meta name="author" content="Nome do autor">
<meta property="og:title" content="Título para compartilhamento em redes sociais">
<meta property="og:description" content="Descrição para compartilhamento">
<meta property="og:image" content="imagem-para-compartilhamento.jpg">
```

### CSS e JavaScript
- Coloque links para CSS no `<head>`
- Coloque scripts JavaScript antes do fechamento `</body>` (a menos que precise carregar antes)

```html
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <!-- conteúdo -->
  <script src="script.js"></script>
</body>
```

## Exemplo Completo

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Your Page Title</title>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <meta name="author" content="Your name">
  <meta name="description" content="Brief description">

  <meta property="og:title" content="Your Page Title">
  <meta property="og:description" content="Brief description">
  <meta property="og:image" content="/some-image.png">
  <meta property="og:url" content="/this-page.html">
  <meta property="og:site_name" content="Your Site Name">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:image:alt" content="image description">

  <link href="style.css" rel="stylesheet">

  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
</head>

<body>

  <h1>Your content here!</h1>

  <script src="script.js"></script>
</body>
</html>
</html>
```

## Observações
- Este esqueleto é um ponto de partida e pode ser expandido conforme necessário
- Para projetos mais complexos, considere adicionar mais metatags e recursos
- Sempre valide seu HTML usando ferramentas como o [W3C Validator](https://validator.w3.org/)