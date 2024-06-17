import React from 'react'

function Navbar() {
  return (
    <header id="header" class="header">
     <div class="header-upper"><div className="logo">Portfolio</div></div>
    <div className="header-bottom">
      <a className="link"  href="#Home">Home</a>
      <a className="link" href="#About">About</a>
      <a className="link" href="#Skill">Skill</a>
      <a className="link" href="#Project">Projects</a>
      <a className="link" href="#Contact">Contact</a>
    </div>
  </header>
  )
}

export default Navbar