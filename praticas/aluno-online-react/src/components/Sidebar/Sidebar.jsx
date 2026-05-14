import './Sidebar.css';
import learnLogo from '../../assets/learn.svg';

export default function Sidebar({ setPagina, paginaAtiva }) {
  const menus = [
    { id: 'dashboard', label: 'Dashboard', route: null },
    { id: 'notas', label: 'Notas', route: null },
    { id: 'faltas', label: 'Faltas', route: null },
    { id: 'boletos', label: 'Boletos', route: null },
    { id: 'requerimentos', label: 'Requerimentos', route: null },
    { id: 'login', label: 'Login', route: '/login' },
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
                onClick={() => {
                  if (m.route) {
                    window.location.pathname = m.route;
                    return;
                  }
                  setPagina(m.id);
                }}
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