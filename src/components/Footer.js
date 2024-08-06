import "./Footer.scss";

export const Footer = () => {
  return (
    <div id="footer">
      <div id="container">
        <div id="top-content">
          <a href="/">
            <div id="logo">
              <img src="/images/logo.png" alt="" />
            </div>
          </a>
          <div id="social-grid">
            <a href="https://twitter.com" className="social-link">
              t
            </a>
            <a href="https://www.instagram.com" className="social-link">
              i
            </a>
            <a href="https://www.youtube.com" className="social-link">
              y
            </a>
          </div>
        </div>
        <div id="footer-content">
          <div id="footer-menu">
            <div id="menu-title">
              <h2>Menu</h2>
            </div>
            <div id="menu-content">
              <ul id="menu-list">
                <li className="menu-item">
                  <a className="menu-link" href="/">
                    PREMIUM
                  </a>
                </li>
                <li className="menu-item">
                  <a className="menu-link" href="/pricing">
                    Pricing
                  </a>
                </li>
                <li className="menu-item">
                  <a className="menu-link" href="/about">
                    About
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    className="menu-link"
                    href="https://discord.gg"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Discord
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div id="newsletter">
            <h2 id="title">Subscribe for new indicators and updates</h2>
            <div id="content">
              <div
                id="newsletter-form"
                name="email-form"
                data-name="Email Form"
                method="get"
                data-wf-page-id="658c6ff7d3f78dca161f92cd"
                data-wf-element-id="dfb09b54-9271-edac-46f5-ee1094bb9274"
                aria-label="Email Form"
              >
                <input
                  id="newsletter-input"
                  name="email-input"
                  data-name="Email Input"
                  placeholder="Enter email address"
                  maxlength="256"
                  type="email"
                  required=""
                />
                <button id="newsletter-button">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
        <div id="footer-divider"></div>
        <div id="footer-print">Copyright © STRATIFY LLC</div>
      </div>
    </div>
  );
};
