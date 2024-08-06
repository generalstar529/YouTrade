import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { Add } from "@mui/icons-material";
import "./Faqs.scss";

export const Faqs = () => {
  return (
    <div id="faqs-section">
      <div id="title-container">
        <h2>FAQs</h2>
      </div>
      <div id="content">
        <Accordion>
          <AccordionSummary
            expandIcon={<Add />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Do we offer a free-trial?
          </AccordionSummary>
          <AccordionDetails>
            We currently offer a 7 day money back guarantee.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<Add />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            Am I guaranteed to profit?
          </AccordionSummary>
          <AccordionDetails>
            There is no system, strategy, or algorithm that 100% guarantees
            profit. This is a tool that uses deep learning algorithms that
            generate optimal entry and exit points but it is not 100% accurate.
            Our system is designed so that even if you take multiple losses in a
            row, if you keep trading you will eventually have wins that are
            larger than your losses.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<Add />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            What is the typical win rate?
          </AccordionSummary>
          <AccordionDetails>
            Stratify provides strategies across all assets and timeframes
            supported by TradingView.com. Due to being a strategy provider; we
            are able to give proven testable data on win rates whereas
            indicators are not able to do so. A win rate does not necessarily
            reflect profits and can be higher or slightly lower than the
            average.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<Add />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            Does it automatically buy and sell for me?
          </AccordionSummary>
          <AccordionDetails>
            You can set up alerts for buy and sell signals through Tradingview,
            but the strategy does not buy and sell for you. You must have at
            least one exchange or crypto wallet to trade from in order to use
            this strategy.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<Add />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            What timeframes does it work on?
          </AccordionSummary>
          <AccordionDetails>
            Stratify Backtester works across all assets and timeframes. In
            general however, we suggest using this on timeframes over the 5m to
            avoid frictional costs and overtrading. It does work below however
            if you are newer to trading these are best to avoid.
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};
