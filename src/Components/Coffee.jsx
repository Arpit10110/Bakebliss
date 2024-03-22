import React from "react";
import { Homecoffee } from "./Homecoffee";
import Pcard from "./Pcard";
import "../Style/Shop.css"
const Coffee = () => {
  return (
    <>
      <div className="ShopProd-wraper">
        {Homecoffee.map((i) => {
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

export default Coffee;
