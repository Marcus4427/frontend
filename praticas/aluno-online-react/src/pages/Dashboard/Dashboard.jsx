import Header from '../../components/Header/Header';
import './Dashboard.css';

export default function Dashboard() {
  return (
    <section className="dashboard-page">
      <Header title="Olá, Aluno!" />
      <article className="welcome-banner">
        <p>Bem-vindo ao portal do aluno</p>
      </article>

      <section className="dashboard-grid">
        <article className="info-card">
          <h3>Mural de Avisos</h3>
          <ul>
            <li>Inscrição para o projeto de extensão</li>
            <li>Eleição para representante de turma</li>
          </ul>
        </article>

        <article className="info-card">
          <h3>Calendário Acadêmico</h3>
          <dl>
            <dt>23/02</dt><dd>Início do período letivo 2026-1</dd>
            <dt>25/04</dt><dd>Prazo final para aplicação da P1</dd>
            <dt>04/07</dt><dd>Fim do período letivo 2026-1</dd>
          </dl>
        </article>
      </section>
    </section>
  );
}