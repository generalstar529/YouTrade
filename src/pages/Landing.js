import { Discord } from "../components/Discord";
import { Faqs } from "../components/Faqs";
import { Motion } from "../components/Motion";
import { Pricing } from "../components/Pricing";
import "./Landing.scss";

export const LandingPage = () => {
  return (
    <>
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
      <Pricing />
      <Faqs />
      <Discord />
    </>
  );
};
