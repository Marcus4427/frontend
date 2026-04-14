import Layout from "../Layout";
import Tabela from "../../components/Tabela/Tabela";

export default function Boletos({ setPagina, paginaAtiva }) {
  const colunas = ["Vencimento", "Valor R$", "Situação"];
  const dados = [
    { venc: "19/01/2026", valor: "500,00", status: "Pago" },
    { venc: "19/02/2026", valor: "500,00", status: "Em atraso" },
    { venc: "19/03/2026", valor: "500,00", status: "A Pagar" }
  ];

  return (
    <Layout 
      titulo="Meus Boletos" 
      subtitulo="Histórico de Pagamentos"
      setPagina={setPagina}
      paginaAtiva={paginaAtiva}
    >
      <Tabela colunas={colunas} dados={dados} />
    </Layout>
  );
}