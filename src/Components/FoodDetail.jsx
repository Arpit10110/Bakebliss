import React from "react";
import { useParams } from "react-router-dom";
import StarIcon from '@mui/icons-material/Star';
import { Homecoffee } from "./Homecoffee";
import { HomeCake } from "./HomeCake";
import { HomePastry } from "./HomePastry";
import { burgerapi } from "./HomeBurger";
import "../Style/FoodDetail.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const FoodDetail = () => {
  const parms = useParams();
  const Id = parms.id;
  let name, img, price, rating, dsc;
  let i = 0;
  if (Id.includes("cf")) {
    Homecoffee.map((i) => {
      if (i.id == Id) {
        name = i.name;
        img = i.img;
        price = i.price;
        rating = i.rating;
        dsc = i.description;
      }
    });
  } else if (Id.includes("c")) {
    HomeCake.map((i) => {
      if (i.id == Id) {
        name = i.name;
        img = i.img;
        price = i.price;
        rating = i.rating;
        dsc = i.description;
      }
    });
  } else if (Id.includes("p")) {
    HomePastry.map((i) => {
      if (i.id == Id) {
        name = i.name;
        img = i.img;
        price = i.price;
        rating = i.rating;
        dsc = i.description;
      }
    });
  }
  else if (Id.includes("B")) {
    burgerapi.map((i) => {
      if (i.id == Id) {
        name = i.name;
        img = i.img;
        price = i.price;
        rating = i.rating;
        dsc = i.description;
      }
    });
  }
  const stars = [];
  for (let i = 1; i <= rating; i++) {
    stars.push(<StarIcon style={{ fontSize: "2rem" }} key={i} />);
  }
  const AddtoCart=()=>{
    toast.success('Add to Cart', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }
  return (
    <>
      <div className="foodDetail-Main">
        <img src={img} alt="img" />
        <div className="foodDetail-cont">
          <h1>Product:- <span>{name}</span></h1>
          <div className="foodDetail-rate-price">
            <h3>Price:- <span className="price">₹{price}</span></h3>
            <h3>Rating:- <span className="foodDetail-stars">{stars}</span></h3>
          </div>
          <h2>Description:- <span>{dsc}</span></h2>
          <button onClick={AddtoCart}>Add to Cart</button>
        </div>
      </div>
      <ToastContainer
position="top-center"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
    </>
  );
};

export default FoodDetail;
