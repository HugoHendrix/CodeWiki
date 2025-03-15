## **Gerenciador de Arquivos**

- **Objetivo**: Estudar o gerenciador de arquivos em sistemas operacionais (SO), compreendendo a organização, controle e acesso aos dados armazenados.
- **Problema**: Aplicações precisam armazenar e recuperar informações, muitas vezes além do espaço disponível no processo em execução. Além disso, informações podem precisar ser retidas por longos períodos e acessadas por múltiplos processos.

#### **2. Arquivo**
- **Definição**: Um arquivo é uma coleção nomeada de dados, que pode consistir em um ou mais registros (blocos físicos).
- **Registros**: Podem ser de tamanho fixo ou variável, dependendo do sistema.
- **Nomeação**:
  - Nomes de arquivos variam entre SOs, mas geralmente permitem cadeias de até 256 caracteres.
  - Extensões de arquivos (ex: `.txt`, `.doc`) indicam o tipo de arquivo e o programa associado.
- **Operações com arquivos**:
  - **Básicas**: Abrir, fechar, criar, destruir, copiar, renomear, listar.
  - **Manipulação de dados**: Ler, escrever, atualizar, apagar.
- **Atributos de arquivos**: Tamanho, localização, acessibilidade, tipo, volatilidade, atividade.

#### **3. Sistema de Arquivos**
- **Função**: Organizar e gerenciar o acesso aos dados, garantindo disponibilidade, compartilhamento e segurança.
- **Interfaces**:
  - **Texto**: Comandos diretos (ex: `copy`, `del` no Windows; `cp`, `rm` no Unix).
  - **Gráfica**: Interface visual para manipulação de arquivos.
- **Características**:
  - **Independência do dispositivo**: Usuários referenciam arquivos por nomes simbólicos (ex: `MeuArquivo.txt`), não por localizações físicas.
  - **Segurança**: Mecanismos de criptografia e backup são essenciais para proteger dados.
  - **Compartilhamento**: Permite acesso controlado a arquivos por múltiplos usuários.

#### **4. Diretórios**
- **Função**: Organizar e localizar arquivos.
- **Tipos de diretórios**:
  - **Nível único (diretório-raiz)**: Todos os arquivos em um único diretório (raro hoje em dia).
  - **Hierárquico**: Estrutura de árvore com diretórios e subdiretórios.
    - **Exemplos**:
      - **Windows**: `C:\Users\Claudiney\Documents`
      - **Unix**: `/usr/Claudiney/Documents`
- **Caminhos**:
  - **Absoluto**: Começa no diretório-raiz (ex: `/usr/ast/dicionário`).
  - **Relativo**: Baseado no diretório atual (ex: `../blb/dicionário`).
- **Links**:
  - **Simbólicos (flexíveis)**: Apontam para o caminho de outro arquivo (ex: atalhos no Windows).
  - **Estritos**: Apontam diretamente para o bloco físico no dispositivo de armazenamento.

#### **5. Metadados**
- **Definição**: Informações sobre os arquivos, como localização de blocos livres, data de modificação, e identificação única (superbloco).
- **Importância**: Protegem a integridade dos arquivos e não podem ser modificados diretamente pelos usuários.
- **Superbloco**: Contém informações críticas sobre o sistema de arquivos. Cópias redundantes são mantidas para evitar perdas.

#### **6. Montagem**
- **Definição**: Processo de integrar sistemas de arquivos adicionais (ex: segundo HD) ao sistema de arquivos principal.
- **Exemplos**:
  - **Windows**: Letras de unidade (ex: `C:`, `D:`).
  - **Unix**: Pontos de montagem (ex: `/mnt/`).
- **Tabelas de montagem**: Armazenam informações sobre os sistemas de arquivos montados.
- **Comandos**: `montar` e `desmontar` para gerenciar sistemas de arquivos.

#### **7. Material Complementar**
- **Gerenciamento de arquivos no Linux**: Comandos para criar, mover, copiar e gerenciar arquivos e diretórios.

#### **8. Atividades de Fixação**
- **Gerenciador de arquivos**: Software que permite criar, organizar e manipular arquivos e pastas.
- **Metadados**: Informações descritivas sobre outros dados, como origem, formato e conteúdo.

#### **Referências**
- **Deitel, H. M.** (2005). *Sistemas Operacionais*.
- **Tanenbaum, A. S.** (2009). *Sistemas Operacionais Modernos*.

---

### **Pontos Chave**:
- **Arquivos**: Coleções nomeadas de dados, com operações básicas como criar, copiar e renomear.
- **Sistema de Arquivos**: Gerencia o armazenamento e acesso aos dados, com interfaces gráficas e de texto.
- **Diretórios**: Estruturas hierárquicas para organizar arquivos, com caminhos absolutos e relativos.
- **Metadados**: Informações críticas sobre arquivos, como localização e data de modificação.
- **Montagem**: Integração de sistemas de arquivos adicionais ao sistema principal.