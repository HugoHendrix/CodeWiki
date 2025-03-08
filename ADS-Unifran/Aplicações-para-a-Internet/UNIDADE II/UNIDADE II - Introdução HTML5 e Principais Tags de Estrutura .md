# Introdução ao HTML5 e Principais Tags de Estrutura

## 📝 Conceitos Básicos

A linguagem HTML, desde sua primeira especificação, teve como objetivo principal **estruturar documentos**. Sua especificação **não visa a formatação ou a função de apresentação visual**, como cor de fonte, aspectos de layout, etc.

- **Formatação Visual**: Para formatação, o HTML precisa do **CSS** (Cascading Style Sheets). O **CSS** é responsável por determinar o estilo visual da página.
- **Interatividade**: Para adicionar interatividade aos elementos HTML, utilizamos o **JavaScript**.
  
Embora o HTML5 possua algumas tags que aplicam uma formatação simples, a principal função continua sendo a **estruturação** do conteúdo.

### 🖼️ Exemplo:
- Duas páginas podem ter o mesmo código HTML, mas uma delas aplica **CSS** para formatação, enquanto a outra não.

---

## 📚 Tags: Detalhes Importantes

- **Tags com Fechamento**: Geralmente, as tags HTML são formadas por um **início** e um **fim**, como no exemplo abaixo:

  ```html
  <p>Esta tag define um parágrafo.</p>
  ```

- **Tags sem Fechamento**: Algumas tags não precisam de um fechamento. Um exemplo de tag sem fechamento é a tag `<br />`, que serve para **quebrar a linha**. Ela não possui uma tag de fechamento:

  ```html
  Está tag quebra a linha. <br />
  ```

### 🧩 Estrutura das Tags:
- As tags HTML são delimitadas pelos sinais **"<"** e **">"**. Um exemplo de estrutura básica é:

  ```html
  <html> .... </html>
  ```

---

## 🚫 Tags Obsoletas

Com o uso de **CSS** para estilização e **JavaScript** para funcionalidade, algumas tags do HTML mais antigo não são mais utilizadas. Elas foram substituídas por práticas mais eficientes, que se concentram em separar **estrutura** (HTML), **estilo** (CSS) e **comportamento** (JavaScript).

---

## 📑 Estrutura Básica de um Documento HTML

A estrutura básica de um documento HTML inclui:

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Título da Página</title>
</head>
<body>
  <h1>Bem-vindo à minha página!</h1>
  <p>Este é um exemplo básico de página HTML5.</p>
</body>
</html>
```

- ```<!DOCTYPE html>```: Declara o tipo de documento como HTML5.
- ```<html lang="pt-br">```: Define o idioma da página como português.
- ```<head>```: Contém informações sobre o documento (metadados, links para CSS, etc.).
- ```<body>```: Contém o conteúdo visível da página.

---

# Elementos de uma Página HTML

## 🧩 O que são Elementos?

Os **elementos** em uma página HTML são todas as partes que ocupam um **espaço na tela** quando a página é exibida. Cada elemento ocupa um espaço retangular, com **largura e altura**.

### Características dos Elementos:
- **Espaço na tela**: Cada elemento ocupa um espaço quadrado ou retangular que pode ser manipulado em termos de tamanho e posição (usando CSS).
- **Elementos aninhados**: Elementos podem conter outros elementos. Por exemplo, um **bloco** pode conter **dois blocos menores** dentro dele.

### Tipos de Elementos:
- **Elementos com conteúdo**: Devem ter uma **tag principal** e uma **tag de fechamento**. Exemplo:
  
  ```html
  <p>Este é um parágrafo.</p>
  ```

- **Elementos sem conteúdo**: Não possuem tag de fechamento. Exemplo:
  
  ```html
  <br /> <!-- quebra de linha -->
  <hr /> <!-- linha horizontal -->
  ```

---

## ⚙️ Padrões na Criação do Código HTML

Para garantir que nossos documentos HTML sejam bem estruturados e compatíveis, devemos seguir algumas **boas práticas** e **padrões**.

### Boas Práticas:
- **Documentos bem-formados**: O código HTML deve estar estruturado corretamente, sem erros de sintaxe.
- **Uso de letras minúsculas**: Todas as **tags** e **atributos** devem ser escritos com **letras minúsculas**.
- **Uso obrigatório de tags de fechamento**: As tags de abertura devem sempre ser seguidas por tags de fechamento, exceto em casos específicos como `<br />` e `<hr />`.
- **Elementos vazios**: Para tags vazias como `<br />`, `<hr />`, é permitido o uso de **"/"** para fechar a tag. Por exemplo, `<br />`.
- **Atributos com letras minúsculas**: Os **atributos** devem ser escritos com **letras minúsculas**, como por exemplo: `class="exemplo"`.
- **Valores de atributos**: Os **valores dos atributos** devem ser **escritos entre aspas** (ex: `class="minhaClasse"`).
- **Associação de nome e valor nos atributos**: Cada atributo deve ter um **nome** e um **valor** associados. Exemplo:

  ```html
  <a href="https://www.exemplo.com">Clique aqui</a>
  ```

---

# Caracteres Especiais

Alguns caracteres têm um significado especial no HTML e não podem ser usados diretamente no conteúdo, pois podem ser confundidos com as **tags** do documento. Para evitar esse problema, utilizamos **entidades de caracteres**, que são representações especiais dos caracteres reservados.

### Caracteres Reservados e suas Entidades:
| Caracter | ID | Nome   | Descrição                           |
|----------|----|--------|-------------------------------------|
| `"`      | &#34; | &quot; | Aspas (quotation mark)              |
| `'`      | &#39; | &apos; | Apóstrofe                           |
| `&`      | &#38; | &amp;  | "E" comercial (ampersand)           |
| `<`      | &#60; | &lt;   | Menor que (less-than)               |
| `>`      | &#62; | &gt;   | Maior que (greater-than)            |

