import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Components/Home.jsx";
import Navbar from "./Components/Navbar";
import Homecake from "./Components/Homecake.jsx";
import Homeburger from "./Components/Homeburger.jsx";
import Homepastry from "./Components/Homepastry.jsx";
import Footer from "./Components/Footer.jsx";
import FoodDetail from './Components/FoodDetail.jsx';
import ShowFoot from './Components/ShowFoot.jsx';
import "./Style/Style.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} >
        <Route path="/homecake" element={<Homecake />} />
        <Route path="/homeburger" element={<Homeburger />} />
        <Route path="/homepastry" element={<Homepastry />} />
        </Route>
        <Route path="/fooddetail/:id" element={<FoodDetail />} />
      </Routes>
      <ShowFoot>
      <Footer />
      </ShowFoot>
    </Router>
  );
};

export default App;
