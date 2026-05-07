import Tabela from "../../components/Tabela/Tabela";

export default function Notas() {
  const colunas = ["Disciplina", "A1", "A2", "A3", "Menção"];
  const dados = [
    { nome: "BI e Data Warehousing", a1: "-", a2: "-", a3: "-", mencao: "SR" },
    { nome: "Construção de Frontend", a1: "-", a2: "-", a3: "-", mencao: "SR" },
    { nome: "Manutenção de Software e Devops", a1: "-", a2: "-", a3: "-", mencao: "SR" }
  ];

  return (
    <>
      <h1>Minhas Notas</h1>
      <p>Histórico de Notas por Semestre</p>
      <Tabela colunas={colunas} dados={dados} />
    </>
  );
}