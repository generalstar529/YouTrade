import { Nav } from "react-bootstrap";
import "./Header.scss";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div id="header">
      <div id="menu">
        <Link to="/">
          <div id="logo">
            <img src="/images/logo.png" alt="" />
          </div>
        </Link>
        <div id="divider"></div>
        <Nav activeKey="/">
          <Nav.Item>
            <Link className="nav-link" to="/">
              premium
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link className="nav-link" to="/pricing">
              pricing
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link className="nav-link" to="about">
              about
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link className="nav-link" to="https://discord.gg" target="_blank">
              discord
            </Link>
          </Nav.Item>
        </Nav>
      </div>
      <button>get started risk free</button>
    </div>
  );
};
