# 02 - Atividades de cookies e sessão

---

## **Funcionalidades**
1. **Página Inicial** (`/`):
   - Exibe um formulário para o usuário salvar seu nome.
   - Mostra um contador global de acessos e um contador específico do usuário.
   - Permite visualizar e adicionar tarefas específicas ao usuário.

2. **Salvar Usuário** (`/salvauser`):
   - Recebe o nome do usuário e salva na sessão.

3. **Gerar Número Aleatório** (`/random`):
   - Gera um número aleatório e salva no cookie do navegador. Se o cookie já existir, exibe o número salvo.

4. **Adicionar Tarefa** (`/tasks`):
   - Adiciona tarefas à lista do usuário logado. Apenas usuários logados podem adicionar tarefas.

5. **Logout** (`/logout`):
   - Encerra a sessão do usuário.

---

## **Requisitos**
- **Node.js** versão 14 ou superior
- **NPM** (gerenciador de pacotes do Node.js)

---

## **Configuração do Projeto**

### 1. **Clonar o Repositório**
Clone este repositório em sua máquina local:
```bash
git clone https://github.com/takeshitos/cookies.git
```

### 2. **Instalar Dependências**
Instale as dependências necessárias:
```bash
npm install
```

---

## **Executar o Projeto**

1. **Inicie o Servidor**
   ```bash
   node app.js
   ```

2. **Acesse no Navegador**
   Abra o navegador e vá para:
   ```
   http://localhost:3000
   ```

---

## **Estrutura do Projeto**
```
projeto-express/
├── public/          # Arquivos estáticos (CSS, JS, etc.)
├── views/           # Templates Mustache
├── routes/          # Arquivos de rotas
│   └── index.js     # Arquivo de rotas
├── app.js           # Arquivo principal da aplicação
├── package.json     # Configuração do projeto
└── README.md        # Este arquivo
```

---

## **Uso**

### **Página Inicial (`/`)**
- Preencha o campo de nome e clique em **Salvar**.
- Após salvar, o nome será exibido junto com contadores globais e específicos do usuário.

### **Gerar Número Aleatório (`/random`)**
- Clique no link para gerar um número aleatório e salvá-lo em cookies. 
- Caso o cookie já exista, o número salvo será exibido.

### **Adicionar Tarefa**
- Insira uma nova tarefa no campo e clique em **Adicionar**.
- Apenas usuários logados podem adicionar tarefas.

### **Logout**
- Clique em **Logout** para encerrar a sessão do usuário.

---

## **Tecnologias Utilizadas**
- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Express**: Framework web para criação de aplicações.
- **Mustache**: Motor de templates para renderizar páginas HTML.
- **Cookie-Parser**: Para manipulação de cookies.
- **Express-Session**: Gerenciamento de sessões.
- **Body-Parser**: Manipulação de dados enviados pelo formulário.
