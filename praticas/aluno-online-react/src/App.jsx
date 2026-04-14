import { useState } from 'react';
import Dashboard from './pages/Dashboard/Dashboard';
import Notas from './pages/Notas/Notas';
import Faltas from './pages/Faltas/Faltas';
import Boletos from './pages/Boletos/Boletos';
import Requerimentos from './pages/Requerimentos/Requerimentos';
import './App.css';

export default function App() {
  const [paginaAtiva, setPaginaAtiva] = useState('dashboard');

  const navegar = { setPagina: setPaginaAtiva, paginaAtiva };

  const renderConteudo = () => {
    switch (paginaAtiva) {
      case 'dashboard': return <Dashboard {...navegar} />;
      case 'notas': return <Notas {...navegar} />;
      case 'faltas': return <Faltas {...navegar} />;
      case 'boletos': return <Boletos {...navegar} />;
      case 'requerimentos': return <Requerimentos {...navegar} />;
      default: return <Dashboard {...navegar} />;
    }
  };

  return (
    <>
      {renderConteudo()}
    </>
  );
}