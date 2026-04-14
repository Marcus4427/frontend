import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";

export default function Layout({ titulo, subtitulo, children, setPagina, paginaAtiva }) {
  return (
    <div className="app-container">
      <Sidebar setPagina={setPagina} paginaAtiva={paginaAtiva} />
      <main className="main-content">
        <Header title={titulo} />
        <div className="page-padding">
          <header className="page-info">
            <h3>{subtitulo}</h3>
          </header>
          {children}
        </div>
      </main>
    </div>
  );
}