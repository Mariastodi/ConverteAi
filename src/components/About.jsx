import PropTypes from 'prop-types';

function About({ cards }) {
  return (
    <section className="sobre" id="sobre">
      <div className="container">
        <div className="sobre-text reveal">
          <span className="eyebrow">Sobre o projeto</span>
          <h2>Reciclagem que também recicla oportunidades</h2>
          <p>
            O ConverteAí nasceu de um grupo de amigos que percebeu que tampinha, garrafa PET, papelão, latinha e lacre de alumínio, materiais que muita gente ainda descarta sem pensar duas vezes, podem virar renda quando coletados e vendidos para cooperativas de reciclagem.
          </p>
          <p>
            Toda a renda arrecadada com a venda desses materiais será revertida em ações sociais diretas: cestas básicas, kits de higiene, roupas e apoio a famílias em situação de vulnerabilidade na nossa região.
          </p>
          <p>
            Estamos construindo uma rede de pontos de coleta, parceiros e voluntários que cresce a cada passo, começando pela mobilização da comunidade.
          </p>
        </div>
        {cards.length > 0 && (
          <div className="sobre-art reveal">
            {cards.map((card) => (
              <div key={card.value} className="mini-card">
                <b>{card.value}</b>
                <span>{card.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

About.propTypes = {
  cards: PropTypes.array.isRequired,
};

export default About;
