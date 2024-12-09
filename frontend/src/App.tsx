import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SearchExport from './components/SearchExport';
import ImportView from './components/ImportView';
import './App.css';


const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchExport />} />
          <Route path="/import" element={<ImportView />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
