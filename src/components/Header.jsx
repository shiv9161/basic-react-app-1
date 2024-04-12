const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          {/* logo */}
          <a className="navbar-brand" href="/">
            <img
              src="https://i.pinimg.com/originals/20/60/2d/20602d43cc993811e5a6bd1886af4f33.png"
              style={{ width: "100px" }}
            />
          </a>

          {/* centered item */}
          <div className="navbar-nav mx-auto">
            <a className="nav-link" href="/">
              <b>Menu</b>
            </a>
            <a className="nav-link" href="/">
              <b>Location</b>
            </a>
            <a className="nav-link" href="/">
              <b>About</b>
            </a>
            <a className="nav-link" href="/">
              <b>Contact</b>
            </a>
          </div>

          {/* right item */}
          <div className="d-flex">
            <button className="btn btn-danger" type="button">
              Login
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
