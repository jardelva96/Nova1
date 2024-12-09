# Use uma imagem base do Node.js
FROM node:18

# Crie um diretório de trabalho
WORKDIR /app

# Copie os arquivos do package.json e package-lock.json
COPY package*.json ./

# Instale as dependências
RUN npm install

# Certifique-se de instalar `react-scripts`
RUN npm install react-scripts --save

# Copie o restante dos arquivos
COPY . .

# Construa o projeto
RUN npm run build

# Exponha a porta usada pelo frontend
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "start"]
