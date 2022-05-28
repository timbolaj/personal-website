import React from 'react';
import '../Styles/Head.scss';
import 'bootstrap/dist/css/bootstrap.css';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function Head() {

  const scrollToProfile = () => {
    document.getElementById('profile').scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="Head">
      <div className="links col-sm">
        <a href="https://github.com/timbolaj"><FontAwesomeIcon icon={faGithub} size="2x"/></a>
        <a href="https://linkedin.com/in/aaron-timbol-853383107/"><FontAwesomeIcon icon={faLinkedin} size="2x"/></a>
        <a href="mailto: timbolaj@gmail.com"><FontAwesomeIcon icon={faEnvelope} size="2x"/></a>
      </div>

      <div className="Introduction-text">
        <div className="name">
          <p>Aaron Timbol</p>
        </div>

        <div className="description"> 
          <p>Digital Nomad</p>
          <p>Agile Enthusiast</p>
          <p>Software Developer</p>
        </div>
      </div>

      <span onClick={() => scrollToProfile()}><FontAwesomeIcon icon={faCircleArrowDown} size="3x" className="arrow-down -initial"/></span>
    </div>
  )
}