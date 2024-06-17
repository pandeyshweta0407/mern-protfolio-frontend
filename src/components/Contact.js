import React, { useState } from 'react';
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { baseURL } from '../utils/APIRoutes';


function Contact() {

   const [inputValue , setInputValue ] = useState({
       name :"", 
       email : "",
       phone : "",
       subject : "",
       message :"",
   })  
   console.log(inputValue);

   const getValue = (e) =>{
    console.log(e.target.value);
    const {name , value} = e.target;
    setInputValue(()=>{
       return {
        ...inputValue , [name] : value
       }
    })
   }
   const toastOptions = {
    position: "top-right",
    autoClose: 10000,
    pauseOnHover: true,
    theme: "light",
    closeOnClick: true,
    draggable: true,
  };

    const sentUserData = async (e)=>{
      e.preventDefault();
      const {name , email, phone , subject , message} = inputValue;
      const res = await fetch(`${baseURL}/addmsg` ,{
        method: "POST",
        headers:{
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({
          name , email, phone , subject , message
        })
      }) ;
        const data = res.json();
        const status = data.status;
        if(status === false ){
          console.log(status);
        }else{
          console.log(status);
          toast("messsage send successfully" ,  toastOptions);
        }
    }


  return (   
    <section className="contact" id="Contact">
      <div className='contact-upper'>
      <div className="title">Contact Me</div>
      </div>
      <div className='contact-bottom'>
  
      <div className="contact-left">
          <h4 className="contact-text">let's work together</h4>
          <div className="contact-list">
            <a href="https://github.com/pandeyshweta0407"><FaGithub className='text-4xl' /></a>
            <a href="shwetapandey60023@gmail.com"><MdEmail className='text-4xl' /></a>
            <a href="www.linkedin.com/in/pandeyshweta0407"><FaLinkedin className='text-4xl' /></a>
          </div>
        </div>

        <div className="contact-right"  id="contact-right">
        <ToastContainer />
          <form>
          <input type="text" name="name" placeholder="Enter your name" id="" required          onChange={getValue}  />
            <input type="email" name="email" placeholder="Enter your email" id="" required     onChange={getValue}  />
            <input type="text" name="phone" placeholder="Enter your phone" id="" required      onChange={getValue}  />
            <input type="text" name="subject" placeholder="Enter your Subject" id="" required  onChange={getValue}  />
            <textarea name="message" placeholder="Enter your message" id="" cols="30" rows="4" onChange={getValue}  ></textarea>
            <input type="submit" value="submit" className ="send" id="send" onClick={sentUserData}  /> 
            </form>
        </div>
        </div>

       
  
  
  
    </section>

  )
}

export default Contact