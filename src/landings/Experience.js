import React from 'react';
import '../styles/Main.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faStar } from '@fortawesome/free-solid-svg-icons';
import { faTruck } from '@fortawesome/free-solid-svg-icons';

function Experience() {
  return (
    <div className="todo">
      <div className="content">
        <div className="experience">
          <h1 className="bienv">My experience</h1>
          <h2 className="bienv2">For the last year and a half I've been working on SaaS complex tourism Java applications, mainly on the back-end area. 
          Beside that, I've been doing React.js and Python projects on my own.</h2>
        </div>
      </div>
      <div className="content-grey closetop">
          <VerticalTimeline>
            <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(113, 50, 255)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(113, 50, 255)' }}
            date="2018 - 2020"
            iconStyle={{ background: 'rgb(113, 50, 255)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faCode} size="2x" className="icono"/>}
            >
              <h3 className="vertical-timeline-element-title">Back-end developer</h3>
              <h4 className="vertical-timeline-element-subtitle">Mallorca, Spain</h4>
              <p className="bienv">
                Kumo
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2010 - 2011"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff', margin: '10px -20px -20px -20px', width: '40px', height: '40px'  }}
            icon={<FontAwesomeIcon icon={faTruck} className="iconop"/>}
            >
              <h3 className="vertical-timeline-element-title">Art Director</h3>
              <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
              <p>
                autónomo
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2008 - 2010"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff', margin: '10px -20px -20px -20px', width: '40px', height: '40px'  }}
            icon={<FontAwesomeIcon icon={faTruck} className="iconop"/>}
            >
              <h3 className="vertical-timeline-element-title">Web Designer</h3>
              <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
              <p>
                plagas
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2008 - 2010"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff', margin: '10px -20px -20px -20px', width: '40px', height: '40px'  }}
            icon={<FontAwesomeIcon icon={faTruck} className="iconop"/>}
            >
              <h3 className="vertical-timeline-element-title">Web Designer</h3>
              <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
              <p>
                sgel
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2006 - 2008"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff', margin: '10px -20px -20px -20px', width: '40px', height: '40px'  }}
            icon={<FontAwesomeIcon icon={faTruck} className="iconop"/>}
            >
              <h3 className="vertical-timeline-element-title">Web Designer</h3>
              <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
              <p>
                rotger
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2006 - 2008"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff', margin: '10px -20px -20px -20px', width: '40px', height: '40px'  }}
            icon={<FontAwesomeIcon icon={faTruck} className="iconop"/>}
            >
              <h3 className="vertical-timeline-element-title">Web Designer</h3>
              <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
              <p>
                prosegur
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2006 - 2008"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff', margin: '10px -20px -20px -20px', width: '40px', height: '40px'  }}
            icon={<FontAwesomeIcon icon={faTruck} className="iconop"/>}
            >
              <h3 className="vertical-timeline-element-title">Web Designer</h3>
              <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
              <p>
                rotger
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

export default Experience;
