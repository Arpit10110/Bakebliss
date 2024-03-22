import React from 'react'
import {burgerapi} from "./HomeBurger"
import Pcard from "./Pcard.jsx"
import { Link } from 'react-router-dom';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
const HomeBurger = () => {
  const firstFourBurgers = burgerapi.slice(0, 5);
  return (
    <>
   <div className="homeProd-wraper">
            {
              firstFourBurgers.map((i)=>{
                  return(
                   <Pcard id={i.id} img={i.img} name={i.name} price={i.price} rating={i.rating} />
                  )
              })
            }
            <div className="cardContMore">
              <h3>View more products</h3>
              <Link to="/shop">Click Here <ArrowOutwardIcon/></Link>
            </div>
          </div>
  </>
  )
}

export default HomeBurger