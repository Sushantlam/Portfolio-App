import React from 'react'
import { FaFacebook, FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa'
import "./Footer.scss"

const Footer = () => {
  return (
    <div className='container'>
      <div className="footer-content">
        <div className="left">
          <div className="location">
           <h3> <FaHome style={{ color: "white", marginRight:"1rem" }} size={20} />
           Kavresthali, Kathmandu</h3>  </div>
           
          
          <div className="phone">
            <h3><FaPhone style={{ color: "white",  marginRight:"1rem" }} size={20} />
           9813-481120</h3>
          </div>
         

          <div className="email">
            <h3><FaMailBulk style={{ color: "white",  marginRight:"1rem" }} size={20} />
            sushantlama732@gmail.com</h3>
          </div>
         


        </div>

        <div className="right">

          <div className="social">
            <h3>About Myself</h3>
            <p>I'm the react web developer looking to build carrer in web development</p>
          </div>

          <div className="facebook">
            <FaFacebook style={{ color: "white", marginRight:"1rem" }} size={20} />
            <FaInstagram style={{ color: "white", marginRight:"1rem" }} size={20} />
            <FaLinkedin style={{ color: "white", marginRight:"1rem" }} size={20} />
            <FaGithub style={{ color: "white", marginRight:"1rem" }} size={20} />

          </div>

          
        </div>
      </div>
    </div>
  )
}

export default Footer