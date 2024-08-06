import "./Pricing.scss";

export const Pricing = () => {
  return (
    <div id="pricing-section">
      <div id="pricing-header">
        <h1>Pricing</h1>
        <p>All pricing plans come with the same great benefits listed below</p>
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
  );
};
