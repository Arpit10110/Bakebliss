import React from "react";
import {HomePastry} from "./HomePastry"
import Pcard from "./Pcard";
import "../Style/Shop.css"
const Pastry = () => {
  return (
    <>
      <div className="ShopProd-wraper">
        {HomePastry.map((i) => {
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

export default Pastry;
