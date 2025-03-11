# Os conceitos de parâmetros de escalonamento, escalonamento preemptivo e não-preemptivo

---

### **Parâmetros de Escalonamento**

Os **parâmetros de escalonamento** são critérios que o sistema operacional (SO) utiliza para decidir qual processo deve ser executado pela CPU em um determinado momento. Esses parâmetros ajudam a garantir que o sistema seja justo, eficiente e responsivo. Alguns dos principais parâmetros são:

1. **Justiça**:
   - Garantir que todos os processos tenham acesso à CPU de forma equitativa.
   - Evitar que um processo monopolize a CPU por muito tempo.

2. **Eficiência**:
   - Maximizar o uso da CPU, evitando que ela fique ociosa.
   - Reduzir o tempo de espera dos processos.

3. **Tempo de Resposta**:
   - Minimizar o tempo que um usuário espera para receber uma resposta do sistema, especialmente em sistemas interativos.
   - Exemplo: Em um sistema de banco, o tempo de resposta é o tempo entre o usuário enviar uma consulta e receber o resultado.

4. **Throughput (Vazão)**:
   - Maximizar o número de tarefas concluídas por unidade de tempo.
   - Exemplo: Quantas transações um sistema de banco consegue processar por segundo.

5. **Turnaround (Tempo de Utilização da CPU)**:
   - Minimizar o tempo total que um processo leva desde sua submissão até sua conclusão.
   - Importante em sistemas **batch**, onde processos são executados em lote.

---

### **Escalonamento Preemptivo**

No **escalonamento preemptivo**, o SO pode **interromper** um processo em execução na CPU para dar lugar a outro processo. Isso é feito para garantir que todos os processos tenham uma chance de executar, evitando que um processo monopolize a CPU por muito tempo.

#### Características:
- **Interrupção de processos**: O SO pode interromper um processo em execução, mesmo que ele não tenha terminado sua tarefa.
- **Quantum de tempo**: Em sistemas preemptivos, cada processo recebe uma fatia de tempo (quantum) para executar. Quando o tempo acaba, o processo é interrompido e colocado de volta na fila de prontos.
- **Justiça**: Garante que todos os processos tenham acesso à CPU, mesmo que processos longos estejam em execução.
- **Responsividade**: Ideal para sistemas interativos, onde o tempo de resposta é crítico.

#### Exemplo:
- **Round Robin**: Um algoritmo preemptivo onde cada processo recebe um quantum de tempo para executar. Se o processo não terminar nesse tempo, ele é interrompido e colocado no final da fila de prontos.

---

### **Escalonamento Não-Preemptivo**

No **escalonamento não-preemptivo**, um processo que está em execução na CPU **não pode ser interrompido** até que ele termine sua tarefa ou voluntariamente libere a CPU (por exemplo, ao fazer uma operação de E/S).

#### Características:
- **Sem interrupção**: O processo mantém a CPU até que ele termine ou espere por um recurso.
- **Simplicidade**: Mais fácil de implementar, pois não há necessidade de interromper processos em execução.
- **Risco de monopolização**: Processos longos podem monopolizar a CPU, causando longos tempos de espera para outros processos.
- **Ideal para sistemas batch**: Onde a prioridade é a conclusão de tarefas, e não o tempo de resposta.

#### Exemplo:
- **First-Come, First-Served (FCFS)**: Um algoritmo não-preemptivo onde os processos são executados na ordem em que chegam. Se um processo longo entra na CPU, os processos seguintes precisam esperar até que ele termine.

---

### **Comparação entre Preemptivo e Não-Preemptivo**

| **Característica**            | **Preemptivo**                          | **Não-Preemptivo**                     |
|-------------------------------|-----------------------------------------|----------------------------------------|
| **Interrupção de processos**  | Sim, o SO pode interromper processos.   | Não, o processo executa até o fim.     |
| **Justiça**                   | Mais justo, todos os processos rodam.  | Menos justo, processos longos atrasam outros. |
| **Tempo de Resposta**         | Melhor, ideal para sistemas interativos. | Pior, processos podem esperar muito.   |
| **Complexidade**              | Mais complexo, requer gerenciamento de interrupções. | Mais simples, sem interrupções.        |
| **Uso típico**                | Sistemas interativos e de tempo real.  | Sistemas batch ou onde a prioridade é a conclusão de tarefas. |

---

### **Exemplos de Algoritmos**

1. **Preemptivo**:
   - **Round Robin**: Cada processo recebe um quantum de tempo para executar. Se não terminar, é interrompido e colocado no final da fila.
   - **Escalonamento por Prioridade Preemptivo**: O processo com maior prioridade é executado, mas pode ser interrompido se um processo com prioridade ainda maior chegar.

2. **Não-Preemptivo**:
   - **First-Come, First-Served (FCFS)**: Os processos são executados na ordem de chegada, sem interrupções.
   - **Shortest Job First (SJF)**: O processo com o menor tempo de execução previsto é executado primeiro, sem interrupções.

---

### **Conclusão**

- **Escalonamento preemptivo** é mais flexível e justo, ideal para sistemas interativos e de tempo real, onde o tempo de resposta é crítico.
- **Escalonamento não-preemptivo** é mais simples e adequado para sistemas batch, onde a prioridade é a conclusão de tarefas, mesmo que isso signifique tempos de espera mais longos.

Ambos os métodos têm suas vantagens e desvantagens, e a escolha depende do tipo de sistema e das necessidades específicas do ambiente de execução.