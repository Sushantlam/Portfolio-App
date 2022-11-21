import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import "./Skill.scss"
import { Pagination } from 'swiper'
import 'swiper/css/pagination'
import 'swiper/css'

const Skill = () => {

  const data = [{
    name: "HTML",
    content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Perspiciatis totam alias enim consectetur, debitis laborum eligendi! Ipsa error veniam eligendi"
 },
{
  name: "CSS",
    content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Perspiciatis totam alias enim consectetur, debitis laborum eligendi! Ipsa error veniam eligendi"
 },
  
 {name: "JS",
 content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Perspiciatis totam alias enim consectetur, debitis laborum eligendi! Ipsa error veniam eligendi"
},
{
name: "PHP",
    content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Perspiciatis totam alias enim consectetur, debitis laborum eligendi! Ipsa error veniam eligendi"
 },{
 name: "REACT JS",
 content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Perspiciatis totam alias enim consectetur, debitis laborum eligendi! Ipsa error veniam eligendi"
},{
name: "JAVA",
    content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Perspiciatis totam alias enim consectetur, debitis laborum eligendi! Ipsa error veniam eligendi"
 }]
  return (
    <div className='skill'>
      <h1 className='heading'>Skills</h1>
    
      
<div className="skill-container">
       {
        data.map((e)=>{
          
       return ( 
        <div className="container">
            <h1>{e.name}</h1>
            <p>{e.content}</p>
          </div>
        
       
       )
        })
      }
    
       </div>
     
    </div>
  )
}

export default Skill