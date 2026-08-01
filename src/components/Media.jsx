import PropTypes from 'prop-types';

const iconMap = {
  box: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#5a4400" strokeWidth="1.6">
      <path d="M20 7H4a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1z" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    </svg>
  ),
  star: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#1c5a75" strokeWidth="1.6">
      <path d="M12 2l3 7h7l-5.5 4.2L18.5 21 12 16.8 5.5 21l2-7.8L2 9h7z" />
    </svg>
  ),
  heart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#245c3e" strokeWidth="1.6">
      <path d="M4 21v-7a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v7" />
      <path d="M9 21V12h6v9" />
    </svg>
  ),
};

function Media({ actions }) {
  return (
    <section className="midia" id="midia">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Próximas ações</span>
          <h2>O que estamos planejando</h2>
          <p>
            Um calendário de ações sociais futuras da corrente ConverteAí. Participe das próximas mobilizações e ajude a transformar material coletado em impacto real.
          </p>
        </div>
        <div className="midia-grid reveal-stagger">
          {actions.map((action) => (
            <div key={action.title} className="midia-card">
              <div className="midia-thumb" style={{ background: action.color }}>
                {iconMap[action.icon]}
              </div>
              <div className="midia-info">
                <span>{action.date}</span>
                <h4>{action.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Media.propTypes = {
  actions: PropTypes.array.isRequired,
};

export default Media;
