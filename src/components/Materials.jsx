import PropTypes from 'prop-types';

function Materials({ materials }) {
  return (
    <section className="materiais" id="materiais">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Como ajudar</span>
          <h2>O que a gente recolhe</h2>
          <p>
            Você pode separar em casa e levar até um ponto de coleta perto de você. Todo material ajuda, não precisa ser em grande quantidade.
          </p>
        </div>
        <div className="materiais-grid reveal-stagger">
          {materials.map((item) => (
            <div key={item.title} className="material-card">
              <div className="material-icon" style={{ background: item.color }}>
                {item.svg}
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Materials.propTypes = {
  materials: PropTypes.array.isRequired,
};

export default Materials;
