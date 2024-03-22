import React, { useState, useEffect } from 'react';
import "../Style/Home.css";
import { Link,Outlet } from "react-router-dom";
//material UI
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
//Img
import banner from "../assets/banner1.jpg";
import HomeVideo from "../assets/HomeVideo.webm";
//api
import { Homecoffee } from './Homecoffee';
import { TrandigP } from './TrandingP';
import Pcard from "./Pcard.jsx"
const Home = () => {
  const Homecoffee4=Homecoffee.slice(0,5);
  const [countingStarted, setCountingStarted] = useState(false);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const page2 = document.querySelector('.page2');
      const distanceToTop = window.pageYOffset || document.documentElement.scrollTop;
      const page2Offset = page2.offsetTop;
      const windowHeight = window.innerHeight;
      if (distanceToTop + windowHeight >= page2Offset && !countingStarted) {
        incrementCounts();
      }
    };

    window.addEventListener('scroll', handleScroll);
    if (!countingStarted && isMobileDevice()) {
      window.removeEventListener('scroll', handleScroll);
      incrementCounts();
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [countingStarted]);

  const incrementCounts = () => {
    setCountingStarted(true);
    let count = 0;
    const interval = setInterval(() => {
      if (count >= 100) {
        setCount1(100);
        setCount2(130);
        setCount3(100);
        setCount4(25);
        clearInterval(interval);
      } else {
        setCount1(count);
        setCount2(count);
        setCount3(count);
        setCount4(count);
        count++;
      }
    }, 20);
  };

  const isMobileDevice = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  };
  const HideCoffe=()=>{
    let homeCoffe=document.querySelector("#homeCoffe");
    homeCoffe.style="display:none;"
  }
  const ShowCoffe=()=>{
    let homeCoffe=document.querySelector("#homeCoffe");
    homeCoffe.style="display:flex;"
  }
  return (
    <>
      <div className="main">
        <div className="page1">
          <Link to="/shop">
            <img src={banner} alt="banner" />
          </Link>
        </div>
        <div className="page2">
          <div className='page2-wrap'>
            <div className="boxC">
              <div className="box-cont">
                <h5>{count1}%</h5>
                <h5>Organic</h5>
              </div>
            </div>
            <div className="boxC">
              <div className="box-cont">
                <h5>{count2}+</h5>
                <h5>Outlets</h5>
              </div>
            </div>
            <div className="boxC">
              <div className="box-cont">
                <h5>{count3}%</h5>
                <h5>Hygienic</h5>
              </div>
            </div>
            <div className="boxC">
              <div className="box-cont">
                <h5>{count4}+</h5>
                <h5>Products</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="page3">
          <h2>Our Products</h2>
          <div className="homeProd-nav">
            <Link to="/" onClick={ShowCoffe}>Coffee</Link>
            <Link to="/homepastry" onClick={HideCoffe}>Pastry</Link>
            <Link to="homeburger" onClick={HideCoffe}>Burger</Link>
            <Link to="/homecake" onClick={HideCoffe}>Cake</Link>
          </div>
          <Outlet />
          <div className="homeProd-wraper" id='homeCoffe'>
            {
              Homecoffee4.map((i)=>{
                return(
                 <Pcard key={i.id} id={i.id} img={i.img} name={i.name} price={i.price} rating={i.rating} />
                )
              })
            }
            <div className="cardContMore">
              <h3>View more products</h3>
              <Link to="/shop/coffee">Click Here <ArrowOutwardIcon/></Link>
            </div>
          </div>
        </div>
        <div className="pag4">
          <video src={HomeVideo} autoPlay muted loop></video>
        </div>
        <div className="page5">
          <h2>Trending Products</h2>
          <div className="tranding-Prod">
            {
              TrandigP.map((i)=>{
                return(
                 <Pcard key={i.id} id={i.id} img={i.img} name={i.name} price={i.price} rating={i.rating} />
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
