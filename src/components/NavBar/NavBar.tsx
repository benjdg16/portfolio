import Logo from "../Logo";

import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-items">
        <div className="navbar-logo">
          <Logo />
        </div>
        <div className="navbar-links">
          <ul>
            <li>
              <a href="#">home</a>
            </li>
            <li>
              <a href="#">experience</a>
            </li>
            <li>
              <a href="#">contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
