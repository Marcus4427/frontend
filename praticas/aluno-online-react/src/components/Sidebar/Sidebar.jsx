import { NavLink } from 'react-router-dom';
import './Sidebar.css';
import learnLogo from '../../assets/learn.svg';

export default function Sidebar() {
  const menus = [
    { path: '/', label: 'Dashboard' },
    { path: '/notas', label: 'Notas' },
    { path: '/faltas', label: 'Faltas' },
    { path: '/boletos', label: 'Boletos' },
    { path: '/requerimentos', label: 'Requerimentos' },
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
            <li key={m.path}>
              <NavLink
                to={m.path}
                className={({ isActive }) => isActive ? 'active' : ''}
                end={m.path === '/'}
              >
                • {m.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}