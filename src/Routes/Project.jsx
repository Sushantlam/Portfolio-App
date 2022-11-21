import React from 'react'
import ProjectImage from "../Images/Image2.jpg"

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import './Project.scss';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'


const Project = () => {
  const item = [
    {
      id: "1",
      image: "Ecom.jpg",

      para: "Ecommerce website where users can order a product, Here I have used Map, Filter, Find, UseReducer, Props, useState",

    },
    {
      id: "1",
      image: "Movie.jpg",

      para: "Lama Movie where users can search movie on the search bar , Here I have used Debouncing, Usestate, UseContext, UseEffect, UsePramas",

    },

    {
      id: "3",
      image: "ToDo.jpg",

      para: "This is the Todolist app, the motive of the app is the user can list the day to",

    },
]
  return (
    <>

      <div className="project">
        <Navbar />
       
        <div className="project-content">
          <img className="img" src={ProjectImage} alt="" srcset="" />
        </div>

             <h1>Projects</h1>
        
        <div className="projects">
        <Swiper slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]} className="swipper">
      
          {
            item.map((e, index) => {
              return(
              <>
               <SwiperSlide key={index}>
                <div className="item">
                  <div className="itemCard">
                    <img srcSet={require(`../Images/${e.image}`)} alt="image" />
                  </div>
                  <h5 className="paragraph">{e.para} </h5>
                </div>
                </SwiperSlide>
              </>)

            })
          }
            </Swiper> 

        </div>
        <Footer />

      </div>
    </>
  )
}

export default Project