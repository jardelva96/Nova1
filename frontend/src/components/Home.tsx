import React from 'react';
import './Home.css';  // Estilos específicos para a página Home

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Bem-vindo ao Gerenciador de Repositórios</h1>
        <p>Uma solução poderosa para explorar e gerenciar seus repositórios do GitHub!</p>
        <button className="search-btn" onClick={() => (window.location.href = '/search')}>Pesquisar Repositórios</button>
      </div>
    </div>
  );
};

export default Home;
