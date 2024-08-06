import "./App.scss";
import { Nav } from "react-bootstrap";
import { Motion } from "./Motion";

function App() {
  return (
    <div className="App">
      <div id="header">
        <div id="menu">
          <div id="logo">
            <img src="/images/logo.png" alt="" />
          </div>
          <div id="divider"></div>
          <Nav activeKey="/">
            <Nav.Item>
              <Nav.Link href="/">premium</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/pricing">pricing</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="about">about</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="https://discord.gg">discord</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        <button>get started risk free</button>
      </div>
      <div id="default-section">
        <h1>Proven Strategies Proven Results </h1>
        <Motion
          div={<img className="right" src="/images/section1.png" alt="" />}
        />
        <p>Say goodbye to ambiguous indicators and vague signals</p>
        <button>Get Started risk free</button>
      </div>
      <div className="section">
        <div id="left">
          <h2>Spot Liquidity Sweeps</h2>
          <p>
            Advanced liquidity algorithm aids in spotting hunted stop losses and
            liquidation zones that show where price had a strong reaction
          </p>
          <div className="specs">
            <div className="spec">
              <div className="image-wrapper">
                <img src="/images/check.png" alt="" />
              </div>
              <div className="spec-paragraph">
                Highlights high-impact liquidations
              </div>
            </div>
            <div className="spec">
              <div className="image-wrapper">
                <img src="/images/check.png" alt="" />
              </div>
              <div className="spec-paragraph">
                Predict market shifts & strong price reactions
              </div>
            </div>
            <div className="spec">
              <div className="image-wrapper">
                <img src="/images/check.png" alt="" />
              </div>
              <div className="spec-paragraph">
                Spot hunted stop losses & liquidity zones
              </div>
            </div>
          </div>
        </div>
        <div>
          <Motion
            div={<img className="right" src="/images/section2.png" alt="" />}
          />
        </div>
      </div>
      <div className="section">
        <div id="left">
          <h2>Advanced Market Structure</h2>
          <p>
            Simplifies trend, breakout, and reversal detection. Time precise
            entries and exits with real-time market structure analysis
          </p>
          <div className="specs">
            <div className="spec">
              <div className="image-wrapper">
                <img src="/images/check.png" alt="" />
              </div>
              <div className="spec-paragraph">
                Snipe entries with SFP Detection
              </div>
            </div>
            <div className="spec">
              <div className="image-wrapper">
                <img src="/images/check.png" alt="" />
              </div>
              <div className="spec-paragraph">Simplifies complex trends</div>
            </div>
            <div className="spec">
              <div className="image-wrapper">
                <img src="/images/check.png" alt="" />
              </div>
              <div className="spec-paragraph">
                Identifies Support / Resistance + Breakers
              </div>
            </div>
          </div>
        </div>
        <Motion
          div={<img className="right" src="/images/section3.png" alt="" />}
        />
      </div>
      <div className="section">
        <div id="left">
          <h2>Volume Order Blocks</h2>
          <p>
            Our advanced order block analysis pinpoints high-demand zones with
            detailed volume data, revealing potential inflection points in the
            market
          </p>
          <div className="specs">
            <div className="spec">
              <div className="image-wrapper">
                <img src="/images/check.png" alt="" />
              </div>
              <div className="spec-paragraph">
                Pinpoint high-demand zones analysis
              </div>
            </div>
            <div className="spec">
              <div className="image-wrapper">
                <img src="/images/check.png" alt="" />
              </div>
              <div className="spec-paragraph">
                Reveal internal bullish & bearish activity
              </div>
            </div>
            <div className="spec">
              <div className="image-wrapper">
                <img src="/images/check.png" alt="" />
              </div>
              <div className="spec-paragraph">
                Predict reactions & reversals by calculating bid/ask zones
              </div>
            </div>
          </div>
        </div>
        <Motion
          div={<img className="right" src="/images/section4.png" alt="" />}
        />
      </div>
      <div className="section">
        <div id="left">
          <h2>Full Backtesting Suite</h2>
          <p>
            We created a fully integrated back-tester that allows traders to
            build custom strategies that fits their personal trading style
          </p>
          <div className="specs">
            <div className="spec">
              <div className="image-wrapper">
                <img src="/images/check.png" alt="" />
              </div>
              <div className="spec-paragraph">
                Full customization to fit your style and goals
              </div>
            </div>
            <div className="spec">
              <div className="image-wrapper">
                <img src="/images/check.png" alt="" />
              </div>
              <div className="spec-paragraph">
                See real results in TradingView Strategy Window
              </div>
            </div>
            <div className="spec">
              <div className="image-wrapper">
                <img src="/images/check.png" alt="" />
              </div>
              <div className="spec-paragraph">
                Unlimited combinations and potential
              </div>
            </div>
          </div>
        </div>
        <Motion
          div={<img className="right" src="/images/section5.png" alt="" />}
        />
      </div>
      <div id="pricing-section">
        <div id="pricing-header">
          <h1>Pricing</h1>
          <p>
            All pricing plans come with the same great benefits listed below
          </p>
        </div>
        <div id="pricing-content">
          <div id="pricing-grid">
            <div className="pricing-card">
              <h1 className="title">Monthly</h1>
              <div className="price">
                <div className="card-price">67.99 USD</div>
                <div className="card-price-rule">/mo</div>
              </div>
              <div className="excerpt">Full Price</div>
              <ul className="list">
                <li>
                  <div>Smart Money Concepts Exclusive Indicator</div>
                </li>
                <li>
                  <div>Premium Backtester Suite</div>
                </li>
                <li>
                  <div>Exclusive Discord Community</div>
                </li>
                <li>
                  <div>Active Indicator Updates</div>
                </li>
                <li>
                  <div>24/7 Support</div>
                </li>
              </ul>
              <button>Monthly</button>
              <div className="other">No Refund</div>
            </div>
            <div className="pricing-card">
              <h1 className="title">Quarterly</h1>
              <div className="price">
                <div className="card-price">47.99 USD</div>
                <div className="card-price-rule">/mo</div>
              </div>
              <div className="excerpt">143.97 USD Paid Quarterly</div>
              <ul className="list">
                <li>
                  <div>Smart Money Concepts Exclusive Indicator</div>
                </li>
                <li>
                  <div>Premium Backtester Suite</div>
                </li>
                <li>
                  <div>Exclusive Discord Community</div>
                </li>
                <li>
                  <div>Active Indicator Updates</div>
                </li>
                <li>
                  <div>24/7 Support</div>
                </li>
              </ul>
              <button>Quarterly</button>
              <div className="other">No Refund</div>
            </div>
            <div className="pricing-card">
              <h1 className="title">Yearly</h1>
              <div className="price">
                <div className="card-price">39.99 USD</div>
                <div className="card-price-rule">/mo</div>
              </div>
              <div className="excerpt">479.88 USD Paid Annually</div>
              <ul className="list">
                <li>
                  <div>Smart Money Concepts Exclusive Indicator</div>
                </li>
                <li>
                  <div>Premium Backtester Suite</div>
                </li>
                <li>
                  <div>Exclusive Discord Community</div>
                </li>
                <li>
                  <div>Active Indicator Updates</div>
                </li>
                <li>
                  <div>24/7 Support</div>
                </li>
              </ul>
              <button>Yearly</button>
              <div className="other">No Refund</div>
            </div>
          </div>
          <div id="pricing-lifetime">
            <div id="lifetime-header">
              <div className="lifetime-price">
                <h1 className="title">Lifetime</h1>
                <div className="price">999.99 USD</div>
                <div className="excerpt">One Time Payment</div>
              </div>
              <button>lifetime</button>
              <div className="other">No Refund</div>
            </div>
            <div id="lifetime-content">
              <ul className="list lifetime-list">
                <li>
                  <div className="list-text">
                    Access to every premium indicator we will ever release
                  </div>
                </li>
                <li>
                  <div className="list-text">
                    Beta test and preview premium indicators before they launch
                  </div>
                </li>
                <li>
                  <div className="list-text">
                    Everything else included in the packages listed above
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="faqs-section"></div>
      <div id="discord-section"></div>
      <div id="footer"></div>
    </div>
  );
}

export default App;
