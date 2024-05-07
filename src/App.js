import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Home from "./components/pages/Home";
import Artists from "./components/pages/Artists";
import ContactUs from "./components/pages/ContactUs";
import Event from "./components/pages/Event";
import ArtworkDetail from "./components/pages/ArtworkDetail";
import Offer from "./components/pages/Offer";
import Shipping from "./components/pages/Shipping";
import Payment from "./components/pages/Payment";
import Review from "./components/pages/Review";
import AboutUs from "./components/pages/AboutUs";
import ViewingRooms from "./components/pages/ViewingRooms";
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
            <Route path="/artworkDetail" element={<ArtworkDetail/>}/>
            <Route path="/offer" element={<Offer/>}/>
            <Route path="/shipping" element={<Shipping/>}/>
            <Route path="/payment" element={<Payment/>}/>
            <Route path="/review" element={<Review/>}/>
            <Route path="/about" element={<AboutUs/>}/>
            <Route path="/viewingroom" element={<ViewingRooms/>}/>
            
          </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
