import React, { useEffect } from "react";
import { useJwt } from "react-jwt";
import { getAccessToken } from "./utils/auth.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/common/Footer.js";
import Header from "./components/common/Header.js";
import Home from "./components/pages/homepage/Home.js";
import Artists from "./components/pages/artist/Artists.js";
import ContactUs from "./components/pages/aboutus/ContactUs.js";
import Event from "./components/pages/events/Event.js";
import ArtworkDetail from "./components/pages/artwork/ArtworkDetail.js";
import Offer from "./components/pages/offer/Offer.js";
import Shipping from "./components/pages/other/Shipping.js";
import Payment from "./components/pages/checkout/Payment.js";
import Review from "./components/pages/other/Review.js";
import AboutUs from "./components/pages/aboutus/AboutUs.js";
import ViewingRooms from "./components/pages/viewingroom/ViewingRooms.js";
import ArtistDetail from "./components/pages/artist/ArtistDetail.js";
import Artwork from "./components/pages/artwork/Artwork.js";
import ListArt from "./components/pages/artist/ListArtist.js";
function App() {
  return (
    <div>
      <Header/>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/artists" element={<Artists/>}/>
            <Route path="/artist/:id" element={<ArtistDetail/>}/>
            <Route path="/contact" element={<ContactUs/>}/>
            <Route path="/event" element={<Event/>}/>
            <Route path="/artwork" element={<Artwork/>}/>
            <Route path="/artworklist" element={<ListArt/>}/>
            <Route path="/artwork/:id" element={<ArtworkDetail/>}/>
            <Route path="/offer/:id" element={<Offer/>}/>
            <Route path="/shipping" element={<Shipping/>}/>
            <Route path="/payment/:offerCode" element={<Payment/>}/>
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
