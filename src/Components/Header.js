import React, { Component } from 'react';
import resume from '../assets/resume.pdf'

class Header extends Component {
  render() {
    if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
         return <li key={network.name}><a target="_blank" href={network.url}><i className={network.className}></i></a></li>
      })
   }

    return (
     <header id="home">
        <nav id="nav-wrap">
           <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
           <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
           <ul id="nav" className="nav">
              <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
              <li><a className="smoothscroll" href="#about">About</a></li>
              <li><a className="smoothscroll" href="#resume">Education</a></li>
              <li><a className="smoothscroll" href="#portfolio">Projects</a></li>
              <li><a className="smoothscroll" href="#contact">Contact</a></li>
              {/* <li ><a   target="_blank" rel="noopener noreferrer" href="{resume}">Resume</a></li> */}
              <li>
              <div className="columns download" id="navbarresumebtn">
                  <p>
                    <a href={resume} target="_blank" rel="noopener noreferrer" ><i className="fa fa-download"></i> Resume</a>
                  </p>
               </div>
              </li>
           </ul>
         </nav>

         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">I'm Rahul Meena </h1>
               <h3>I'm a  <span>{occupation}</span>. {description}.</h3>
               <hr />
               <ul className="social">
                  {networks}
               </ul>
            </div>
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>
      </header>
    );
  }
}

export default Header;
