import React from 'react';
import '../styles/Main.css';
import { faGithub, faLinkedin, faTelegramPlane } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tooltip from '@material-ui/core/Tooltip';

function Contact() {
  return (
    <div className="todo">
      <div className="content">
        <div className="experience">
          <h1 className="bienv">Can I be usefull to your company? Then contact me!</h1>
          <h2 className="bienv2">You already know who I am. Maybe I'm not the most experienced developer out there, but I'm certainly 
          one of the most passionate and interested in learning about new languages, new work environments and new experiences.</h2>
        </div>
      </div>
      <div className="content-white final-contact">
        <div className="contact-fit">
            <Tooltip title="Mail me!">
                <a href="mailto:jomipagu94@gmail.com" className="iconoLibre-c-div">
                    <FontAwesomeIcon icon={faEnvelope} size="4x" className="iconoLibre-c"/>
                </a>
            </Tooltip>
            <Tooltip title="PM me on Github!">
                <a href="https://github.com/KryonSoftware" className="iconoLibre-c-div">
                    <FontAwesomeIcon icon={faGithub} size="4x" className="iconoLibre-c"/>
                </a>
            </Tooltip>
            <Tooltip title="Let's be friends on LinkedIn!">
                <a href="https://linkedin.com/in/josempascualg" className="iconoLibre-c-div">
                    <FontAwesomeIcon icon={faLinkedin} size="4x" className="iconoLibre-c"/>
                </a>
            </Tooltip>
            <Tooltip title="Fastest way to talk!">
                <a href="https://t.me/Kryon94" className="iconoLibre-c-div">
                    <FontAwesomeIcon icon={faTelegramPlane} size="4x" className="iconoLibre-c"/>
                </a>
            </Tooltip>
        </div>
      </div>
    </div>
  );
}

export default Contact;
