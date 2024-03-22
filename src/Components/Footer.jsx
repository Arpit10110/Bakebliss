import React from 'react'
import {AiFillFacebook,AiFillInstagram,AiFillLinkedin} from "react-icons/ai";
import "../Style/footer.css"
const footer = () => {
  return (
    <>
    <div className="footerdiv">
        <div className="dev">
        <span>Developer-Arpit Agrahari</span><br />
        <a href="mailto:omagrahri55@gmail">E-mail-omagrahri55@gmail</a><br />
        <a href="tel:+918840689883">Phone-8840689883</a><br />
        <span>Location-Delhi,India</span><br />
        </div>
        <div className="end">
        Copyright © www.Bakebliss.com all rights are reserved!!!
        </div>
        <div className="social">
        <AiFillFacebook className='scoialImg'/><span className='scoialWord'><a href="https://www.facebook.com/arpit.agrahari.5">Facebook</a></span><br />
        <AiFillLinkedin className='scoialImg'/><span className='scoialWord'><a href="https://www.linkedin.com/in/arpit-agrahari-54aa192a1/">Linkedin</a></span><br />
        <AiFillInstagram className='scoialImg'/><span className='scoialWord'><a href="https://www.instagram.com/___arpit_._/">Instagram</a></span><br />
        </div>
    </div>
    </>
  )
}
export default footer