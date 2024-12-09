# Usar uma imagem base do Python
FROM python:3.10-slim

# Configurar o diretório de trabalho
WORKDIR /app

# Instalar dependências do sistema
RUN apt-get update && apt-get install -y libmariadb-dev gcc && apt-get clean

# Copiar o arquivo de requisitos
COPY requirements.txt .

# Instalar as dependências do Python
RUN pip install --no-cache-dir -r requirements.txt

# Copiar o restante do código para o contêiner
COPY . .

# Expor a porta 5000
EXPOSE 5000

# Comando para iniciar o backend
CMD ["python", "run.py"]
