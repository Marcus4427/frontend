import './Sidebar.css';
import learnLogo from '../../assets/learn.svg';

export default function Sidebar({ setPagina, paginaAtiva }) {
  const menus = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'notas', label: 'Notas' },
    { id: 'faltas', label: 'Faltas' },
    { id: 'boletos', label: 'Boletos' },
    { id: 'requerimentos', label: 'Requerimentos' },
  ];

  return (
    <aside className="sidebar-container">
      <header className="sidebar-header">
        <img src={learnLogo} alt="Logo" className="sidebar-logo-img" />
        <h1>Aluno Online</h1>
      </header>
      <nav className="sidebar-nav">
        <ul>
          {menus.map((m) => (
            <li key={m.id}>
              <button
                className={paginaAtiva === m.id ? 'active' : ''}
                onClick={() => setPagina(m.id)}
              >
                • {m.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}