import React from 'react'
import Navbar from '../Components/Navbar'
import './Contact.scss';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import Footer from '../Components/Footer';


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vdsgn1n', 'template_1sbpjqu', form.current, 'mLQxtOgwO_PJgPPWy')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <>
    <div className="nav">
      <Navbar/>
     
      <div className='form'>
        <div className="getInTouch">
          <span className='first'>Lets get connect</span>
          <span className='second'>Ping mMe</span>
        </div>
        <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" className='input' name="user_name" />
      <label>Email</label>
      <input type="email" className='input'  name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" className='textarea'/>
    </form>
      </div>
     
    </div>
    <Footer/>
    </>
  )
}

export default Contact