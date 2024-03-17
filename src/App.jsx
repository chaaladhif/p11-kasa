import React from "react";
import "./app.scss";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import ErrorPage from "./pages/errorPage/errorPage";
import Logement from "./pages/logement/logement";
function App() {
    return (
        <>
            <main>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<ErrorPage />} />
                    <Route path="/Logement/:id" element={<Logement />} />
                </Routes>
            </main>
            <Footer />
        </>
    );
}

export default App;
