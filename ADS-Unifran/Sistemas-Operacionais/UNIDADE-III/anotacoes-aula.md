## Gerenciamento de Memória

### **Glossário de Gerenciamento de Memória**

1. **Memória**:  
   - **Definição**: Em computação, refere-se a todos os dispositivos que permitem armazenar dados temporariamente ou permanentemente. Pode ser usada para armazenar dados ou programas.  
   - **Exemplo**: Memória RAM, memória cache, memória secundária (HD).

2. **Cache (L1, L2 e L3)**:  
   - **Definição**: Memória de alta velocidade localizada no processador, usada para armazenar dados temporariamente e reduzir a latência de acesso à memória principal.  
     - **L1**: Mais rápida e menor, localizada dentro do processador.  
     - **L2**: Um pouco mais lenta que L1, mas com maior capacidade.  
     - **L3**: Compartilhada entre os núcleos do processador, maior capacidade, mas mais lenta que L1 e L2.  
   - **Função**: Antecipar o uso de dados para acelerar o processamento.

3. **Latência**:  
   - **Definição**: Tempo decorrido entre uma solicitação de dados e o momento em que esses dados estão disponíveis para uso.  
   - **Medida**: Em nanossegundos ou ciclos de clock.  
   - **Exemplo**: A latência da cache L1 é de 2-3 ciclos, enquanto a da cache L2 é de ~10 ciclos.

4. **RAM (Random Access Memory)**:  
   - **Definição**: Memória volátil de acesso aleatório, usada para armazenar dados e instruções temporariamente enquanto o computador está em funcionamento.  
   - **Característica**: Dados são perdidos quando o computador é desligado.

5. **Caching**:  
   - **Definição**: Técnica de armazenar cópias de dados em locais de acesso rápido (como a cache) para reduzir o tempo de acesso.  
   - **Exemplo**: Deixar um lápis e papel na mesa para acesso rápido é uma forma de caching no mundo real.

6. **SIMM (Single In-line Memory Module)**:  
   - **Definição**: Tipo de pente de memória onde os chips de memória são soldados em apenas um lado da placa.  
   - **Uso**: Comum em computadores antigos.

7. **DIMM (Double In-line Memory Module)**:  
   - **Definição**: Tipo de pente de memória onde os chips de memória são soldados em ambos os lados da placa.  
   - **Uso**: Mais comum em computadores modernos.

8. **SDRAM (Synchronous Dynamic Random Access Memory)**:  
   - **Definição**: Tipo de memória RAM que opera em sincronia com o clock do processador, oferecendo maior velocidade de transferência de dados.  
   - **Característica**: Sincronizada com o barramento do sistema.

9. **DRAM (Dynamic Random Access Memory)**:  
   - **Definição**: Tipo de memória RAM que requer atualização constante (refresh) para manter os dados.  
   - **Característica**: Mais lenta que a SDRAM, mas com maior capacidade de armazenamento.

10. **Swapping**:  
    - **Definição**: Técnica de mover dados entre a memória RAM e a memória secundária (HD) para liberar espaço na memória principal.  
    - **Uso**: Usado quando a memória física está cheia, permitindo que mais processos sejam executados.

11. **Lei de Parkinson**:  
    - **Definição**: Princípio que afirma que "os programas tendem a se expandir e ocupar toda a memória disponível".  
    - **Aplicação**: Explica por que a memória é sempre um recurso crítico, mesmo com grandes quantidades disponíveis.

12. **Espaço de Endereçamento Virtual**:  
    - **Definição**: Conjunto de endereços que um programa pode referenciar, independentemente da memória física disponível.  
    - **Uso**: Permite que programas funcionem como se tivessem acesso a uma grande quantidade de memória.

13. **Espaço de Endereçamento Físico**:  
    - **Definição**: Endereços reais da memória física (RAM) onde os dados são armazenados.  
    - **Uso**: Mapeado a partir do espaço de endereçamento virtual.

14. **Tabela de Páginas**:  
    - **Definição**: Estrutura que mapeia endereços virtuais para endereços físicos na memória.  
    - **Função**: Usada em sistemas de paginação para traduzir endereços virtuais em endereços reais.

15. **MMU (Memory Management Unit)**:  
    - **Definição**: Unidade de hardware responsável por traduzir endereços virtuais em endereços físicos.  
    - **Função**: Acelera o processo de tradução de endereços, melhorando o desempenho do sistema.

16. **DAT (Dynamic Address Translation)**:  
    - **Definição**: Mecanismo que converte endereços virtuais em endereços físicos durante a execução de um programa.  
    - **Uso**: Usado em sistemas de memória virtual para permitir o acesso a endereços que não estão na memória física.

---

### **Resumo do Glossário**
- **Memória**: Armazenamento temporário ou permanente de dados e programas.
- **Cache**: Memória rápida que reduz a latência de acesso à RAM.
- **Latência**: Tempo de espera para acessar dados.
- **RAM**: Memória volátil de acesso aleatório.
- **Caching**: Técnica de armazenar cópias de dados para acesso rápido.
- **SIMM/DIMM**: Tipos de pentes de memória.
- **SDRAM/DRAM**: Tipos de memória RAM com diferentes características de velocidade e sincronização.
- **Swapping**: Movimentação de dados entre RAM e HD.
- **Lei de Parkinson**: Programas expandem-se para ocupar toda a memória disponível.
- **Espaço de Endereçamento Virtual/Físico**: Endereços virtuais vs. endereços reais.
- **Tabela de Páginas**: Mapeia endereços virtuais para físicos.
- **MMU/DAT**: Hardware e mecanismos para tradução de endereços.

Este glossário cobre os principais conceitos relacionados ao gerenciamento de memória em sistemas operacionais.