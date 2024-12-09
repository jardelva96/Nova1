# 💳 NEOCREDITOTESTE

NEO Crédito é uma aplicação Fullstack que integra backend e frontend para gerenciar dados de repositórios do GitHub. Ela foi desenvolvida com foco em **processamento de dados em segundo plano**, **fila de tarefas**, e **containerização** para fácil execução.

---

## 📜 Funcionalidades

### **Frontend**
#### **Tela 1: Pesquisa e Exportação**
- 🕵️ **Pesquisa de Usuários GitHub**: Permite buscar por um usuário do GitHub e exibe uma lista de seus repositórios.
- 📂 **Exportação para CSV**: Disponibiliza um botão para exportar todos os repositórios do usuário no formato CSV.

#### **Tela 2: Importação e Visualização**
- 📥 **Importação de Dados**: Importa os repositórios previamente exportados.
- 📊 **Visualização de Repositórios**: Mostra uma tabela com detalhes dos repositórios importados, como:
  - Nome do Repositório.
  - Proprietário.
  - Quantidade de estrelas ⭐.
- 💾 **Persistência no Banco de Dados**: Os dados são armazenados no banco MariaDB.

---
### **Backend**
- 🛠️ **Processamento em Segundo Plano**:
  - Os dados importados são processados utilizando **jobs em segundo plano**.
  - As tarefas são gerenciadas com **RabbitMQ**.
- 📢 **Notificações para o Frontend**:
  - O frontend é notificado quando o processamento de dados é concluído.

---

### **Recursos Adicionais**
- 🔍 **Filtros Avançados**:
  - Os usuários podem refinar a tabela utilizando filtros por nome, estrelas, ou proprietário.
- 📦 **Fácil Deploy**:
  - Toda a aplicação roda com o comando simples `docker-compose up`.

---

## 🛠️ Tecnologias Utilizadas
### **Frontend**
- **React.js**: Criação de interface do usuário.
- **TypeScript**: Tipagem estática para maior confiabilidade no código.
- **CSS**: Estilização das telas.

### **Backend**
- **Node.js** com **Express.js**: Gerenciamento de APIs REST.
- **RabbitMQ**: Gerenciamento de fila de tarefas para processamento em segundo plano.
- **MariaDB**: Banco de dados relacional para persistência.
### **DevOps**
- **Docker**: Para containerizar os serviços do frontend, backend e banco de dados.
- **Docker Compose**: Para orquestração de todos os containers.

---

## 🚀 Como Executar o Projeto
### Pré-requisitos
- **Git** instalado.
- **Docker** e **Docker Compose** instalados.

### Passo a Passo
1. **Clone o Repositório**
   ```bash
   git clone https://github.com/jardelva96/neotestejardel.git
   cd neotestejardel
2. **Inicie os Containers**
- **docker-compose up --build**
- **Acesse a Aplicação**
- **Frontend: http://localhost:3000**
- **Backend (API): http://localhost:5000**

📋 Rotas da API
GET /repositories
Descrição: Retorna todos os repositórios armazenados no banco de dados.
POST /repositories/import
Descrição: Importa repositórios de um arquivo CSV.
Body:
```bash
{
  "file": "path_to_csv_file"
}
