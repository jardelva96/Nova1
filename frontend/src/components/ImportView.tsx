import React, { useState } from 'react';
import axios from 'axios';
import './ImportView.css';  // Estilos específicos para a página de importação

const ImportView: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [repositories, setRepositories] = useState<any[]>([]);

  // Função para fazer upload do arquivo
  const uploadFile = async () => {
    if (!file) return;  // Verificar se há um arquivo selecionado

    const formData = new FormData();
    formData.append('file', file);  // Anexar o arquivo ao formData

    try {
      // Enviar o arquivo para o backend
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/import`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Arquivo enviado para processamento!');
      
      // Chame o endpoint para buscar os repositórios e atualize o estado
      fetchRepositories();
    } catch (error) {
      alert('Erro ao enviar arquivo');
    }
  };

  // Função para buscar os repositórios após upload
  const fetchRepositories = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/repositories`);
      setRepositories(response.data);  // Atualiza o estado com os repositórios
    } catch (error) {
      alert('Erro ao buscar repositórios');
    }
  };

  return (
    <div className="import-view">
      <h2>Importar Repositórios</h2>
      <p>Escolha um arquivo para importar seus repositórios.</p>
      
      <div className="file-upload">
        <input 
          type="file" 
          onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)} 
          className="file-input"
        />
      </div>
      
      <button onClick={uploadFile} className="upload-btn">
        Importar Arquivo
      </button>

      {repositories.length > 0 && (
        <div className="repo-list">
          <h3>Repositórios Importados</h3>
          <ul>
            {repositories.map((repo: any) => (
              <li key={repo.id} className="repo-item">
                <strong>{repo.name}</strong> - {repo.stargazers_count} estrelas
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ImportView;
