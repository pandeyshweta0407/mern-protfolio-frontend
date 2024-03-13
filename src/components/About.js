import React from 'react'
import AboutImg from '../assests/About.jpg'

function About() {
  return (


<div className="about" id="About">
    <h2 class="about-topic">About me</h2>  
    <img  class="about-img" src={AboutImg} alt="about" /> 
      <div className="about-text">
        I'm a 4th-year student at MERI College, currently pursuing my Btech (CSE)
        <br/>
        Passionate about technology and software development, I am on a journey to enhance my skills and knowledge in this field.
        <br/>
        It's been few years in programming world i learnt about java and Data Structure and Algorithm .And now I am learning about web development and recently built few projects on MERN STACK and ASP.NET CORE MVC .
        <br/>
        I am eager to continue learning and expanding my skill set, with a keen interest in exploring more programming. languages and frameworks to become a proficient and versatile developer.
        <br/>
        I am open to new opportunities,collaborations, and experiences that allow me to apply my knowledge and contribute to exciting projects.
        <br/>
        Let's connect and grow together in the dynamic realm of technology!
      
      </div>
    </div>







    
  )
}

export default About