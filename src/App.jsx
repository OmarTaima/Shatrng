import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { I18nextProvider } from "react-i18next";
import { Routes, Route } from 'react-router-dom';
import i18n from "./i18n";
import Home from "./pages/Home";
import JoinUs from "./pages/JoinUs";
import JobApplicationForm from "./pages/JobApplicationForm";
import Contact from "./pages/Contact";
import ComingSoon from "./pages/ComingSoon";
import Navbar from "./components/Navbar";
import "./index.css";

function App() {
  return (
    <HelmetProvider>
      <I18nextProvider i18n={i18n}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/join-us" element={<JoinUs />} />
          <Route path="/join-us/:slug" element={<JobApplicationForm />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
        </Routes>
      </I18nextProvider>
    </HelmetProvider>
  );
}

export default App;
