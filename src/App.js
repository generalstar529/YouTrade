import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import { Header } from "./components/Header";
import { LandingPage } from "./pages/Landing";
import { PricingPage } from "./pages/Pricing";
import { AboutPage } from "./pages/About";
import { Footer } from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
