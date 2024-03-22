import React from 'react'
import {Link , Outlet} from "react-router-dom"
import "../Style/Shopnav.css"
import { useEffect } from 'react'
const Shopnav = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <>
   <div className="shopnav">
    <Link to="coffee">Coffee</Link>
    <Link to="pastry">Pastry</Link>
    <Link to="burger" >Burger</Link>
    <Link to="cake">Cake</Link>
   </div>
   <Outlet/>
    </>
  )
}

export default Shopnav