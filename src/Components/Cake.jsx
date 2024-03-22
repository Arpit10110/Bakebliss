import React from "react";
import {HomeCake} from "./HomeCake"
import Pcard from "./Pcard";
import "../Style/Shop.css"
const Cake = () => {
  return (
    <>
      <div className="ShopProd-wraper">
        {HomeCake.map((i) => {
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

export default Cake;
