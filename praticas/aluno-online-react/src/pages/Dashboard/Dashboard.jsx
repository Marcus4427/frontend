import Card from "../../components/Card/Card";

export default function Dashboard() {
  return (
    <>
      <h1>Olá, Aluno!</h1>
      <p>Bem-vindo ao portal do aluno</p>
      <section className="dashboard-grid">
        <Card titulo="Mural de Avisos">
          <ul>
            <li>Eleição para representantes de turma</li>
            <li>Prazo para renovação de bolsa encerrando</li>
          </ul>
        </Card>
        <Card titulo="Calendário Acadêmico">
          <dl>
            <dt>23/02</dt><dd>Início do período letivo 2026-1</dd>
          </dl>
        </Card>
      </section>
    </>
  );
}