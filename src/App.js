import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from "./components/Home";
import Main from './components/Main';
import Navbar from './components/Navbar';
import Project from './components/Project';
import Skills from './components/Skills';

function App() {
 
  return (
    <div >
      <div >
       <div className='absolute'>
        <Main/>
       </div>
       <div className='relative'>
        <Navbar/>
        <Home/>
        <About/>
        <Skills/>
        <Project/>
        <Contact/>
        <Footer/>
       </div>
      </div>
    </div>

    // <div className="App"> 
    // {/* <Main/> */}
    // <Navbar/>
    // <Home/>
    // <About/>
    // <Skills/>
    // <Project/>
    // <Contact/>
    // <Footer/>
    // </div>
  );
}

export default App;
