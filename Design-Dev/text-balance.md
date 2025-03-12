## Propriedade CSS `text-wrap: balance;`

---

Há uma propriedade experimental do CSS que ainda não tem suporte completo em todos os navegadores, mas vale a pena ficar de olho. Você pode até testá-la no **Chrome Canary** agora mesmo.

Digamos que você está criando um site de portfólio e tem um título como este:

**Exemplo de título**

A quebra de texto está muito desajeitada aqui. Você poderia editar manualmente o HTML com uma tag `<br>` no meio do texto ou reduzir o `max-width` no CSS. No entanto, isso pode ser trabalhoso, especialmente se você tiver vários títulos para ajustar ou quiser editar o texto com frequência.

É aqui que o `text-wrap: balance;` salva o dia. Usando exatamente o mesmo HTML e texto de antes, agora temos algo que parece assim:

**Exemplo de título**

Claro, isso não se limita a títulos e pode ser usado de várias maneiras. Pense em como isso poderia melhorar a aparência de trechos de blog, citações de depoimentos, textos publicitários e muito mais.

O CSS está ficando mais poderoso a cada dia, e você pode se manter atualizado conferindo os documentos mais recentes no [WebReference.com](https://webreference.com).

---

### **Explicação Detalhada**

#### **1. O que é `text-wrap: balance;`?**
- **Propósito**: A propriedade `text-wrap: balance;` é uma nova funcionalidade do CSS que busca equilibrar a distribuição do texto em várias linhas, evitando quebras de texto desagradáveis ou desproporcionais.
- **Funcionamento**: Ela ajusta automaticamente o espaçamento e a quebra de texto para que as linhas tenham um comprimento mais uniforme, melhorando a legibilidade e a estética.

---

#### **2. Problema que ela resolve**
- **Quebra de texto desajeitada**: Em textos curtos, como títulos ou citações, é comum que a quebra de texto resulte em uma linha muito longa e outra muito curta, o que pode parecer desleixado.
- **Soluções tradicionais**:
  - Usar `<br>` no HTML para forçar uma quebra manual.
  - Ajustar o `max-width` no CSS para controlar o comprimento das linhas.
  - Essas soluções são trabalhosas e pouco escaláveis, especialmente em projetos com muitos textos ou que exigem atualizações frequentes.

---

#### **3. Como usar `text-wrap: balance;`**
- **Sintaxe**:
  ```css
  .heading {
    text-wrap: balance;
  }
  ```
- **Exemplo prático**:
  - Sem `text-wrap: balance;`:
    ```html
    <h1>Exemplo de título</h1>
    ```
    Resultado:
    ```
    Exemplo de
    título
    ```
  - Com `text-wrap: balance;`:
    ```html
    <h1 style="text-wrap: balance;">Exemplo de título</h1>
    ```
    Resultado:
    ```
    Exemplo
    de título
    ```
    (As linhas terão comprimentos mais equilibrados.)

---

#### **4. Casos de uso**
- **Títulos e cabeçalhos**: Melhora a aparência de títulos em layouts responsivos.
- **Citações e depoimentos**: Ajusta o texto para que as citações pareçam mais organizadas.
- **Trechos de blog**: Uniformiza a exibição de resumos ou previews de posts.
- **Textos publicitários**: Melhora a legibilidade de textos curtos em banners ou anúncios.

---

#### **5. Suporte do navegador**
- **Experimental**: A propriedade ainda não tem suporte completo em todos os navegadores.
- **Como testar**:
  - Use o **Chrome Canary** (versão experimental do Chrome) para experimentar a funcionalidade.
  - Verifique o suporte atual em [Can I Use](https://caniuse.com/).

---

### **Organizando como Anotação de Estudo**

Aqui está um resumo organizado para você consultar:

---

#### **Propriedade CSS Experimental: `text-wrap: balance;`**

**O que é?**
- Uma propriedade CSS que equilibra a distribuição do texto em várias linhas, melhorando a legibilidade e a estética.

**Problema que resolve**
- Evita quebras de texto desproporcionais em títulos, citações e textos curtos.

**Como usar**
- Aplique a propriedade `text-wrap: balance;` ao elemento desejado:
  ```css
  .heading {
    text-wrap: balance;
  }
  ```

**Exemplo prático**
- Sem `text-wrap: balance;`:
  ```html
  <h1>Exemplo de título</h1>
  ```
  Resultado:
  ```
  Exemplo de
  título
  ```

- Com `text-wrap: balance;`:
  ```html
  <h1 style="text-wrap: balance;">Exemplo de título</h1>
  ```
  Resultado:
  ```
  Exemplo
  de título
  ```

**Casos de uso**
- Títulos e cabeçalhos.
- Citações e depoimentos.
- Trechos de blog ou resumos.
- Textos publicitários.

**Suporte do navegador**
- Disponível atualmente no **Chrome Canary**.
- Verifique o suporte em [Can I Use](https://caniuse.com/).

---

#### **Próximos Passos**
1. **Experimente no Chrome Canary**: Teste a propriedade em projetos pessoais.
2. **Acompanhe atualizações**: Fique de olho na documentação oficial para saber quando o suporte completo será implementado.
3. **Use fallbacks**: Enquanto a propriedade não é amplamente suportada, continue usando soluções como `<br>` ou ajustes de `max-width`.

---

