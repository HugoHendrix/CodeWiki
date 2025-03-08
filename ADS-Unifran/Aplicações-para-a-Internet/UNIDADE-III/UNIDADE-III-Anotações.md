
# **Elementos de Formulários**  

O HTML fornece várias tags para criação de formulários, permitindo a interação do usuário com a página.  

### **Principais Elementos**  

1. **`<form>`** → Define o formulário.  
2. **`<input>`** → Campo de entrada de dados.  
3. **`<textarea>`** → Área de texto de múltiplas linhas.  
4. **`<button>`** → Botão para envio ou ação no formulário.  
5. **`<select>`** → Caixa de seleção (dropdown).  
6. **`<option>`** → Opção dentro do `<select>`.  
7. **`<label>`** → Rótulo para os campos de entrada.  
8. **`<fieldset>`** → Agrupa elementos relacionados dentro do formulário.  
9. **`<legend>`** → Define uma legenda para o `<fieldset>`.  
10. **`<datalist>`** → Fornece sugestões de preenchimento automático para `<input>`.  
11. **`<output>`** → Exibe o resultado de um cálculo ou ação no formulário.  

---

# **Atributos dos Formulários**  

Os atributos são usados para configurar o comportamento dos formulários e seus elementos.  

### **Principais Atributos**  

- **`action`** → Define o destino (URL) para onde os dados do formulário serão enviados.  
- **`method`** → Define o método de envio (`GET` ou `POST`).  
- **`name`** → Identifica o campo para envio dos dados.  
- **`id`** → Identificador único do elemento.  
- **`placeholder`** → Texto exibido no campo antes do usuário digitar algo.  
- **`required`** → Indica que o campo é obrigatório.  
- **`disabled`** → Desativa o campo, impedindo interação.  
- **`readonly`** → Torna o campo somente leitura.  
- **`autocomplete`** → Controla o preenchimento automático do navegador (`on` ou `off`).  

---

# **Novos Tipos de `<input>` no HTML5**  

O HTML5 introduziu novos tipos de campos para melhorar a experiência do usuário e a validação dos dados.  

| **Tipo**      | **Descrição** |
|--------------|--------------|
| **`email`** | Campo para entrada de e-mail (valida formato automaticamente). |
| **`url`** | Campo para entrada de URLs. |
| **`tel`** | Campo para números de telefone. |
| **`number`** | Permite apenas números (pode definir `min`, `max` e `step`). |
| **`date`** | Seletor de data. |
| **`time`** | Seletor de horário. |
| **`range`** | Controle deslizante para definir um valor dentro de um intervalo. |
| **`search`** | Campo otimizado para buscas. |
| **`color`** | Seletor de cores. |

---

# **Exemplo Completo de Formulário**  

```html
<form action="/enviar" method="post">
    <fieldset>
        <legend>Cadastro</legend>

        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome" required placeholder="Digite seu nome">

        <label for="email">E-mail:</label>
        <input type="email" id="email" name="email" required placeholder="seu@email.com">

        <label for="telefone">Telefone:</label>
        <input type="tel" id="telefone" name="telefone" placeholder="(00) 00000-0000">

        <label for="cor">Escolha uma cor:</label>
        <input type="color" id="cor" name="cor">

        <label for="data">Data de nascimento:</label>
        <input type="date" id="data" name="data">

        <label for="nota">Nota:</label>
        <input type="range" id="nota" name="nota" min="0" max="10">

        <label for="pais">País:</label>
        <select id="pais" name="pais">
            <option value="br">Brasil</option>
            <option value="us">Estados Unidos</option>
            <option value="pt">Portugal</option>
        </select>

        <label for="busca">Pesquisar:</label>
        <input type="search" id="busca" name="busca">

        <button type="submit">Enviar</button>
    </fieldset>
</form>
```  

Esse formulário inclui diferentes tipos de `<input>` e elementos de formulário do HTML5.  

