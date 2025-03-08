

### **Introdução**
Nesta unidade, exploraremos o conceito de **CMS (Content Management System)**, também conhecido como **WCMS (Web Content Management System)**. Um CMS é uma aplicação web que permite a criação, edição e gerenciamento de conteúdo de sites sem a necessidade de conhecimentos avançados em HTML. Ele oferece recursos para diferentes níveis de usuários, com permissões variadas, facilitando a colaboração e a administração de sites.

#### **O que é Gerenciamento de Conteúdo?**
Refere-se ao processo de criar, editar, arquivar, publicar e gerenciar informações em um site. Um CMS simplifica essas tarefas, permitindo que até mesmo usuários sem experiência técnica possam administrar um site de forma eficiente.

---

### **Opções de CMS no Mercado**
Existem várias opções de CMS disponíveis, cada uma com suas características e vantagens. Abaixo, destacamos algumas das principais:

#### **1. Drupal**
- **Descrição:** Um CMS robusto, frequentemente chamado de *Framework de Gerenciamento de Conteúdo*.  
- **Diferencial:** Oferece APIs poderosas e uma estrutura modular, facilitando a criação de módulos personalizados.  
- **Indicação:** Ideal para projetos que exigem alta customização e escalabilidade.

#### **2. Redaxscript**
- **Descrição:** Um CMS de código aberto, leve e repleto de recursos.  
- **Diferencial:** Já vem otimizado para dispositivos móveis e SEO, essencial para o sucesso de qualquer projeto.  
- **Tecnologias:** Desenvolvido em PHP e utiliza MySQL como banco de dados.

#### **3. Joomla**
- **Descrição:** Um dos CMS mais populares, criado em 2006.  
- **Diferencial:** Amplamente utilizado, com uma grande comunidade de suporte e diversos recursos disponíveis.  
- **Indicação:** Perfeito para sites dinâmicos e de médio porte.

#### **4. Pimcore**
- **Descrição:** Uma plataforma completa para criação de portais, lojas virtuais e gestão de marketing.  
- **Diferencial:** Oferece ferramentas avançadas para engajamento de clientes e análise de campanhas.  
- **Indicação:** Ideal para projetos que exigem integração com estratégias de marketing.

#### **5. Mambo**
- **Descrição:** Criado em 2000, foi um dos primeiros CMS de código aberto.  
- **Diferencial:** Desenvolvido com foco em ser uma solução robusta e competitiva, mesmo sendo open source.  
- **Tecnologias:** Baseado no conjunto AMP (Apache, MySQL e PHP).

#### **6. WordPress**
- **Descrição:** O CMS mais popular do mundo, voltado para criação de sites e blogs.  
- **Diferencial:** Fácil de usar, com uma vasta biblioteca de temas e plugins.  
- **Tecnologias:** Desenvolvido em PHP com banco de dados MySQL.

#### **7. OpenCart**
- **Descrição:** Um sistema de e-commerce open source.  
- **Diferencial:** Focado em facilidade de instalação e uso, ideal para lojas virtuais.  
- **Licença:** Distribuído sob a GNU General Public License.

---

### **Conceitos da Arquitetura Cliente/Servidor**
Na arquitetura cliente/servidor, o **cliente** (navegador) envia uma solicitação ao **servidor** através de uma conexão de rede. O servidor processa a solicitação e retorna uma resposta ao cliente. A internet é baseada nesse modelo, onde servidores web atendem a múltiplos clientes simultaneamente, fornecendo serviços como acesso a sites.

- **Exemplo:** Quando você digita um URL (Uniform Resource Locator) no navegador, ele envia uma requisição ao servidor, que responde com o conteúdo da página.

---

### **O que é PHP?**
PHP (Hypertext Preprocessor) é uma linguagem de script open source, amplamente utilizada para desenvolvimento web. Ela pode ser embutida diretamente no HTML, permitindo a criação de páginas dinâmicas.

- **Exemplo de uso:**  
  ```php
  <?php
      echo "Olá, mundo!";
  ?>
  ```
  O código PHP é processado no servidor, enquanto o navegador recebe apenas o HTML resultante.

---

### **Servidor Apache**
O **Apache** é o servidor web mais utilizado no mundo. Criado em 1995, ele é compatível com o protocolo HTTP e suporta uma variedade de sistemas operacionais, como Windows, Linux e macOS.

- **Diferencial:** Sua estrutura modular permite a personalização através de módulos adicionais.  
- **Estatísticas:** Em 2010, o Apache atendia cerca de 54,68% de todos os sites ativos.

---

### **Servidor de Banco de Dados: MySQL**
O **MySQL** é o banco de dados open source mais popular do mundo. Conhecido por sua confiabilidade e desempenho, ele é amplamente utilizado em aplicações web, incluindo sites como Facebook e Twitter.

- **Diferencial:** Facilidade de uso e integração com outras tecnologias, como PHP e Apache.

---

### **Ferramentas Necessárias para Utilizar um CMS**
Para configurar um CMS como o WordPress, é necessário instalar e configurar as seguintes ferramentas no servidor:
1. **Servidor Web:** Apache ou Nginx.  
2. **Banco de Dados:** MySQL.  
3. **Linguagem de Programação:** PHP.  

Para facilitar a instalação, você pode usar pacotes como:
- **WAMP** (Windows)  
- **XAMPP** (Multiplataforma)  
- **EasyPHP** (Windows)  

---

### **Iniciando com o WordPress**
Siga os passos abaixo para instalar e configurar o WordPress:

1. **Baixar o WordPress:**  
   Acesse [https://br.wordpress.org/](https://br.wordpress.org/) e baixe a última versão.

2. **Criar uma Pasta no Servidor:**  
   Dentro da pasta `www` do WAMP, crie uma pasta para o seu projeto (ex.: `projeto1`).

3. **Iniciar o Servidor:**  
   Inicie o WAMP e verifique se o ícone na barra de tarefas está verde.

4. **Descompactar o WordPress:**  
   Descompacte os arquivos do WordPress na pasta do projeto.

5. **Acessar a Instalação:**  
   No navegador, acesse `http://localhost:85/projeto1/` (ajuste a porta conforme necessário).

6. **Criar o Banco de Dados:**  
   Acesse o phpMyAdmin (`http://localhost:85/phpmyadmin`) e crie um banco de dados para o projeto.

7. **Configurar o WordPress:**  
   Siga as instruções na tela de instalação, informando os dados do banco de dados.

8. **Acessar o Painel Administrativo:**  
   Após a instalação, acesse o painel em `http://localhost:85/projeto1/wp-login.php`.

---

### **Conceitos Básicos do WordPress**
No painel administrativo, você pode:
- **Modificar Temas:** Personalizar o design do site.  
- **Criar Páginas:** Adicionar conteúdo ao site.  
- **Exportar/Importar Conteúdo:** Migrar dados entre instalações do WordPress.  

---

### **Material Complementar**
Para aprofundar seus conhecimentos, confira os seguintes recursos:
- **Diretório de Temas do WordPress:** [http://wordpress.org/themes/](http://wordpress.org/themes/)  
- **40+ Free Responsive WordPress Themes:** [http://www.hongkiat.com/blog/free-responsive-wordpress-themes/](http://www.hongkiat.com/blog/free-responsive-wordpress-themes/)  

---
