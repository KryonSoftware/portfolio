import React from 'react';
import '../styles/Main.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faStar } from '@fortawesome/free-solid-svg-icons';
import { faTruck, faBug } from '@fortawesome/free-solid-svg-icons';
import useMediaQuery from '@material-ui/core/useMediaQuery';

function Experience() {

  function VtlElement() {
    const matches = useMediaQuery('(max-width:1080px)');
    if(matches) {
      return  "margin: '10px 0px -20px -20px'"
    } else {
      return  "margin: '10px -20px -20px -20px'"
    }
  }

  var marg = VtlElement();
  console.log(marg,'?')

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
            date="2019 - 2020"
            iconStyle={{ background: 'rgb(113, 50, 255)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faCode} size="2x" className="icono"/>}
            >
              <h3 className="vertical-timeline-element-title">Java Junior Back-end Developer</h3>
              <h4 className="vertical-timeline-element-subtitle">Mallorca, Spain</h4>
              <p className="bienv">
                Working for Kumo Consultoría S.L. as a junior/trainee developer I could not only learn a new profession, but to improve during that one 
                and a half year my IT knowledge. My responsabilities the last months were, among others, to develop new back-end software, mostly multi-thread 
                bug-fixing, SQL-driven B2B complex multi-filtered searches using Hibernate with OracleSQL and HTML with 'vanilla' Javascript.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element--work symbol"
            date="2018 - 2019"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff'}}
            icon={<FontAwesomeIcon icon={faTruck} size="2x" className="icono"/>}
            >
              <h3 className="vertical-timeline-element-title">Self-employed Professional Driver</h3>
              <h4 className="vertical-timeline-element-subtitle">Mallorca, Spain</h4>
              <p>
                As a self-employed professional driver, I had to deliver all kind of packages and diplomatic beacons. I also had to coordinate a group of 
                five to ten van and truck drivers who either worked for me or by a company that hired me and putted them at my disposal.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element--work symbol"
            date="2008 - 2010"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBug} size="2x" className="iconob"/>}
            >
              <h3 className="vertical-timeline-element-title">Web Designer</h3>
              <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
              <p>
                plagas
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element--work symbol"
            date="2008 - 2010"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faTruck} size="2x" className="icono"/>}
            >
              <h3 className="vertical-timeline-element-title">Web Designer</h3>
              <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
              <p>
                sgel
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element--work symbol"
            date="2006 - 2008"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faTruck} size="2x" className="icono"/>}
            >
              <h3 className="vertical-timeline-element-title">Web Designer</h3>
              <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
              <p>
                rotger
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element--work symbol"
            date="2006 - 2008"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faTruck} size="2x" className="icono"/>}
            >
              <h3 className="vertical-timeline-element-title">Web Designer</h3>
              <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
              <p>
                prosegur
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element--work symbol"
            date="2006 - 2008"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faTruck} size="2x" className="icono"/>}
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
