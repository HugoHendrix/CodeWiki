
## **📝 Documentação: Conceitos Básicos de Python**  

### **1. Origem do Nome "Python"**  
- **Curiosidade:** O nome foi inspirado no programa de TV britânico **"Monty Python's Flying Circus"**, e não na cobra.  
- **Por quê?** Guido van Rossum (criador do Python) era fã do humor surreal do grupo.  

---

### **2. Linguagem com Tipagem Dinâmica (Duck Typing)**  
- **Definição:** Python não exige a declaração explícita de tipos de variáveis. O tipo é inferido em tempo de execução.  
- **Duck Typing:**  
  - *"Se anda como um pato e faz 'quack' como um pato, então é um pato."*  
  - Em Python, se um objeto tem os métodos necessários, ele pode ser usado como esperado, independentemente do tipo.  
  - **Exemplo:**  
    ```python
    def cumprimentar(objeto):
        objeto.falar()  # Não importa se é um Personagem, Animal etc., desde que tenha .falar()

    class Pessoa:
        def falar(self):
            print("Olá!")

    class Papagaio:
        def falar(self):
            print("Repete!")

    cumprimentar(Pessoa())   # Saída: "Olá!"  
    cumprimentar(Papagaio()) # Saída: "Repete!"  
    ```  
- **Vantagem:** Flexibilidade e código mais enxuto.  

---

### **3. Frameworks para Desenvolvimento Web**  
| Framework | Uso Principal | Dificuldade |  
|-----------|---------------|-------------|  
| **Django** | Aplicações completas (admin, ORM, segurança) | Intermediário |  
| **Flask**  | Microservices e APIs leves | Iniciante |  
| **FastAPI** | APIs modernas (rápido e assíncrono) | Intermediário |  

- **Melhor para iniciantes:** **Flask** (simplicidade) ou **FastAPI** (se focar em APIs).  

---

### **4. Variáveis em Python**  
- **Definição:** Espaços na memória que armazenam dados.  
- **Declaração:**  
  ```python
  nome = "Hugo"  # String  
  idade = 34      # Inteiro  
  altura = 1.75   # Float  
  ```  
- **Case-sensitive:** `idade ≠ Idade ≠ IDADE`.  

---

### **5. Regras para Nomear Variáveis**  
- ✅ Pode começar com letra ou `_`.  
- ✅ Aceita números, mas não no início (`var1` ✔, `1var` ✖).  
- ❌ Não pode usar espaços ou símbolos (`@`, `#`).  
- ❌ Não pode ser **palavra reservada** (veja tabela abaixo).  

---

### **6. Palavras Reservadas do Python**  

- `and` 
- `as` 
- `assert`
- `break` 
- `class` 
- `def` 
- `if` 
- `else` 
- `for` 
- `while` 
- `import` 
- `return`  


*(Lista completa: [Python Docs](https://docs.python.org/3/reference/lexical_analysis.html#keywords))*  

---

### **7. Exemplos Práticos**  
#### **Atribuição e Manipulação**  
```python
a = 5  
b = 3  
soma = a + b  # 8  
```  

#### **Entrada de Dados**  
```python
nome = input("Digite seu nome: ")          # Lê string  
idade = int(input("Digite sua idade: "))   # Converte para int  
```  

#### **Conversão de Tipos**  
```python
numero_str = "10"  
numero_int = int(numero_str)   # String → Inteiro  
numero_float = float("3.14")   # String → Float  
```  

---

### **8. Dicas para Usar o IDLE Shell**  
- **Atalhos úteis:**  
  - `Alt + P` (comando anterior) / `Alt + N` (próximo comando).  
  - `Tab` (autocompletar).  
- **Teste rápido:** Use como uma calculadora ou para testes de sintaxe.  
- **Limitação:** Para projetos grandes, prefira editores como **VS Code** ou **PyCharm**.  

---

### **9. Tipos de Dados Básicos**  

| Tipo   | Exemplo        | Descrição              | 
|--------|----------------|------------------------|
| `int`  | `42`           | Números inteiros       |  
| `float`| `3.14`         | Números decimais       |  
| `str`  | `"Python"`     | Texto (entre aspas)    |  
| `bool` | `True`/`False` | Valores                |  

---

### **🔗 Links Úteis**  
- [Python Oficial](https://www.python.org/)  
- [Tutorial Python (Docs)](https://docs.python.org/pt-br/3/tutorial/)  
- [Python para Iniciantes (Python Brasil)](https://python.org.br/)  

---

