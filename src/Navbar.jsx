function Navbar() {
  return (
    <nav className="navbar">

      <div className="navbar-logo">
        <span className="logo-icon">☀️</span>
        <span>Weatherly</span>
      </div>

      <div className="navbar-links">
        <a href="/" className="active">
          Home
        </a>

        <a href="#weather">
          Weather
        </a>

        <a href="#about">
          About
        </a>
      </div>

      <div className="navbar-status">
        <span className="status-dot"></span>
        Live Weather
      </div>

    </nav>
  );
}

export default Navbar;