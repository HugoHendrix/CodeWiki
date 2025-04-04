# 📘 Guia Rápido de Comandos GIT

Guia prático com os comandos Git mais comuns. Ideal para consulta rápida durante o desenvolvimento.

---

## 📂 Inicialização de repositório

```bash
git init
```

> Cria um novo repositório Git na pasta atual.

---

## 🔍 Status do repositório

```bash
git status
```

> Mostra os arquivos modificados e o estado da área de staging.

---

## ➕ Adicionar arquivos ao staging

```bash
git add nome-do-arquivo
# ou para todos:
git add .
```

> Adiciona arquivos ao staging (preparando para commit).

---

## 💾 Commit de alterações

```bash
git commit -m "mensagem do commit"
```

> Salva as alterações adicionadas com uma mensagem.

---

## 🔄 Ver histórico de commits

```bash
git log
```

> Lista todos os commits do repositório.

---

## 🌿 Criar nova branch

```bash
git checkout -b nome-da-branch
# ou com Git 2.23+
git switch -c nome-da-branch
```

> Cria e já muda para a nova branch.

---

## 🔁 Trocar de branch

```bash
git checkout nome-da-branch
# ou com Git 2.23+
git switch nome-da-branch
```

> Muda para uma branch existente.

---

## 🔄 Listar branches

```bash
git branch
```

> Mostra todas as branches locais e indica a atual com `*`.

---

## 🔀 Mesclar branches

```bash
git checkout main
git merge nome-da-branch
```

> Junta as alterações da `nome-da-branch` com a branch atual (ex: `main`).

---

## 🗑️ Remover arquivos

```bash
git rm nome-do-arquivo
```

> Remove o arquivo do repositório e da pasta local.

---

## 🧪 Ver diferenças

```bash
git diff
```

> Mostra as mudanças que ainda não foram adicionadas ao staging.

---

## 🌐 Clonar repositório

```bash
git clone url-do-repositorio
```

> Clona um repositório remoto para sua máquina local.

---

## 🔼 Enviar alterações para o repositório remoto

```bash
git push origin nome-da-branch
```

> Envia os commits locais para o repositório remoto.

---

## 🔽 Puxar alterações do repositório remoto

```bash
git pull origin nome-da-branch
```

> Atualiza seu repositório local com as alterações do remoto.

---

## 🔁 Reverter commit (sem apagar o histórico)

```bash
git revert id-do-commit
```

> Cria um novo commit que desfaz as alterações do commit indicado.

---

## ⚠️ Descartar alterações locais (não comitadas)

```bash
git checkout -- nome-do-arquivo
```

> Cuidado! Isso desfaz todas as alterações feitas no arquivo.

---



