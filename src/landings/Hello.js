import React from 'react';
import '../styles/Main.css';
import rick from '../images/rick.jpg';
import kumo from '../images/kumo.jpg';

function Home() {
  return (
    <div className="todo">
      <div className="content">
        <figure className="marco" elevation="2">
          <img src={rick} className="foto" elevation="3" alt="foto"/>
        </figure>
        <div className="saludo">
          <h1 className="bienv">Hey, I'm Jose.</h1>
          <h2 className="bienv2">I'm a junior fullstack developer from Mallorca, Spain. I've been working on
          tourism-focused back-end java applications. I'm also studying ML to move forward on my career and improve my skills :)</h2>
        </div>
      </div>
      <div className="content-white final">
        <figure className="marco-p" elevation="2">
          <a href="https://www.kumointernet.com/"><img src={kumo} className="portrait" elevation="3" alt="foto"/></a>
        </figure>
        <div className="saludo-p">
          {/* <h1 className="bienv black-font">Hey, I'm Jose.</h1> */}
          <h2 className="bienv2 black-font">"Jose has shown to have a technical knowledge beyond what is expected from a developer with his experience. We consider 
          he has a lot of potencial and we don't hesitate in recommend him".</h2>
          <p className="alignright black-font">
            -Juan Pedro Vilar Bou, CEO, Kumo Consulting.
            </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
