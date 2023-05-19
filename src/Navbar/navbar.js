import "./Navbar.css";
import logo from "../shared/images/Vector.png";

export function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-brand">
        <img src={logo} alt="" className="navbar-logo" />
        <p className="brand-name">Mailavail</p>
      </div>
      <div className="navbar-links">
        <a href="" className="navlink1">
          Single Verification
        </a>
        <a href="" className="navlink2">
          Features
        </a>
        <a href="" className="navlink3">
          Pricing
        </a>
      </div>
      <div className="navbar-buttons">
        <button className="nav-btn1">Register or Login</button>
        <button className="nav-btn2">Try Now</button>
      </div>
    </div>
  );
}
