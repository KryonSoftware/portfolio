import React from 'react';
import '../styles/Main.css';
import cv from '../images/JoseMiguelPascualCVPortfolio-1.jpg';
import pdf from '../images/JoseMiguelPascualCVPortfolio.pdf';

function Cv() {
  return (
    <div className="todo">
      <div className="content">
        <div className="experience">
          <h1 className="bienv">Curriculum Vitae</h1>
          <h2 className="bienv2">Click on the image to download the pdf version of my curriculum!</h2>
        </div>
      </div>
      <div className="content-white final-cv">
        <figure className="marco-cv" elevation="2">
            <a href={pdf} target="_blank" rel="noopener noreferrer" download>
                <img src={cv} className="cv" elevation="3" alt="foto"/>
            </a>
        </figure>
      </div>
    </div>
  );
}

export default Cv;
