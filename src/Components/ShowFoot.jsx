import React,{useEffect,useState} from 'react'
import {useLocation} from "react-router-dom"
const ShowFoot = ({children}) => {
    const [showfooter,setshowfooter]=useState(false);
    const Loaction=useLocation();
   
    useEffect(() => {
     if(Loaction.pathname === "/" || Loaction.pathname === "/homepastry" || Loaction.pathname === "/homeburger" || Loaction.pathname === "/homecake")
     {
       setshowfooter(true);
    } 
    else{
       setshowfooter(false);
     }
    }, [Loaction])
    
  return (
    <div>{showfooter && children}</div>
  )
}

export default ShowFoot