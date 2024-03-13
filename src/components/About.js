import React from 'react'
import AboutImg from '../assests/About.jpg'

function About() {
  return (


<div className="about" id="About">
      <div className="about-topic" >
      <h2 >About me</h2> 
      </div> 

      <div className="about-content" >
       <div className ="about-img" >
    <img   src={AboutImg} alt="about" /> 
    </div>
      <div className="about-text">
        I'm a 4th-year student at MERI College, currently pursuing my Btech (CSE)
        <br/>
        <br/>
        Passionate about technology and software development, 
        <br/>I am on a journey to enhance my skills and knowledge in this field.
        <br/>
        <br/>
        It's been few years in programming world i learnt about java and Data 
        <br/>Structure and Algorithm .And now I am learning about web development 
        <br/>and recently built few projects on MERN STACK and ASP.NET CORE MVC .
        <br/>
        <br/>
        I am eager to continue learning and expanding my skill set,
        <br/> with a keen interest in exploring more programming. 
        <br/> languages and frameworks to become a proficient and versatile developer.
        <br/>
        <br/>
        I am open to new opportunities,collaborations, and experiences 
        <br/> that allow me to apply my knowledge and contribute to exciting projects.
        <br/>
        <br/>
        Let's connect and grow together in the dynamic realm of technology!
      
      </div>
       </div>
    </div>







    
  )
}

export default About