---


# Tags Especiais de Organização de Texto

## ✨ `<p>` - Delimita um Parágrafo

A tag `<p>` é utilizada para definir um parágrafo em HTML. Todo conteúdo dentro dessa tag será exibido como um parágrafo.

### Exemplo:
```html
<p>Este conteúdo foi definido como um parágrafo.</p>
```

---

## ✨ `<br>` - Quebra de Linha

A tag `<br>` é usada para inserir uma quebra de linha no texto. Ela não gera um espaço extra, apenas move o conteúdo para a linha seguinte.

### Exemplo:
```html
Linha 1 <br/>
Linha 2
```

### O que ele tem de especial?
É a única tag que não representa um elemento no sentido de que não ocupa um espaço específico na tela. Apenas cria uma nova linha.

---

# Elementos de Estilo

Apesar de ser uma linguagem de **estruturação**, o HTML oferece algumas tags para formatação rápida de texto "in line" (diretamente no código). No entanto, muitas dessas tags foram substituídas pelo uso do **CSS**.

## ✨ Tags de Formatação "In Line":

- `<b>` - Negrito
- `<i>` - Itálico
- `<u>` - Sublinhado
- `<hr>` - Quebra temática de linha (horizontal)

### Exemplos:

```html
<b>em negrito</b>
<i>em itálico</i>
<u>sublinhado</u>
<hr/>
```

Essas tags são usadas para fazer ajustes rápidos no conteúdo, mas devem ser evitadas em favor de técnicas de estilização com **CSS**.

---

# Listas

Em HTML, você pode criar dois tipos de listas:

- **Listas Ordenadas** (com números, letras, etc.)
- **Listas Não Ordenadas** (com marcadores, como pontos ou imagens)

## ✨ `<ol>` - Lista Ordenada

Usada para listas onde a ordem dos itens é importante.

### Exemplo:
```html
<ol>
  <li>item 1</li>
  <li>item 2</li>
</ol>
```

## ✨ `<ul>` - Lista Não Ordenada

Usada para listas sem uma ordem específica.

### Exemplo:
```html
<ul>
  <li>item 1</li>
  <li>item 2</li>
</ul>
```

---

# Tabelas

As tabelas em HTML são compostas por várias tags que ajudam a definir a estrutura das linhas e colunas.

## ✨ `<table>` - Define uma Tabela
## ✨ `<tr>` - Define uma Linha
## ✨ `<td>` - Define uma Coluna (ou célula) dentro de uma linha

### Exemplo:
```html
<table>
  <tr>
    <td>Linha 1 – Coluna 1</td>
    <td>Linha 1 – Coluna 2</td>
  </tr>
  <tr>
    <td>Linha 2 – Coluna 1</td>
    <td>Linha 2 – Coluna 2</td>
  </tr>
</table>
```
----

# Referências Absolutas e Relativas

## 🌐 Referências Absolutas

Uma referência **absoluta** é aquela que inclui o caminho completo de um arquivo, incluindo o protocolo de comunicação (como `http`). Essa referência é válida enquanto o arquivo estiver no mesmo diretório e estrutura.

### Exemplo:
```html
<img src="http://www.alexandergobbato.com/img/imagem1.png" />
```

---

