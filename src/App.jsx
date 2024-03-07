import React from "react";
import "../src/styles/App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import About from "./pages/about";
import ErrorPage from "./pages/errorPage";
import Logement from "./pages/logement";
function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<ErrorPage />} />
                <Route path="/Logement/:id" element={<Logement />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
