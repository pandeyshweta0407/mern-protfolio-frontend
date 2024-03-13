import React from 'react'
import Note1 from '../assests/noteapp.png';
import Chat2 from '../assests/chatapp.png';
import Weatherapp3 from "../assests/weatherapp2.png";
import Crud4 from '../assests/crudapp.png';
import GoogleKeep5 from '../assests/googlekeepnote.png'; 
import Calculate6 from '../assests/calculate.png';
import Amaazon7 from '../assests/amaazon.png';
import Snakeapp8 from "../assests/snakeapp.png";
import Crypto9 from "../assests/crypto.png";
import Weatherapp10 from "../assests/weatherapp1.png";


function Project() {
  return (
    <section className="project" id="Project">
    <div className="project_title">Latest Projects</div>
    <div className="project_content">
      <a className="project_link" href="https://noteappwriteyournote.netlify.app/">
        <img className="project_img" src={Note1} alt="" />
        <div className="project_topics">Note App</div>
      </a>
      <a className="project_link" href="https://chatappmernstack.netlify.app/"><img className="project_img"
          src={Chat2} alt="" />
        <div className="project_topics">Chat App</div>
      </a>
      <a className="project_link" href="https://getanycityweather.netlify.app/"><img className="project_img"
          src={Weatherapp3} alt="" />
        <div className="project_topics"> Weather App</div>
      </a>
      <a className="project_link" href="https://fullstackmerncrudapp.netlify.app/"><img className="project_img"
          src={Crud4} alt="" />
        <div className="project_topics">Crud App</div>
      </a>
      <a className="project_link" href="https://googlekeepcopy.netlify.app/"><img className="project_img"
          src={GoogleKeep5} alt="" />
        <div className="project_topics">Google Keep note App</div>
      </a>
      <a className="project_link" href="https://calculateexpessions.netlify.app/"><img className="project_img"
          src={Calculate6} alt="" />
        <div className="project_topics">Calculator App</div>
      </a>
      <a className="project_link" href="https://shwetastore.netlify.app/"><img className="project_img"
          src={Amaazon7} alt="" />
        <div className="project_topics">Amazon clone App</div>
      </a>
      <a className="project_link" href="https://snakeandfood.netlify.app/"><img className="project_img"
          src={Snakeapp8} alt="" />
        <div className="project_topics">Snake game</div>
      </a>
      <a className="project_link" href="https://currentcryptodashboard.netlify.app/"><img className="project_img"
          src={Crypto9} alt="" />
        <div className="project_topics">Crypto Dashboard</div>
      </a>
      <a className="project_link" href="https://changingweather.netlify.app/"><img className="project_img"
          src={Weatherapp10} alt="" />
        <div className="project_topics">Weather App</div>
      </a>
    </div>
  </section>
  )
}

export default Project