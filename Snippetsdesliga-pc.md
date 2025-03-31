# Tutorial: Código para Desligar o Computador usando VBScript

Este tutorial explica um script simples em VBScript que desliga o computador imediatamente.

## O Código Completo

```vbscript
Set objShell = CreateObject("WScript.Shell")
objShell.Run "shutdown -s -t 0", 0, False
```

## Explicação Linha por Linha

### Linha 1: `Set objShell = CreateObject("WScript.Shell")`

- **`CreateObject("WScript.Shell")`**: Cria um objeto que permite interagir com o shell (interface de sistema) do Windows.
- **`Set objShell =`**: Atribui este objeto à variável `objShell` para que possamos usá-lo posteriormente.
- Esta linha basicamente nos dá acesso a funções do sistema operacional.

### Linha 2: `objShell.Run "shutdown -s -t 0", 0, False`

Esta linha executa o comando de desligamento com três parâmetros:

1. **`"shutdown -s -t 0"`**: O comando a ser executado
   - `shutdown`: Comando do Windows para desligar/reniciar
   - `-s`: Flag para desligar (shutdown)
   - `-t 0`: Define o tempo de espera em segundos (0 = imediatamente)

2. **`0`**: Define como a janela será exibida
   - `0` = Janela oculta (não será mostrada para o usuário)

3. **`False`**: Indica que o script não deve esperar o comando terminar para continuar
   - Se fosse `True`, o script esperaria o computador desligar antes de continuar (o que não faria sentido neste caso)

## Como Usar

1. Abra o Bloco de Notas ou outro editor de texto simples
2. Copie e cole o código acima
3. Salve o arquivo com extensão `.vbs` (por exemplo: `desligar.vbs`)
4. Execute o arquivo salvo (dê duplo clique)

## Avisos Importantes

- Este script desliga o computador **imediatamente** sem dar chance de salvar trabalhos não salvos.
- O desligamento é forçado - programas podem não ter tempo de fechar corretamente.
- Para uso seguro, considere alterar `-t 0` para `-t 60` (dá 1 minuto antes de desligar).

## Alternativas Úteis

Para reiniciar em vez de desligar:
```vbscript
objShell.Run "shutdown -r -t 0", 0, False
```

Para desligar com tempo de espera (30 segundos):
```vbscript
objShell.Run "shutdown -s -t 30", 0, False
```

Para cancelar um desligamento programado:
```vbscript
objShell.Run "shutdown -a", 0, False
```