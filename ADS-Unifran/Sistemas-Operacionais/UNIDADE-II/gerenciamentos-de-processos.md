# Gerenciamento de Processos

**Gerenciamento de Processos** em Sistemas Operacionais (SOs).

### 1. **Introdução ao Gerenciamento de Processos**
   - O gerenciamento de processos é uma das principais funções de um SO, especialmente em sistemas multiprogramados, onde vários programas precisam compartilhar a CPU de forma eficiente.
   - Um **processo** é um programa em execução, que inclui o código, dados e o contexto de execução (como registradores, estado, prioridade, etc.).
   - O SO gerencia processos para garantir que a CPU seja utilizada de forma eficiente, criando a ilusão de que vários programas estão sendo executados simultaneamente.

### 2. **Estados de um Processo**
   - Um processo pode estar em diferentes estados durante sua execução:
     - **Criação**: Quando o processo é criado pelo SO.
     - **Pronto**: Quando o processo está pronto para ser executado, aguardando a CPU.
     - **Execução**: Quando o processo está sendo executado pela CPU.
     - **Bloqueado**: Quando o processo está esperando por um recurso ou evento (como E/S).
     - **Encerrado**: Quando o processo termina sua execução.
   - O SO gerencia a transição entre esses estados, utilizando filas de processos prontos e bloqueados.

### 3. **Escalonamento de Processos**
   - O **escalonador** (ou **scheduler**) é responsável por decidir qual processo deve ser executado pela CPU em um determinado momento.
   - Existem diferentes **algoritmos de escalonamento**, cada um com suas características:
     - **FIFO (First In, First Out)**: Executa os processos na ordem em que chegam.
     - **Round Robin**: Cada processo recebe uma fatia de tempo (quantum) para executar, e depois é colocado no final da fila.
     - **Escalonamento por Prioridade**: Processos com maior prioridade são executados primeiro.
     - **Shortest Job First (SJF)**: Executa o processo com o menor tempo de execução previsto.
     - **Escalonamento por Prazo (Deadline)**: Usado em sistemas de tempo real, onde os processos têm prazos para serem executados.

### 4. **Interrupções**
   - As **interrupções** são mecanismos que permitem ao SO interromper a execução de um processo para realizar outras tarefas, como o escalonamento de outro processo.
   - Existem diferentes tipos de interrupções:
     - **Interrupções de hardware**: Geradas por dispositivos como o clock do sistema.
     - **Interrupções de software**: Quando um processo solicita um serviço do SO.
     - **Interrupções de E/S**: Geradas por dispositivos de entrada e saída.
     - **Traps**: Interrupções causadas por erros na execução de programas (como divisão por zero).

### 5. **Threads**
   - **Threads** são unidades de execução dentro de um processo, permitindo que diferentes partes de um programa sejam executadas de forma concorrente.
   - Enquanto um processo tradicional tem uma única thread, o uso de múltiplas threads permite que um programa execute várias tarefas simultaneamente, melhorando a eficiência e a responsividade.

### 6. **Material Complementar e Atividades**
   - O material complementar sugere a prática de gerenciamento de processos no Linux, utilizando comandos específicos para criar, monitorar e eliminar processos.
   - As atividades de fixação reforçam os conceitos aprendidos, como a função do escalonador e os diferentes algoritmos de escalonamento.

### 7. **Referências**
   - O conteúdo é baseado em livros clássicos de Sistemas Operacionais, como os de Deitel e Tanenbaum, que são referências importantes na área.

### Resumo das Ideias Principais:
   - **Processos** são programas em execução, gerenciados pelo SO para garantir o uso eficiente da CPU.
   - O **escalonador** decide qual processo deve ser executado, utilizando algoritmos como FIFO, Round Robin e SJF.
   - **Interrupções** permitem que o SO gerencie a execução de processos de forma dinâmica.
   - **Threads** permitem a execução concorrente dentro de um mesmo processo, aumentando a eficiência.
   - O gerenciamento de processos é essencial para sistemas multitarefa, garantindo que múltiplos programas possam ser executados de forma justa e eficiente.

