

### **1. Como Inserir Imagens em HTML**
A tag `<img>` é usada para inserir imagens em uma página HTML. Ela é uma tag **autofechável** (não precisa de tag de fechamento).

#### **Sintaxe básica:**
```html
<img src="caminho/da/imagem.jpg" alt="Descrição da imagem">
```

#### **Atributos importantes:**
1. **`src` (source):**  
   - Define o caminho da imagem (URL ou caminho local).  
   - Exemplo:
     ```html
     <img src="https://www.exemplo.com/imagem.jpg" alt="Imagem de exemplo">
     ```

2. **`alt` (alternate text):**  
   - Fornece um texto alternativo para a imagem, que é exibido se a imagem não carregar ou para acessibilidade (leitores de tela).  
   - Exemplo:
     ```html
     <img src="logo.png" alt="Logo da Empresa">
     ```

3. **`width` e `height`:**  
   - Define a largura e altura da imagem (em pixels ou porcentagem).  
   - Exemplo:
     ```html
     <img src="foto.jpg" alt="Foto" width="300" height="200">
     ```

4. **`title`:**  
   - Adiciona uma dica de ferramenta (tooltip) que aparece quando o usuário passa o mouse sobre a imagem.  
   - Exemplo:
     ```html
     <img src="icone.png" alt="Ícone" title="Clique para mais informações">
     ```

5. **`loading="lazy"`:**  
   - Carrega a imagem apenas quando ela estiver próxima à área visível do usuário, melhorando o desempenho da página.  
   - Exemplo:
     ```html
     <img src="imagem-grande.jpg" alt="Imagem grande" loading="lazy">
     ```

#### **Exemplo completo:**
```html
<img src="https://www.exemplo.com/imagem.jpg" alt="Paisagem bonita" width="600" height="400" title="Uma paisagem incrível" loading="lazy">
```

---

### **2. Direitos Autorais de Imagens**
Ao usar imagens na web, é crucial respeitar os **direitos autorais**. Usar imagens protegidas sem permissão pode resultar em penalidades legais.

#### **O que considerar:**
1. **Licenças de uso:**  
   - **Domínio público:** Imagens sem direitos autorais, livres para uso.  
   - **Creative Commons:** Imagens com licenças que permitem uso gratuito, mas com restrições (ex.: atribuição ao autor).  
   - **Direitos reservados:** Imagens que exigem permissão ou pagamento para uso.

2. **Atribuição:**  
   - Se a licença exigir, dê crédito ao autor da imagem.  
   - Exemplo:
     ```html
     <p>Imagem por <a href="https://www.exemplo.com/autor">Nome do Autor</a></p>
     ```

3. **Verifique a licença:**  
   - Sempre confira os termos de uso da imagem antes de utilizá-la.

---

### **3. Bancos de Imagens Recomendados**
Aqui estão alguns bancos de imagens gratuitos e que oferecem fotos de alta qualidade:

