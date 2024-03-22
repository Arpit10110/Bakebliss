import React from 'react'
import { HomeCake } from './HomeCake';
import Pcard from "./Pcard.jsx"
import { Link } from 'react-router-dom';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
const Homecake = () => {
  return (
  <>
   <div className="homeProd-wraper">
            {
              HomeCake.map((i)=>{
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

export default Homecake