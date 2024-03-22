import React from "react";
import { burgerapi } from "./HomeBurger";
import Pcard from "./Pcard";
import "../Style/Shop.css"
const Burger = () => {
  return (
    <>
      <div className="ShopProd-wraper">
        {burgerapi.map((i) => {
          return (
            <Pcard
            key={i.id}
              id={i.id}
              img={i.img}
              name={i.name}
              price={i.price}
              rating={i.rating}
            />
          );
        })}
      </div>
    </>
  );
};

export default Burger;