#### **Gratuitos:**
1. **Unsplash** ([unsplash.com](https://unsplash.com/))  
   - Imagens de alta resolução, sem necessidade de atribuição.  
   - Ideal para projetos pessoais e comerciais.

2. **Pexels** ([pexels.com](https://www.pexels.com/))  
   - Banco de imagens e vídeos gratuitos.  
   - Licenças liberadas para uso comercial.

3. **Pixabay** ([pixabay.com](https://pixabay.com/))  
   - Oferece imagens, ilustrações e vetores gratuitos.  
   - Sem necessidade de atribuição.

4. **Freepik** ([freepik.com](https://www.freepik.com/))  
   - Vetores, fotos e PSDs gratuitos (com atribuição necessária na versão gratuita).

---

### **4. Busca de Imagens no Google**
O **Google Imagens** é uma ferramenta poderosa para encontrar imagens, mas é essencial filtrar os resultados para garantir que você está usando imagens com licenças adequadas.

#### **Como refinar a busca no Google Imagens:**
 **Acesse o Google Imagens:**  
   - [https://images.google.com](https://images.google.com).

 **Use a caixa de ferramentas:**  
   - Após fazer uma busca, clique em **"Ferramentas"** (abaixo da barra de pesquisa).  
   - Selecione **"Direitos de uso"** e escolha uma opção, como:  
     - **"Marcadas para reutilização"**  
     - **"Marcadas para reutilização com modificação"**  
     - **"Marcadas para uso não comercial"**

### **1. Marcadas para Reutilização**
**O que significa:**  
- As imagens marcadas como **"Marcadas para reutilização"** podem ser usadas livremente, sem a necessidade de pedir permissão ao autor.  
- Você pode compartilhar, copiar e distribuir essas imagens, desde que siga os termos da licença (que podem variar).

**Quando usar:**  
- Quando você precisa de imagens para projetos pessoais, comerciais ou educacionais, sem a necessidade de fazer modificações.  
- Exemplo: Usar uma foto em um blog, site ou apresentação.

**Licenças comuns associadas:**  
- **Domínio público:** Imagens sem direitos autorais.  
- **Creative Commons (CC0):** Imagens que podem ser usadas livremente, sem atribuição.

---

### **2. Marcadas para Reutilização com Modificação**
**O que significa:**  
- As imagens marcadas como **"Marcadas para reutilização com modificação"** permitem que você não apenas as use, mas também as modifique (recortar, editar, aplicar filtros, etc.).  
- Ainda assim, é importante verificar se a licença exige atribuição ao autor.

**Quando usar:**  
- Quando você precisa personalizar as imagens para se adequar ao seu projeto.  
- Exemplo: Editar uma foto para criar uma capa de livro ou um banner de site.

**Licenças comuns associadas:**  
- **Creative Commons (CC BY):** Permite uso e modificação, mas exige atribuição ao autor.  
- **Creative Commons (CC BY-SA):** Permite uso e modificação, mas exige que obras derivadas sejam compartilhadas sob a mesma licença.

---

### **3. Marcadas para Uso Não Comercial**
**O que significa:**  
- As imagens marcadas como **"Marcadas para uso não comercial"** podem ser usadas gratuitamente, mas **apenas para fins não comerciais**.  
- Isso significa que você não pode usá-las em projetos que gerem lucro direto ou indireto (ex.: anúncios, produtos à venda).  
- A licença pode ou não permitir modificações, então verifique os detalhes.

**Quando usar:**  
- Quando você precisa de imagens para projetos pessoais, educacionais ou sem fins lucrativos.  
- Exemplo: Usar uma foto em um trabalho escolar, blog pessoal ou apresentação acadêmica.

**Licenças comuns associadas:**  
- **Creative Commons (CC BY-NC):** Permite uso não comercial, com atribuição ao autor.  
- **Creative Commons (CC BY-NC-SA):** Permite uso não comercial e modificação, mas exige atribuição e compartilhamento sob a mesma licença.

---

### **4. Marcadas para Reutilização Não Comercial com Modificação**
**O que significa:**  
- As imagens marcadas como **"Marcadas para reutilização não comercial com modificação"** permitem que você as use e modifique, mas **apenas para fins não comerciais**.  
- A licença pode exigir atribuição ao autor.

**Quando usar:**  
- Quando você precisa personalizar imagens para projetos não comerciais.  
- Exemplo: Editar uma foto para criar um pôster para um evento sem fins lucrativos.

**Licenças comuns associadas:**  
- **Creative Commons (CC BY-NC):** Permite uso não comercial e modificação, com atribuição ao autor.  
- **Creative Commons (CC BY-NC-SA):** Permite uso não comercial e modificação, mas exige atribuição e compartilhamento sob a mesma licença.

---


### **Dicas Importantes**
1. **Sempre verifique a licença:**  
   - Mesmo com o filtro do Google, confirme os termos de uso no site de origem da imagem.  
   - Algumas licenças podem exigir atribuição ou ter outras restrições.

2. **Atribuição correta:**  
   - Se a licença exigir, dê crédito ao autor da imagem.  
   - Exemplo:
     ```html
     <p>Foto por <a href="https://www.exemplo.com/autor">Nome do Autor</a> no <a href="https://www.exemplo.com">Site</a></p>
     ```

3. **Use bancos de imagens confiáveis:**  
   - Bancos como Unsplash, Pexels e Pixabay oferecem imagens com licenças claras e fáceis de entender.

---

### **Exemplo de Uso**
Se você encontrar uma imagem no Google Imagens marcada como **"Marcadas para reutilização com modificação"**, pode usá-la assim:

```html
<img src="https://www.exemplo.com/imagem.jpg" alt="Paisagem bonita">
<p>Foto por <a href="https://www.exemplo.com/autor">Nome do Autor</a> no <a href="https://www.exemplo.com">Site</a></p>
```



---

### **Resumo**
- **Inserir imagens em HTML:** Use a tag `<img>` com os atributos `src`, `alt`, `width`, `height` e `loading`.  
- **Direitos autorais:** Respeite as licenças e dê crédito quando necessário.  
- **Bancos de imagens:** Unsplash, Pexels, Pixabay (gratuitos); Shutterstock, Adobe Stock (pagos).  
- **Google Imagens:** Use a ferramenta de filtro para encontrar imagens com licenças adequadas.  
- **Busca em inglês:** Pode retornar mais resultados, especialmente em bancos internacionais.


