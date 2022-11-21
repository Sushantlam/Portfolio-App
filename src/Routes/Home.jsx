import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Hero from '../Components/Hero'
import "./Home.scss"
import Skill from '../Components/Skill'
import Project from './Project'

const Home = () => {
  return (
    <div className='heading'>
      <Navbar />
      <Hero/>
      <Skill/>
      {/* <Project/> */}
      <Footer/>
      
      </div>
  )
}

export default Home