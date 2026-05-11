import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import LandingPage from './pages/LandingPage';
import Downloads from "./pages/Downloads";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="downloads" element={<Downloads />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
