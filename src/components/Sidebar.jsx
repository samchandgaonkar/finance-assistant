import { Link } from "react-router-dom";
import logo from "../assets/applogo.png";

function Sidebar() {
  return (
    <div className="app-sidebar">
      <div className="d-flex flex-column flex-shrink-0">
        <Link className="logo-wrapper" to={"/"}>
          <div className="app-logo">
            <img src={logo} alt="finance assistant" />
          </div>
          <div className="app-name">
            <span className="fs-4">Finance Assistant</span>
          </div>
        </Link>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to={"/simple"}>
              {" "}
              Simple Interest Calculator
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/compound"}>
              Compound Interest Calculator
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/repayment"}>
              Early Pay Off Calculator
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
