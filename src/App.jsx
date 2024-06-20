// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/About/AboutUsPage";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import Training from "./components/Training/Training";
import Layout from "./components/Layout";
import Blog from "./components/Blog/Blog";

const App = () => {
  return (
    <Router basename="/Cognosmed/">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/training" element={<Training />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
