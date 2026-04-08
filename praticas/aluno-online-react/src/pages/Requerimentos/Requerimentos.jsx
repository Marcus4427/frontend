import Header from '../../components/Header/Header';
import './Requerimentos.css';

export default function Requerimentos() {
  const reqs = [
    { tipo: 'Revisão de Menção', data: '15/12/2025', status: 'Indeferido' },
    { tipo: 'Dispensa de Disciplina', data: '12/06/2025', status: 'Indeferido' },
    { tipo: 'Trancamento de Matrícula', data: '05/01/2024', status: 'Deferido' },
  ];

  return (
    <section className="req-page">
      <Header title="Meus Requerimentos" />
      <article className="req-banner">
        <p>Faça solicitações online para a secretaria</p>
      </article>

      <section className="table-card">
        <section className="table-responsive">
          <table>
            <thead>
              <tr>
                <th>Tipo de Requerimento</th>
                <th>Data de Solicitação</th>
                <th>Situação</th>
              </tr>
            </thead>
            <tbody>
              {reqs.map((r, i) => (
                <tr key={i}>
                  <td>{r.tipo}</td>
                  <td>{r.data}</td>
                  <td>{r.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </section>
    </section>
  );
}