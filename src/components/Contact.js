import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
function Contact() {
  return (   
    <section className="contact" id="Contact">
      <h2 className="contact-title">Contact Me</h2>
      <div className="contact-content">
      <div className="contact-left">
          <h4 className="contact-text">let's work together</h4>
          <div className="contact-list">
            <a href="https://github.com/pandeyshweta0407"><FaGithub className='text-4xl' /></a>
            <a href="shwetapandey60023@gmail.com"><MdEmail className='text-4xl' /></a>
            <a href="www.linkedin.com/in/pandeyshweta0407"><FaLinkedin className='text-4xl' /></a>
          </div>
        </div>

        <div className="contact-right"  id="contact-right">
          <form>
          <input type="text" name="name" placeholder="Enter your name" id="" required/>
            <input type="text" name="email" placeholder="Enter your email" id="" required/>
            <input type="text" name="phone" placeholder="Enter your phone" id="" required/>
            <input type="text" name="subject" placeholder="Enter your Subject" id="" required/>
            <textarea name="message" placeholder="Enter your message" id="" cols="30" rows="4"></textarea>
            <input type="submit" value="submit" class="send" id="send"/> 
            </form>
        </div>

       
  
      </div>
  
    </section>

  )
}

export default Contact