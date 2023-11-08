import React from 'react';
import ReactDOM from 'react-dom';
import './styles/Accueil.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Accueil from './components/Accueil';
import Apropos from './components/Apropos';
import Header from './components/Header';
import Footer from './components/Footer';
import Error from './components/Error';
import Logement from './components/Logement';
import reportWebVitals from './reportWebVitals';



ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/Apropos" element={<Apropos />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path='*' element={<Error/>} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
reportWebVitals();
