# Anotações da Aula

### 1. **O que é um Sistema Operacional (SO)?**
   - Um **Sistema Operacional (SO)** é um software que atua como intermediário entre o hardware (parte física do computador) e o usuário (ou outros programas). Ele gerencia os recursos do computador, como processador, memória, armazenamento e dispositivos de entrada/saída, permitindo que os programas funcionem de forma eficiente.
   - **Funções principais:**
     - Gerenciar processos (execução de programas).
     - Controlar a memória RAM.
     - Gerenciar arquivos e dispositivos de armazenamento.
     - Facilitar a comunicação com periféricos (impressoras, teclados, etc.).
     - Garantir segurança e proteção dos dados.

---

### 2. **Evolução histórica dos Sistemas Operacionais**
   - **Antes dos SOs (anos 1940-1950):**
     - As pessoas que operavam as máquinas precisavam conhecer profundamente a **arquitetura do hardware** e programar diretamente em **linguagem de máquina** (códigos binários). Era um processo complexo e demorado.
   - **Primeiros sistemas (1955):**
     - Surgiram os primeiros SOs simples, como o **GM-NAA I/O**, que permitiam a execução de um programa por vez. O termo **processamento de dados** começou a ser usado para descrever a execução de tarefas em computadores.
   - **Processamento em lote (batch processing):**
     - Os programas eram agrupados em "lotes" (batch) e executados sequencialmente, sem interação do usuário durante a execução.
   - **SPOOLING (Simultaneous Peripheral Operations On-Line):**
     - Técnica que permitia compartilhar recursos, como impressoras, entre vários usuários ou programas.
   - **Multiprogramação e multitarefa:**
     - A **multiprogramação** permitia que vários programas fossem carregados na memória ao mesmo tempo, mas apenas um usava o processador por vez.
     - A **multitarefa** permitiu que vários programas fossem executados simultaneamente, dividindo o tempo do processador entre eles.
   - **Anos 1970: Sistemas Operacionais para computadores pessoais:**
     - Surgiram SOs como o **MS-DOS** (Microsoft Disk Operating System), que era um sistema de linha de comando usado nos primeiros PCs.
   - **Sistemas modernos:**
     - Hoje temos SOs avançados como **Windows**, **Linux**, **macOS**, **Android** e **iOS**, com interfaces gráficas, multitarefa e suporte a redes.

---

### 3. **Como funciona o software com o hardware?**
   - O **hardware** é a parte física do computador (processador, memória, disco rígido, etc.).
   - O **software** são os programas que rodam no computador (SO, aplicativos, etc.).
   - O **Sistema Operacional** atua como uma camada intermediária entre o hardware e o software. Ele abstrai a complexidade do hardware, fornecendo uma interface padronizada para os programas.
     - Exemplo: Quando você abre um arquivo no Word, o SO gerencia a leitura do arquivo do disco rígido e a exibição na tela, sem que o Word precise saber detalhes específicos do hardware.

---

### 4. **Antes dos SOs: Operadores precisavam conhecer a arquitetura da máquina**
   - Antes dos SOs, os operadores precisavam programar diretamente em **linguagem de máquina** (códigos binários) e entender detalhes do hardware, como endereços de memória e instruções do processador.
   - Isso tornava o processo de operação e programação extremamente complexo e limitado a especialistas.

---

### 5. **Primeiros sistemas em 1955**
   - Os primeiros SOs surgiram na década de 1950, como o **GM-NAA I/O**, que permitia a execução de um programa por vez.
   - O termo **processamento de dados** começou a ser usado para descrever a execução de tarefas em computadores.

---

### 6. **Processamento em lote (batch processing)**
   - No processamento em lote, os programas eram agrupados em "lotes" e executados sequencialmente, sem interação do usuário durante a execução.
   - Isso era comum em mainframes, onde os programas eram submetidos em cartões perfurados.

---

### 7. **SPOOLING, multiprogramação e multitarefa**
   - **SPOOLING:** Técnica que permitia compartilhar recursos, como impressoras, entre vários usuários ou programas.
   - **Multiprogramação:** Vários programas eram carregados na memória ao mesmo tempo, mas apenas um usava o processador por vez.
   - **Multitarefa:** Vários programas são executados simultaneamente, dividindo o tempo do processador entre eles.

---

### 8. **Sistemas Operacionais para computadores pessoais (1970)**
   - Nos anos 1970, surgiram SOs para computadores pessoais, como o **MS-DOS**, que era um sistema de linha de comando usado nos primeiros PCs.

---

### 9. **Sistemas Seriais e Hardware Monoprogramados ou Multiprogramados**
   - **Sistemas Seriais:** Executam um programa por vez, sem compartilhamento de recursos.
   - **Hardware Monoprogramado:** Apenas um programa pode ser executado por vez.
   - **Hardware Multiprogramado:** Vários programas podem ser carregados na memória ao mesmo tempo, mas apenas um usa o processador por vez.

---

### 10. **Sistemas com tempo de resposta / Job (ordem de execução até o término)**
   - **Sistemas com tempo de resposta:** São sistemas que precisam responder a eventos em tempo real, como controle de tráfego aéreo ou robótica.
   - **Job:** Refere-se a uma tarefa ou programa que é executado pelo SO. Em sistemas antigos, os jobs eram executados em sequência até o término.

---

### 11. **Máquinas Virtuais**
   - Uma **máquina virtual** é um software que simula um computador completo, permitindo a execução de um SO dentro de outro SO.
     - Exemplo: Usar o **VirtualBox** para rodar um sistema Linux dentro do Windows.
   - As máquinas virtuais são usadas para testes, desenvolvimento de software e execução de múltiplos SOs em um único hardware.

---

### Resumo:
- O **Sistema Operacional** é um software que gerencia os recursos do computador e facilita a interação entre hardware e software.
- A **evolução histórica** dos SOs passou de sistemas simples (1950) para sistemas complexos com interfaces gráficas e multitarefa.
- Antes dos SOs, os operadores precisavam programar diretamente em linguagem de máquina, o que era complexo.
- Conceitos como **processamento em lote**, **SPOOLING**, **multiprogramação** e **multitarefa** foram fundamentais para a evolução dos SOs.
- **Máquinas virtuais** permitem a execução de um SO dentro de outro, ampliando as possibilidades de uso.

