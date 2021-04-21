import React from 'react';
import '../styles/Main.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faStar, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

function Studies() {
  return (
    <div className="todo">
      <div className="content">
        <div className="experience">
          <h1 className="bienv">My studies</h1>
          <h2 className="bienv2">
            Both my related and unrelated studies
          </h2>
        </div>
      </div>
      <div className="content-white">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work res"
            contentStyle={{ background: 'rgb(113, 50, 255)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(113, 50, 255)' }}
            date="2020"
            dateClassName="black-font"
            iconStyle={{ background: 'rgb(113, 50, 255)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faCode} size="2x" className="icono"/>}
            >
              <h3 className="vertical-timeline-element-title">Data Structures + Algorithms</h3>
              <h4 className="vertical-timeline-element-subtitle">Udemy</h4>
              <p className="bienv">
                Coding interview bootcamp. Data structures and algorithms exercises and theory to improve skills.
                <a href="https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/" > 
                <span role="img" aria-label="link">🔗</span> </a>
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element--work res"
            contentStyle={{ background: 'rgb(113, 50, 255)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(113, 50, 255)' }}
            date="2020"
            dateClassName="black-font"
            iconStyle={{ background: 'rgb(113, 50, 255)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faCode} size="2x" className="icono"/>}
            >
              <h3 className="vertical-timeline-element-title">CS50 Itroduction to AI with Python</h3>
              <h4 className="vertical-timeline-element-subtitle">Harvard University, edx Online</h4>
              <p className="bienv">
                Basic introduction to Machine Learning and Artificial Intelligence with Python and its libraries. A free seven weeks long 
                course made by Harvard University through edx. 
                <a href="https://online-learning.harvard.edu/course/cs50s-introduction-artificial-intelligence-python?delta=0" > 
                <span role="img" aria-label="link">🔗</span> </a>
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element--work res"
            contentStyle={{ background: 'rgb(113, 50, 255)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(113, 50, 255)' }}
            date="2018 - 2020"
            dateClassName="black-font"
            iconStyle={{ background: 'rgb(113, 50, 255)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faCode} size="2x" className="icono"/>}
            >
              <h3 className="vertical-timeline-element-title">Spanish Dual Studium, Multiplatform Development</h3>
              <h4 className="vertical-timeline-element-subtitle">CIDE, Mallorca, Spain</h4>
              <p className="bienv">
                Spanish dual formation, higher technician. Focused on Java software development and SQL-like databases among other technologies. Practice 
                on a workplace during almost all the duration of the course. 
                <a href="https://www.todofp.es/dam/jcr:7655e32d-08a3-47a7-a479-ddb6f032c63e/n-tsdesarrolloaplicacionesmultiplataformaen-pdf.pdf" > 
                <span role="img" aria-label="link">🔗</span> </a>
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            iconStyle={{ background: 'rgb(113, 50, 255)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faStar} size="2x" className="iconos"/>}
            />
        </VerticalTimeline>
      </div>
      <div className="content-grey closetop">
        <VerticalTimeline>
        <VerticalTimelineElement
            className="vertical-timeline-element--work res symbol"
            date="2017"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff'}}
            icon={<FontAwesomeIcon icon={faGraduationCap} size="2x" className="icono"/>}
            >
              <h3 className="vertical-timeline-element-title">Pest Control assistant</h3>
              <h4 className="vertical-timeline-element-subtitle">CIFP Joan Taix, Mallorca, Spain</h4>
              <p>
                Course about invasive species on the Balearic Islands. I needed it in order to work for a Pest Control company as a second job during 
                the last months of 2017 and the first ones of 2018.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element--work res symbol"
            date="2012 - 2014"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff'}}
            icon={<FontAwesomeIcon icon={faGraduationCap} size="2x" className="icono"/>}
            >
              <h3 className="vertical-timeline-element-title">Bachelor's degree</h3>
              <h4 className="vertical-timeline-element-subtitle">IES Politècnic (Mallorca) / Madrid, Spain</h4>
              <p>
                Unfinished bachelor's degree due to incompatibility with my time scheudle. Humanistic bachelor, focused on literature, philosophy, 
                classical greek and latin.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element--work res symbol"
            date="2010 - 2012"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} size="2x" className="icono"/>}
            >
              <h3 className="vertical-timeline-element-title">Electrical and Electronical Technician</h3>
              <h4 className="vertical-timeline-element-subtitle">CIDE, Mallorca, Spain</h4>
              <p>
                Spanish technician studies on electrical systems.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            iconStyle={{ background: 'rgb(113, 50, 255)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faStar} size="2x" className="iconos"/>}
            />
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Studies;
