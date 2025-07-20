import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import Homepage from "./pages/Homepage";
import CodeReviewPage from "./pages/CodeReviewPage";

const App = () => {
  return (
    <Router>
      <Layout>
        <Navigation />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/review" element={<CodeReviewPage />} />
        </Routes>
        <Footer />
      </Layout>
    </Router>
  );
};

export default App;
