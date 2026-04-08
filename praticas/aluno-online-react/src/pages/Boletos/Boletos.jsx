import Header from '../../components/Header/Header';
import './Boletos.css';

export default function Boletos() {
  const boletos = [
    { venc: '19/01/2026', valor: '500,00', situacao: 'Pago' },
    { venc: '19/02/2026', valor: '500,00', situacao: 'Em atraso' },
    { venc: '19/03/2026', valor: '500,00', situacao: 'A Pagar' },
  ];

  return (
    <article className="boletos-page">
      <Header title="Meus Boletos" />
      <header className="page-info">
        <h3>Histórico de Pagamentos</h3>
      </header>

      <section className="table-card">
        <section className="table-responsive">
          <table>
            <thead>
              <tr>
                <th>Vencimento</th>
                <th>Valor R$</th>
                <th>Situação</th>
              </tr>
            </thead>
            <tbody>
              {boletos.map((b, i) => (
                <tr key={i}>
                  <td>{b.venc}</td>
                  <td>{b.valor}</td>
                  <td className={b.situacao.toLowerCase().replace(/\s/g, '-')}>
                    {b.situacao}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </section>
    </article>
  );
}