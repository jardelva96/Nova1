import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom/client' no React 18
import './index.css';
import App from './App';

const rootElement = document.getElementById('root'); // Certifique-se de que existe um elemento com ID 'root' no HTML
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement); // Substitua 'render' por 'createRoot'
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
