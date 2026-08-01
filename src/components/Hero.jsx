import PropTypes from 'prop-types';

function Hero({ stats, badges }) {
  return (
    <section className="hero">
      <div className="hero-blob b1" />
      <div className="hero-blob b2" />
      <div className="container">
        <div className="hero-text">
          <h1>
            Cada tampinha fecha <span>um elo</span> de solidariedade
          </h1>
          <p>
            Coletamos tampinhas, garrafas PET, latinhas e lacres para transformar resíduo em renda, e renda em ação social para quem precisa. Faz parte da corrente com a gente.
          </p>
          <div className="hero-cta">
            <a href="#participe" className="btn btn-primary">
              Quero doar ou ser voluntário
            </a>
            <a href="#pontos" className="btn btn-ghost">
              Ver pontos de coleta
            </a>
          </div>
          {stats.length > 0 && (
            <div className="hero-stats">
              {stats.map((item) => (
                <div key={item.label} className="hero-stat">
                  <b>{item.value}{item.suffix}</b>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="orbit">
          <div className="orbit-center">Transforma<br />Ai</div>
          {badges.map((badge) => (
            <div key={badge.label} className={`badge ${badge.type}`}>
              {badge.svg}
              {badge.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = {
  stats: PropTypes.array.isRequired,
  badges: PropTypes.array.isRequired,
};

export default Hero;
