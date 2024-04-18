import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

// layout imports
import HomePage from './layouts/HomePage';
import AboutPage from "./layouts/AboutPage";
import ContactPage from "./layouts/ContactPage";
import TermsAndConditionPage from "./layouts/TermsAndConditionPage.js"
import PrivacyPage from "./layouts/PrivacyPage.js";
import Navigation from './Components/navigation/Navigation';

function App() {
  return (
    <div className="App">
      <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/terms" element={<TermsAndConditionPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          
        </Routes>
      </Router>
    </>
      
    </div>
  );
}

export default App;
