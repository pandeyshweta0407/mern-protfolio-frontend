import React from 'react'
import { FaJava } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { TbFileTypeSql } from "react-icons/tb";
import { FaGitSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";
import { SiRender } from "react-icons/si";
import { SiPostman } from "react-icons/si";

function Skills() {
  return (
  
    <section className="skills" id="Skill">
      <h1 className="skills_tittle text-white">My Skills</h1>
      <div className='cards'>
         
       <div className='card'>
        <div className='card-title'>Languages And Cousrework</div>
          <div className='card-items'>
          <div className='card-item'><FaJava className='icon' />Java</div>
          <div className='card-item'>Dsa</div>
            
        </div>
       </div>

       <div className='card'>
        <div className='card-title'>Frontend </div>
          <div className='card-items'>
          <div className='card-item'><FaHtml5 className='icon'  />Html</div>
          <div className='card-item'><FaCss3Alt className='icon'  />Css</div>
          <div className='card-item'><SiJavascript className='icon'  />JavaScript</div>
          <div className='card-item'><FaReact className='icon'  />React Js</div>
          <div className='card-item'><FaBootstrap className='icon'  />BootStrap</div>
          <div className='card-item'><SiTailwindcss className='icon'  />Tailwind</div>
        </div>
       </div>

       <div className='card'>
        <div className='card-title'>Backend </div>
          <div className='card-items'>
          <div className='card-item'><FaNode className='icon'  />Node Js </div>
          <div className='card-item'><SiExpress className='icon'  />Express Js</div>
          <div className='card-item'><DiMongodb className='icon' />Mongo DB</div>
          <div className='card-item'><TbFileTypeSql  className='icon' /> MYSQL</div>
        </div>
       </div>

       <div className='card'>
        <div className='card-tittle'>Tools</div>
          <div className='card-items'>
               <div className='card-item'><FaGitSquare className='icon' />git</div>
               <div className='card-item'><FaGithub className='icon' />github</div>
               <div className='card-item'>VSCODE</div>
               <div className='card-item'><SiPostman className='icon' />Postman</div>
               <div className='card-item'><SiNetlify   className='icon' />Netlify</div>
               <div className='card-item'><SiRender  className='icon' />Render</div>
        </div>
       </div>  
      </div>
    </section>
  )
}

export default Skills