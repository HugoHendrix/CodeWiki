#### Você pode criar vários scripts em **VBScript** ou **Batch (.bat)** para automatizar tarefas no Windows. Aqui estão algumas ideias úteis:

---

## 📌 **1. Scripts de Gerenciamento do Sistema**
### **🔹 Desligar / Reiniciar / Suspender o PC**
- **Desligar após X segundos** (útil para desligar o PC em um horário programado):
  ```vbs
  Set ws = CreateObject("WScript.Shell")
  ws.Run "shutdown -s -t 300", 0  'Desliga em 5 minutos (300 segundos)
  ```
- **Cancelar desligamento programado**:
  ```vbs
  Set ws = CreateObject("WScript.Shell")
  ws.Run "shutdown -a", 0
  ```
- **Reiniciar o PC**:
  ```vbs
  Set ws = CreateObject("WScript.Shell")
  ws.Run "shutdown -r -t 0", 0
  ```
- **Suspender / Hibernar** (economiza energia):
  ```vbs
  Set ws = CreateObject("WScript.Shell")
  ws.Run "rundll32.exe powrprof.dll,SetSuspendState 0,1,0", 0
  ```

---

## 📌 **2. Scripts para Limpeza Automática**
### **🔹 Limpar arquivos temporários**
```vbs
Set ws = CreateObject("WScript.Shell")
ws.Run "cleanmgr /sagerun:1", 0
```
### **🔹 Limpar a Lixeira automaticamente**
```vbs
Set objShell = CreateObject("Shell.Application")
objShell.Namespace(10).Items().InvokeVerb("Delete")
```
### **🔹 Excluir arquivos antigos (ex: logs com mais de 30 dias)**
```bat
@echo off
forfiles /p "C:\Logs" /s /m *.log /d -30 /c "cmd /c del @path"
```

---

## 📌 **3. Scripts para Redes e Internet**
### **🔹 Reiniciar o adaptador de rede (útil se a internet cair)**
```vbs
Set ws = CreateObject("WScript.Shell")
ws.Run "netsh interface set interface ""Wi-Fi"" disable", 0
WScript.Sleep 2000 'Aguarda 2 segundos
ws.Run "netsh interface set interface ""Wi-Fi"" enable", 0
```
### **🔹 Verificar conexão com um site (ping)**
```bat
@echo off
ping google.com -n 1
if %errorlevel%==0 (echo Internet OK!) else (echo Sem conexão!)
pause
```

---

## 📌 **4. Scripts para Automação de Tarefas**
### **🔹 Abrir vários programas ao mesmo tempo**
```vbs
Set ws = CreateObject("WScript.Shell")
ws.Run "chrome.exe", 0
ws.Run "notepad.exe", 0
ws.Run "calc.exe", 0
```
### **🔹 Fechar um programa travado (ex: fechar o Chrome)**
```vbs
Set ws = CreateObject("WScript.Shell")
ws.Run "taskkill /f /im chrome.exe", 0
```
### **🔹 Backup automático de pastas**
```bat
@echo off
robocopy "C:\Documentos" "D:\Backup" /MIR /LOG:backup.log
echo Backup concluído em %date% %time% >> backup.log
```

---

## 📌 **5. Scripts para Segurança**
### **🔹 Bloquear a tela (Windows + L)**
```vbs
Set ws = CreateObject("WScript.Shell")
ws.SendKeys "^{ESC}"  'Abre o menu Iniciar
WScript.Sleep 100
ws.SendKeys "{RIGHT}" 'Navega até o ícone de usuário
WScript.Sleep 100
ws.SendKeys "{ENTER}" 'Abre o menu
WScript.Sleep 100
ws.SendKeys "l"       'Bloqueia
```
### **🔹 Desativar/Ativar o Teclado (requer admin)**
```bat
@echo off
:: Desativar
rundll32 keyboard,disable
:: Ativar
rundll32 keyboard,enable
```

---

## 📌 **6. Scripts para Diversão / Brincadeiras**
### **🔹 Abrir o CD-ROM repetidamente (se tiver drive)**
```vbs
Set oWMP = CreateObject("WMPlayer.OCX.7")
Set colCDROMs = oWMP.cdromCollection
Do While True
    For Each cdrom in colCDROMs
        cdrom.Eject()
        WScript.Sleep 2000
        cdrom.Eject()
    Next
Loop
```
### **🔹 Mensagem pop-up (ex: lembrete)**
```vbs
MsgBox "Hora de fazer uma pausa!", vbInformation, "Lembrete"
```
### **🔹 Trocar o papel de parede automaticamente**
```vbs
Set ws = CreateObject("WScript.Shell")
ws.RegWrite "HKCU\Control Panel\Desktop\Wallpaper", "C:\wallpaper.jpg", "REG_SZ"
ws.Run "RUNDLL32.EXE user32.dll,UpdatePerUserSystemParameters", 0
```

---

### **Como salvar e executar?**
1. Abra o **Bloco de Notas**.
2. Cole o código.
3. Salve como:
   - **VBScript**: `nome.vbs` (executa com 2 cliques)
   - **Batch**: `nome.bat` (executa como administrador se necessário)

