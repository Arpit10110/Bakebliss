import React from 'react'
import {HomePastry} from "./HomePastry"
import Pcard from "./Pcard.jsx"
import { Link } from 'react-router-dom';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
const Homepastry = () => {
  const HomePastry4=HomePastry.slice(0,5);
  return (
    <>
    <div className="homeProd-wraper">
             {
               HomePastry4.map((i)=>{
                 return(
                  <Pcard key={i.id} id={i.id} img={i.img} name={i.name} price={i.price} rating={i.rating} />
                 )
               })
             }
             <div className="cardContMore">
               <h3>View more products</h3>
               <Link to="/shop/pastry">Click Here <ArrowOutwardIcon/></Link>
             </div>
           </div>
   </>
  )
}

export default Homepastry