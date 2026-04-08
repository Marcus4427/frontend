import { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './pages/Dashboard/Dashboard';
import Notas from './pages/Notas/Notas';
import Faltas from './pages/Faltas/Faltas';
import Boletos from './pages/Boletos/Boletos';
import Requerimentos from './pages/Requerimentos/Requerimentos';
import './App.css';

export default function App() {
  const [paginaAtiva, setPaginaAtiva] = useState('dashboard');

  const renderConteudo = () => {
    switch (paginaAtiva) {
      case 'dashboard': return <Dashboard />;
      case 'notas': return <Notas />;
      case 'faltas': return <Faltas />;
      case 'boletos': return <Boletos />;
      case 'requerimentos': return <Requerimentos />;
      default: return <Dashboard />;
    }
  };

  return (
    <main className="app-container">
      <Sidebar setPagina={setPaginaAtiva} paginaAtiva={paginaAtiva} />
      <section className="main-content">
        {renderConteudo()}
      </section>
    </main>
  );
}