import PropTypes from 'prop-types';

function Partners({ partners }) {
  return (
    <section className="parceiros" id="parceiros">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Parceiros</span>
          <h2>Quem caminha junto com a gente</h2>
          <p>
            Empresas, cooperativas e coletivos que apoiam o ConverteAí com espaço, transporte, divulgação ou compra dos materiais coletados.
          </p>
        </div>
        <div className="parceiros-grid reveal-stagger">
          {partners.map((partner) => (
            <div key={partner.name} className="parceiro-card">
              <div className="parceiro-avatar" style={{ background: partner.color }}>
                {partner.initials}
              </div>
              <h4>{partner.name}</h4>
              <span>{partner.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Partners.propTypes = {
  partners: PropTypes.array.isRequired,
};

export default Partners;
