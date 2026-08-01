import PropTypes from 'prop-types';

function Points({ points }) {
  return (
    <section className="pontos" id="pontos">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Pontos de coleta</span>
          <h2>Leve seu material até um ponto perto de você</h2>
          <p>Confira endereço e horário de funcionamento de cada ponto parceiro.</p>
        </div>
        <div className="pontos-grid reveal-stagger">
          {points.map((point) => (
            <div key={point.name} className="ponto-card">
              <span className="tag">{point.tag}</span>
              <h3>{point.name}</h3>
              <p>{point.address}</p>
              <p>{point.hours}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Points.propTypes = {
  points: PropTypes.array.isRequired,
};

export default Points;
