import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Home from "./components/pages/Home";
import Artists from "./components/pages/Artists";
import ContactUs from "./components/pages/ContactUs";
import Event from "./components/pages/Event";

function App() {
  return (
    <div>
      <Header/>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/artists" element={<Artists/>}/>
            <Route path="/contact" element={<ContactUs/>}/>
            <Route path="/event" element={<Event/>}/>

          </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
