import Header from '../../components/Header/Header';
import './Faltas.css';

export default function Faltas() {
  const faltas2026 = [
    { nome: 'BI e Data Warehousing', total: 0, presenca: '100%' },
    { nome: 'Construção de Frontend', total: 0, presenca: '100%' },
    { nome: 'Manutenção de Software e Devops', total: 0, presenca: '100%' },
  ];

  return (
    <main className="faltas-page">
      <Header title="Minhas Faltas" />
      <header className="page-info">
        <h3>Histórico de Faltas por Semestre</h3>
      </header>

      <section className="table-card">
        <header className="table-header"><h4>2026.1</h4></header>
        <section className="table-responsive">
          <table>
            <thead>
              <tr>
                <th>Disciplina</th>
                <th>Total de Faltas</th>
                <th>% de Presença</th>
              </tr>
            </thead>
            <tbody>
              {faltas2026.map((item, index) => (
                <tr key={index}>
                  <td>{item.nome}</td>
                  <td>{item.total}</td>
                  <td>{item.presenca}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </section>
    </main>
  );
}