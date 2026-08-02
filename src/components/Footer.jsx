import PropTypes from 'prop-types';

function Footer({ navLinks }) {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">
              <span className="logo-mark" style={{ background: 'var(--amarelo)' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5a4400" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 4h8" />
                  <path d="M9 4v2h6V4" />
                  <path d="M7 8h10l-1 12H8L7 8Z" />
                  <path d="M10 11h4" />
                  <path d="M10 15h4" />
                </svg>
              </span>
              ConverteAí
            </div>
            <p>
              Reciclagem que vira ação social. Cada tampinha, garrafa, latinha e lacre coletado fecha mais um elo dessa corrente.
            </p>
          </div>
          <div>
            <h4>Navegação</h4>
            <ul>
              {navLinks.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Contato</h4>
            <div className="social-row">
              <a href="https://www.instagram.com/convertohub/" target="_blank" rel="noreferrer" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                </svg>
              </a>
              <a href="#participe" aria-label="Participe" rel="noreferrer">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 ConverteAí. Todos os direitos reservados.</span>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  navLinks: PropTypes.array.isRequired,
};

export default Footer;