## 🌐 Referências Relativas

Uma referência **relativa** é aquela que se refere a um arquivo com base no diretório atual da página. Isso é usado para arquivos dentro do mesmo projeto.

### Exemplos:
- Quando o arquivo está no mesmo diretório:
  ```html
  <img src="imagem1.png" />
  ```
- Quando o arquivo está em uma pasta (por exemplo, `img`):
  ```html
  <img src="img/imagem1.png" />
  ```
- Caso a pasta `img` esteja um nível acima:
  ```html
  <img src="../img/imagem1.png" />
  ```

---

# Imagens

As imagens suportadas nas páginas Web incluem os seguintes formatos:

- **GIF** (com ou sem animação)
- **JPG**
- **PNG**

### Exemplo:
```html
<img src="imagem1.png" />
```

---

# Tag para Links

A tag `<a>` é utilizada para criar links que conectam uma página a outra, seja dentro do mesmo site ou apontando para páginas externas.

## 🌐 Link para um Arquivo dentro do mesmo diretório:
```html
<a href="imagens/pagina1.html">Clique aqui</a>
```

## 🌐 Link para um Arquivo em um Nível Acima:
```html
<a href="../pagina2.html">Clique aqui</a>
```

## 🌐 Link para um Arquivo Externo:
```html
<a href="http://www.google.com.br/index.html">Clique aqui</a>
```

### Atenção:
Evite usar o caminho físico do arquivo no sistema, como `C:\projetoweb\index.html`, pois isso pode gerar erros quando o site for disponibilizado na web.

---

# Elementos de Semântica

Os **elementos semânticos** são usados para transmitir o significado do conteúdo dentro de um site, melhorando a acessibilidade e a compreensão do código.

## 🌐 Elementos de Linha (Inline)

Esses elementos não quebram o fluxo do texto e geralmente são usados para aplicar estilos ao conteúdo:

- **`<strong>`** - Representa conteúdo importante.
  - Exemplo: `<strong>aparece em negrito</strong>`
  
- **`<em>`** - Representa conteúdo enfatizado.
  - Exemplo: `<em>aparece em itálico</em>`

## 🌐 Elementos de Bloco

São usados para definir blocos de conteúdo, como o `<div>`, mas com um significado semântico. Eles ajudam a identificar o papel de cada parte do conteúdo:

- **`<header>`** - Define a seção de cabeçalho de um documento.
- **`<nav>`** - Define uma seção de navegação.
- **`<section>`** - Define uma seção genérica de um documento.
- **`<article>`** - Define um conteúdo independente e autossuficiente.
- **`<aside>`** - Define conteúdo lateral relacionado, como uma barra lateral.
- **`<footer>`** - Define o rodapé do documento.

---

## Indicações para saber mais sobre os assuntos abordados nesta Unidade:

Esses links são recursos valiosos para quem deseja entender as especificações do HTML, acompanhar as diferenças entre versões ou até mesmo lidar com problemas de compatibilidade entre navegadores.

| **Link** | **Descrição** |
|---|---|
| [W3C HTML5 Differences](https://www.w3.org/TR/html5-diff/) | Este documento apresenta as diferenças entre a especificação HTML5 (atualmente adotada como padrão) e versões anteriores do HTML. Ele é útil para quem está migrando de versões anteriores (como HTML 4.01) para HTML5, destacando as mudanças na sintaxe, nos comportamentos das tags e nos recursos adicionados. |
| [Microsoft IE Developer Docs](https://learn.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/?redirectedfrom=MSDN) | Este link leva à documentação antiga dos desenvolvedores para o Internet Explorer. Embora o IE tenha sido descontinuado, esses documentos são úteis para entender como o browser tratava várias questões de desenvolvimento web, como suporte a padrões e recursos específicos, além de mostrar as limitações das versões mais antigas do navegador. |
| [WHATWG HTML Living Standard](https://html.spec.whatwg.org/) | O WHATWG (Web Hypertext Application Technology Working Group) mantém um "standard vivo" para o HTML, ou seja, uma especificação contínua e em atualização constante. Este é o documento central sobre HTML, fornecendo a definição mais atualizada sobre como o HTML deve funcionar e quais práticas são recomendadas para os desenvolvedores. |
| [HTML5 or Not?](https://html.spec.whatwg.org/#is-this-html5) | Este link é uma seção específica da especificação do WHATWG, que define o que constitui HTML5. Ele aborda se um conjunto de características é considerado parte do HTML5, ajudando a esclarecer dúvidas sobre o que caracteriza essa versão do HTML em comparação com versões anteriores. |

