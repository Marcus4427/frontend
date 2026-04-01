import logo from './assets/learn.svg'
import avatar from './assets/avatar.svg'
function App() {
  return (
    <div classname="flex flex-col md:flex-row">
    <aside classname="bg-gray-400 dark:bg-gray-600">
      <header>
        <img src={logo} alt="Logo da aplicação" />
        <h1>Aluno Online</h1>
      </header>
      <nav>
        <ul>
          <li>Dashboard</li>
          <li>Notas</li>
          <li>Faltas</li>
          <li>Boletos</li>
          <li>Requerimentos</li>
          <li>Sair</li>
        </ul>
      </nav>
    </aside>
    <main>
      <header>
        <h1>Olá, Aluno</h1>
        <img src={avatar} alt="Imagem do avatar" />
      </header>
      <h2>Bem vindo ao Portal do ALuno</h2>
      <section>
        <article>
          <h3>Mural de Avisos</h3>
          <ul>
            <li>Eleição para representantes</li>
            <li></li>
            <li></li>
          </ul>
        </article>
        <article>
          <h3>Calendário Acadêmico</h3>
          <ul>
            <li>23/04 - Aplicação P1</li>
            <li></li>
            <li></li>
          </ul>
        </article>
        <article>
          <h3>Minhas Disciplinas</h3>
          <ul>
            <li>Construção de Frontend</li>
            <li></li>
            <li></li>
          </ul>
        </article>
      </section>
    </main>
    
  </div>
  )
}

export default App;