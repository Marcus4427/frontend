import Header from '../../components/Header/Header';
import './Notas.css';

export default function Notas() {
  return (
    <article className="notas-page">
      <Header title="Minhas Notas" />
      <header className="page-info">
        <h3>Histórico de Notas por Semestre</h3>
      </header>

      <section className="semester-block">
        <header className="semester-header"><h4>2026.1</h4></header>
        <section className="table-responsive">
          <table className="data-table">
            <thead>
              <tr>
                <th>Disciplina</th>
                <th>A1</th><th>A2</th><th>A3</th><th>Menção</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>BI e Data Warehousing</td><td>-</td><td>-</td><td>-</td><td>SR</td></tr>
              <tr><td>Construção de Frontend</td><td>-</td><td>-</td><td>-</td><td>SR</td></tr>
              <tr><td>Manutenção de Software e Devops</td><td>-</td><td>-</td><td>-</td><td>SR</td></tr>
            </tbody>
          </table>
        </section>
      </section>
    </article>
  );
}