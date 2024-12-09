import React, { useState } from 'react';
import axios from 'axios';
import './SearchExport.css';  // Adicionando um arquivo CSS para os estilos

const SearchExport: React.FC = () => {
  const [username, setUsername] = useState('');
  const [repositories, setRepositories] = useState<any[]>([]);

  // Função para buscar os repositórios
  const searchRepositories = async () => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}/repos`);
      setRepositories(response.data);
    } catch (error) {
      console.error('Erro ao buscar repositórios', error);
    }
  };

  // Função para exportar os repositórios como CSV
  const exportCSV = () => {
    const csvRows: string[] = [];
    
    // Cabeçalhos da tabela
    const headers = ['Nome do Repositório', 'Estrelas', 'Usuário'];
    csvRows.push(headers.join(','));

    // Adiciona os dados dos repositórios
    repositories.forEach((repo) => {
      const row = [repo.name, repo.stargazers_count, username];
      csvRows.push(row.join(','));
    });

    // Cria o link para o arquivo CSV
    const csvContent = csvRows.join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${username}_repositories.csv`;
    link.click();

    alert('CSV exportado com sucesso!');
  };

  return (
    <div className="search-export">
      <h2>Pesquisar Repositórios do GitHub</h2>
      <input
        type="text"
        placeholder="Digite o nome do usuário"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="search-input"
      />
      <div className="buttons-container">
        <button onClick={searchRepositories} className="search-button">
          Buscar Repositórios
        </button>
        <button onClick={exportCSV} className="export-button">
          Exportar para CSV
        </button>
      </div>

      <div className="repositories-container">
        {repositories.length > 0 ? (
          <table className="repositories-table">
            <thead>
              <tr>
                <th>Nome do Repositório</th>
                <th>Estrelas</th>
                <th>Usuário</th>
              </tr>
            </thead>
            <tbody>
              {repositories.map((repo) => (
                <tr key={repo.id}>
                  <td>{repo.name}</td>
                  <td>{repo.stargazers_count}</td>
                  <td>{username}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Nenhum repositório encontrado.</p>
        )}
      </div>
    </div>
  );
};

export default SearchExport;
