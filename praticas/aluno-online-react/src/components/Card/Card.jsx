import './Card.css';

export default function Card() {
  return (
    <article className="card-mural">
      <header className="card-mural-header">
        <h1>Mural de Avisos</h1>
      </header>
      <ul className="card-mural-list">
        <li>Eleição para representantes de turma</li>
        <li>Prazo para renovação de bolsa encerrando</li>
        <li>Palestra sobre Carreira em TI na sexta-feira</li>
      </ul>
    </article>
  );
}