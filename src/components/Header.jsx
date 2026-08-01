import PropTypes from 'prop-types';

function Header({ navOpen, onToggleNav, scrolled, menuItems }) {
  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div className="nav-wrap">
        <a href="#topo" className="logo">
          <img src="/logo.webp" alt="ConverteAí" className="logo-img" />
          ConverteAí
        </a>

        <nav id="siteNav" className={navOpen ? 'open' : ''}>
          <ul>
            {menuItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-cta">
          <a href="#participe" className="btn btn-outline">
            Quero ajudar
          </a>
          <button className="hamb" id="hambBtn" aria-label="Abrir menu" aria-expanded={navOpen} onClick={onToggleNav}>
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  navOpen: PropTypes.bool.isRequired,
  onToggleNav: PropTypes.func.isRequired,
  scrolled: PropTypes.bool.isRequired,
  menuItems: PropTypes.array.isRequired,
};

export default Header;
