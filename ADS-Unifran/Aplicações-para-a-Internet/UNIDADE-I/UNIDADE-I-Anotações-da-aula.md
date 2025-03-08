# ANOTAÇÕES AULA 01

### 1. **Requisições e Respostas HTTP**

Quando você acessa uma página na internet, o seu navegador faz uma **requisição HTTP** para o servidor onde o site está hospedado. Essa requisição solicita o conteúdo da página (como texto, imagens, scripts, etc.).

- **Requisição HTTP**: É a mensagem enviada pelo cliente (geralmente seu navegador) para o servidor, pedindo algum recurso (como uma página HTML). A requisição é composta por várias partes, como o **método** (GET, POST, etc.), o **caminho** do recurso (ex: `/index.html`), e os **cabeçalhos** com informações sobre o que o cliente está pedindo.

- **Resposta HTTP**: Após processar a requisição, o servidor envia uma resposta HTTP. Ela contém o status da requisição (como `200 OK` ou `404 Not Found`), e os dados solicitados (como o conteúdo HTML da página).

### 2. **TCP/IP (Transmission Control Protocol/Internet Protocol)**

O **TCP/IP** é um conjunto de protocolos que define como os dados são enviados e recebidos pela internet. Ele é a espinha dorsal da comunicação entre dispositivos conectados à rede.

- **IP (Internet Protocol)**: Ele é responsável por endereçar os pacotes de dados. Cada dispositivo na internet possui um endereço IP único, assim como uma casa tem um endereço único.
  
- **TCP (Transmission Control Protocol)**: Este protocolo garante que os dados sejam entregues corretamente e na ordem certa. Quando você acessa um site, o TCP divide os dados em pacotes, envia-os e garante que todos os pacotes sejam recebidos e reorganizados corretamente pelo destinatário.

### 3. **Processamento da Requisição e Retorno ao Cliente**

Quando um servidor recebe uma requisição, ele passa por um processo para entender o que o cliente está pedindo, buscar os dados necessários e montar uma resposta.

- **Recebimento da requisição**: O servidor recebe a requisição HTTP e a interpreta para entender o que está sendo pedido.
- **Processamento**: O servidor então busca os dados no banco de dados ou no sistema de arquivos (por exemplo, ele pode buscar um arquivo HTML ou executar um script PHP).
- **Resposta ao Cliente**: Depois de processar a requisição, o servidor envia de volta ao cliente uma resposta HTTP, que pode conter o conteúdo solicitado (como a página HTML) ou uma mensagem de erro.

### 4. **Protocolo HTTP e HTTPS**

- **HTTP (HyperText Transfer Protocol)**: É o protocolo usado para transferir páginas da web. Ele define como os dados são formatados e transmitidos entre o cliente e o servidor. Por exemplo, ao acessar um site como `http://www.exemplo.com`, o navegador utiliza o HTTP para comunicar com o servidor.

- **HTTPS (HTTP Secure)**: É a versão segura do HTTP. Ele utiliza criptografia para proteger os dados transmitidos, de modo que ninguém possa interceptar ou modificar os dados enquanto eles estão sendo transferidos. HTTPS é uma camada extra de segurança que utiliza o **SSL/TLS** (Secure Sockets Layer / Transport Layer Security) para garantir que a comunicação seja segura. Ao acessar um site como `https://www.exemplo.com`, a comunicação entre o seu navegador e o servidor será criptografada.

**Diferença entre HTTP e HTTPS**:
- HTTP: Não é seguro, pois os dados são transmitidos sem criptografia.
- HTTPS: É seguro, porque a comunicação é criptografada, protegendo os dados de interceptação.

### Resumo

1. **Requisição HTTP**: Enviada pelo cliente para o servidor.
2. **Resposta HTTP**: Enviada pelo servidor para o cliente com os dados solicitados.
3. **TCP/IP**: Conjunto de protocolos que permite a comunicação entre dispositivos na internet.
4. **HTTP**: Protocolo padrão para transferência de páginas web, mas sem segurança.
5. **HTTPS**: Protocolo seguro, utiliza criptografia para proteger os dados trocados.

