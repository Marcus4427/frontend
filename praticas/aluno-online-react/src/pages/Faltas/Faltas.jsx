import Tabela from "../../components/Tabela/Tabela";

export default function Faltas() {
  const colunas = ["Disciplina", "Total de Faltas", "% de Presença"];
  const dados = [
    { nome: 'BI e Data Warehousing', total: 0, presenca: '100%' },
    { nome: 'Construção de Frontend', total: 0, presenca: '100%' },
    { nome: 'Manutenção de Software e Devops', total: 0, presenca: '100%' }
  ];

  return (
    <>
      <h1>Minhas Faltas</h1>
      <p>Histórico de Faltas por Semestre</p>
      <Tabela colunas={colunas} dados={dados} />
    </>
  );
}