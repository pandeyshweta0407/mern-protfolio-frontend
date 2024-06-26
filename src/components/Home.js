import React from 'react'
import Profile from '../assests/profile.jpg';
import Resume from '../assests/resume.pdf';
import Typed from 'typed.js';
import { TiArrowDownOutline } from "react-icons/ti";
import { FaLinkedin } from "react-icons/fa6";
import { AiFillGithub } from "react-icons/ai";
import '../App.css';
import Navbar from './Navbar';

function Home() {

     // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["FullStack developer", "Software developer" , "Mern Stack developer "],
      typeSpeed: 50,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

    
      
    

  return (

    <section id="Home" className="home">

    <div className='home-upper'>
    <Navbar/>  
    </div>

    <div className='home-bottom'>
      
    <div className="home-content">
      <h3>Hello, It's Me</h3>
      <h1>Shweta Pandey</h1>
      <h3>And I'm a <span ref={el}></span></h3>
      <p>
        I am open to network <br/>
         let's connect and work together
      </p>
      <div className="home-sci">
        <a href="https://github.com/pandeyshweta0407"><AiFillGithub /></a>
        <a href="www.linkedin.com/in/pandeyshweta0407"><FaLinkedin /></a>
      </div>
      <a href="#About" className="btn-box">More about Me</a>
      <a href={Resume} download="Resume" target='blank' rel="noreferrer" className="btn-box ">
      <TiArrowDownOutline className='text-3xl mr-3 ' /> Resume</a>
    </div>
    <div className="home_img flex flex-wrap">
      <img  src={Profile} alt="profile" className='element object-contains p-4'/>
    </div>
    </div>



</section>
  )
}

export default Home;