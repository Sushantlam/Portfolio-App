import React from 'react'
import About from './Routes/About'
import {  Routes, Route } from "react-router-dom";
import Contact from './Routes/Contact';
import Project from './Routes/Project';
import Home from './Routes/Home';

const App = () => {
  return (
    <>
   
    <Routes>
    <Route exact path="/" element={<Home/>}/> 
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/project" element={<Project/>}/>
    <Route path="/about" element={<About/>}/>
    </Routes>
   
    </>
  )
}

export default App