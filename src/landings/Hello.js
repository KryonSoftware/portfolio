import React from 'react';
import '../styles/Main.css';
import rick from '../images/fotocvprov.png';
import kumo from '../images/kumo.jpg';

function Home() {
  return (
    <div className="todo">
      <div className="content-marco">
        <figure className="marco" elevation="2">
          <img src={rick} className="foto" elevation="3" alt="foto"/>
        </figure>
        <div className="saludo">
          <h1 className="bienv">Hey, I'm Jose.</h1>
          <h2 className="bienv2">I'm a junior fullstack developer from Mallorca, Spain. After years of hard work on different areas, mainly transportation, 
          I made a 180º turn on my life by studying a Spanish Dual Studium degree on software development. I've been working on
          tourism-focused and market research back-end java applications since then. I'm also studying ML and german to move forward on my career and improve my skills :)</h2>
        </div>
      </div>
      <div className="content-white final">
        <figure className="marco-p" elevation="2">
          <a href="https://www.kumointernet.com/"><img src={kumo} className="portrait" elevation="3" alt="foto"/></a>
        </figure>
        <div className="saludo-p">
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
