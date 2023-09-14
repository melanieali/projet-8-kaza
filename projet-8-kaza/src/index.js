import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/Accueil.css';
import Accueil from './components/Accueil';
import Apropos from './components/Apropos';
import Header from './components/Header';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/Apropos" element={<Apropos />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
reportWebVitals();
