import React from 'react'
import './App.css'
import LinkedIn from './images/linkedIn.svg';
import Insta from './images/Instagram.svg';
import Twitter from './images/Twitter.svg';
import Email from './images/email.svg';
import Behance from './images/behance.svg';
// import Photo from './images/my-photo.png';
import Nav from './components/Nav.js'

function App() {
  return (
    <div className="App">
      <nav className="my-nav">
        <Nav/>
      </nav>
      <div className='my-container'>
        <div className="my-text">
          <div className="top-text">Hi, I'm Gideon</div>
          <div className="sub-text">FULLSTACK DEVELOPER</div>
          <div className="mini-text">RUBY-ON-RAILS  |  JAVASCRIPT</div>
          <div className="text-line"></div>
          <div className="sub-text">DESIGNER</div>
          <div className="mini-text">GRAPHIC DESIGN  |  PRODUCT DESIGN  |  UI/UX</div>
        </div>
        <div className="my-image">

        </div>
        <br/><br/><br/>
        <div className="connect-div">
          <span className="connect-text">
            LET'S CONNECT
          </span>
          <span className="connect-imgs">
              <a className="connect-links" href="https://www.linkedin.com/in/gideon-nyametease-29122190/" target="_blank" rel="noreferrer"><span><img className="soc-media-icons-linkedin" alt="linkedIn" src={LinkedIn}/></span></a>
              <a className="connect-links" href="https://mail.google.com/mail/?view=cm&fs=1&to=gknyametease@gmail.com" target="_blank" rel="noreferrer"><span><img className="soc-media-icons" alt="email" src={Email}/></span></a>
              <a className="connect-links" href="https://twitter.com/_Kwvme" target="_blank" rel="noreferrer"><span><img className="soc-media-icons" alt="twitter" src={Twitter}/></span></a>
              <a className="connect-links" href="https://www.instagram.com/brakwame_/" target="_blank" rel="noreferrer"><span><img className="soc-media-icons" alt="instagram" src={Insta}/></span></a>
              <a className="connect-links" href="https://www.behance.net/gknyame-t" target="_blank" rel="noreferrer"><span><img className="soc-media-icons" alt="behance" src={Behance}/></span></a>      
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
