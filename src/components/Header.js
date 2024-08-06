import "./Header.scss";

export const Header = () => {
  return (
    <div id="header">
      <div id="menu">
        <a href="/">
          <div id="logo">
            <img src="/images/logo.png" alt="" />
          </div>
        </a>
        <div id="divider"></div>
        <div id="nav">
          <div className="nav-item">
            <a className="nav-link" href="/">
              premium
            </a>
          </div>
          <div className="nav-item">
            <a className="nav-link" href="/pricing">
              pricing
            </a>
          </div>
          <div className="nav-item">
            <a className="nav-link" href="about">
              about
            </a>
          </div>
          <div className="nav-item">
            <a
              className="nav-link"
              href="https://discord.gg"
              target="_blank"
              rel="noreferrer"
            >
              discord
            </a>
          </div>
        </div>
      </div>
      <button>get started risk free</button>
    </div>
  );
};
