import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home.jsx";
import Navbar from "./Components/Navbar";
import Homecake from "./Components/Homecake.jsx";
import Homeburger from "./Components/Homeburger.jsx";
import Homepastry from "./Components/Homepastry.jsx";
import Footer from "./Components/Footer.jsx";
import FoodDetail from "./Components/FoodDetail.jsx";
import ShowFoot from "./Components/ShowFoot.jsx";
import "./Style/Style.css";
import Shopnav from "./Components/Shopnav.jsx";
import Coffee from "./Components/Coffee.jsx";
import Burger from "./Components/Burger.jsx";
import Pastry from "./Components/Pastry.jsx";
import Cake from "./Components/Cake.jsx";
import Cart from "./Components/Cart.jsx";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/homecake" element={<Homecake />} />
          <Route path="/homeburger" element={<Homeburger />} />
          <Route path="/homepastry" element={<Homepastry />} />
        </Route>
        <Route path="/fooddetail/:id" element={<FoodDetail />} />
        <Route path="/shop/" element={<Shopnav />}>
          <Route path="coffee" element={<Coffee />} />
          <Route path="pastry" element={<Pastry />} />
          <Route path="burger" element={<Burger />} />
          <Route path="cake" element={<Cake />} />
        </Route>
        <Route path="/cart" element={<Cart/>} />
      </Routes>
      <ShowFoot>
        <Footer />
      </ShowFoot>
    </Router>
  );
};

export default App;
