import { init } from 'ityped';
import React from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';
import "./hero.scss"
import Intoimg from "../Images/Image1.jpg"
import { Link } from 'react-router-dom';



const Hero = () => {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, { showCursor: false, backDelay: 1500, backSpeed: 100, strings: ["Frontend Dev", "React Developer", "FrontEnd Developer"] });


  }, []);
  return (
    <div className='hero-container'>

      <div className="imageContainer">
        <img className="img" src={Intoimg} alt="Intoimg" />
      </div>
      <h3>HI I'M SUSHANT LAMA</h3>
      <div className="context">

        <h2 ref={textRef}></h2>


      </div>

      <div className='btnLink'>
        <Link to="/project" className='btnLight'>Project</Link>
        <Link to="/project" className='btn'>Contact</Link>


      </div>

    </div>
  )
}

export default Hero