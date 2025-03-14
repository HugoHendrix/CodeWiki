### Usando `:focus-visible` para Melhorar a Acessibilidade

A propriedade CSS `:focus-visible` é uma maneira inteligente de aplicar estilos de foco apenas quando eles são realmente úteis, como quando um usuário está navegando com o teclado. Isso ajuda a criar interfaces mais acessíveis e evita estilos desnecessários quando o foco é acionado por um mouse ou toque.

---

## **O que é `:focus-visible`?**
- **Funcionalidade**: Aplica estilos de foco apenas quando o foco é acionado por meio de navegação por teclado (como a tecla `Tab`).
- **Vantagem**: Evita a aplicação de estilos de foco desnecessários quando o usuário interage com o mouse ou toque, mantendo a interface mais limpa e acessível.

---

## **Exemplo de Uso**

### **HTML**
```html
<button>Clique aqui</button>
<input type="text" placeholder="Digite algo">
<a href="#">Link de exemplo</a>
```

### **CSS**
```css
/* Estilo padrão para todos os elementos */
button, input, a {
  padding: 10px 20px;
  font-size: 16px;
  border: 2px solid transparent;
  border-radius: 5px;
  transition: border-color 0.3s;
}

/* Estilo de foco visível (apenas para navegação por teclado) */
button:focus-visible,
input:focus-visible,
a:focus-visible {
  border-color: #007BFF;
  outline: none; /* Remove o outline padrão */
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5); /* Adiciona um destaque suave */
}
```

---

## **Explicação do Código**

1. **Estilo Padrão**:
   - Todos os elementos (botão, input e link) têm um estilo básico com borda transparente e transição suave.

2. **`:focus-visible`**:
   - Aplica estilos de foco apenas quando o foco é acionado por navegação por teclado.
   - A borda muda para azul (`#007BFF`) e uma sombra suave é adicionada para destacar o elemento.
   - O `outline: none;` remove o contorno padrão do navegador, que pode não combinar com o design.

---

## **Por que Usar `:focus-visible`?**
1. **Melhora a Acessibilidade**:
   - Usuários que dependem do teclado para navegar (como pessoas com deficiência visual) conseguem identificar facilmente o elemento em foco.

2. **Interface Mais Limpa**:
   - Evita estilos de foco desnecessários quando o usuário interage com o mouse ou toque, mantendo a interface visualmente consistente.

3. **Personalização**:
   - Permite criar estilos de foco que combinam com o design do seu site ou aplicativo.

---

## **Boas Práticas**
1. **Contraste Adequado**:
   - Certifique-se de que o estilo de foco tenha bom contraste com o fundo para atender às diretrizes de acessibilidade (WCAG).

2. **Teste em Diferentes Navegadores**:
   - Verifique a compatibilidade do `:focus-visible` em navegadores mais antigos. Caso necessário, use um polyfill ou fallback.

3. **Combine com `:focus`**:
   - Em alguns casos, você pode querer combinar `:focus` e `:focus-visible` para garantir que os estilos de foco sejam aplicados corretamente em todos os cenários.

---

## **Exemplo Completo**

Aqui está o código completo para você testar:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemplo de :focus-visible</title>
    <style>
        /* Estilo padrão para todos os elementos */
        button, input, a {
            padding: 10px 20px;
            font-size: 16px;
            border: 2px solid transparent;
            border-radius: 5px;
            transition: border-color 0.3s;
            margin: 10px;
            display: inline-block;
            text-decoration: none;
            color: #333;
        }

        /* Estilo de foco visível (apenas para navegação por teclado) */
        button:focus-visible,
        input:focus-visible,
        a:focus-visible {
            border-color: #007BFF;
            outline: none; /* Remove o outline padrão */
            box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5); /* Adiciona um destaque suave */
        }
    </style>
</head>
<body>
    <button>Clique aqui</button>
    <input type="text" placeholder="Digite algo">
    <a href="#">Link de exemplo</a>
</body>
</html>
```

---

## **Conclusão**
Usar `:focus-visible` é uma maneira eficaz de melhorar a acessibilidade e a usabilidade da sua interface, garantindo que os estilos de foco sejam aplicados apenas quando necessário. Experimente essa técnica em seus projetos e veja a diferença!

