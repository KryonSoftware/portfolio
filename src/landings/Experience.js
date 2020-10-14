import React from 'react';
import '../styles/Main.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faStar, faTruck, faBug, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
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
            className="vertical-timeline-element--work res"
            contentStyle={{ background: 'rgb(113, 50, 255)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(113, 50, 255)' }}
            date="2019 - 2020"
            iconStyle={{ background: 'rgb(113, 50, 255)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faCode} size="2x" className="icono"/>}
            >
              <h3 className="vertical-timeline-element-title">Java Junior Back-end Developer (Kumo S.L.)</h3>
              <h4 className="vertical-timeline-element-subtitle">Mallorca, Spain</h4>
              <p className="bienv">
                Working for Kumo Consultoría S.L. as a junior developer I could not only improve my skills and learn a lot, but to improve during that one 
                and a half year my IT knowledge. My responsabilities the last months were, among others, to develop new back-end software, mostly multi-thread 
                bug-fixing, SQL-driven B2B complex multi-filtered searches using Hibernate with OracleSQL and HTML with Javascript.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element--work res"
            contentStyle={{ background: 'rgb(113, 50, 255)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(113, 50, 255)' }}
            date="2018 - 2019"
            iconStyle={{ background: 'rgb(113, 50, 255)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faCode} size="2x" className="icono"/>}
            >
              <h3 className="vertical-timeline-element-title">Java trainee Back-end Developer (Guest Incoming S.L.)</h3>
              <h4 className="vertical-timeline-element-subtitle">Barcelona (remote), Spain</h4>
              <p className="bienv">
                As a previous step for my formation on Kumo Consultoría, I began to work remotely for one of their customers, Guest Incoming, in order to get used to their system and 
                tourism wholesale SaaS application.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element--work res"
            contentStyle={{ background: 'rgb(113, 50, 255)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(113, 50, 255)' }}
            date="2018 - 2018"
            iconStyle={{ background: 'rgb(113, 50, 255)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faCode} size="2x" className="icono"/>}
            >
              <h3 className="vertical-timeline-element-title">Trainee Developer (Europlayas S.A.)</h3>
              <h4 className="vertical-timeline-element-subtitle">Llucmajor, Mallorca, Spain</h4>
              <p className="bienv">
                My first contact with software development. As soon as I began my Dual Formation, Kumo Consultoría, the company who hired me for formation, sent me to one of their long-term closest 
                clients in order to learn and get used to their B2B platform and gain experience and formation from their IT team before my Dual Formation allowed me to work directly for Kumo.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element--work res symbol"
            date="2018 - 2019"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff'}}
            icon={<FontAwesomeIcon icon={faTruck} size="2x" className="icono"/>}
            >
              <h3 className="vertical-timeline-element-title">Self-employed Professional Driver</h3>
              <h4 className="vertical-timeline-element-subtitle">Mallorca, Spain</h4>
              <p>
                As a self-employed professional driver, I had to deliver all kind of packages and diplomatic beacons. I also had to coordinate a group of 
                five to ten van and truck drivers who either worked for me or by a company that hired me and let them at my disposal.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element--work res symbol"
            date="2018"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBug} size="2x" className="iconob"/>}
            >
              <h3 className="vertical-timeline-element-title">Pest Control (Trima S.A.)</h3>
              <h4 className="vertical-timeline-element-subtitle">Mallorca, Spain</h4>
              <p>
                Before I was self-employed I got several jobs at the same time. One of them was pest control. I made a formation focused on the natural environment 
                of the islands, paid by a company who needed pest and hygiene control workers. I worked for them for around six months, then I got the opportunity 
                to become self-employed.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element--work res symbol"
            date="2017 - 2018"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faTruck} size="2x" className="icono"/>}
            >
              <h3 className="vertical-timeline-element-title">Professional Driver (SGEL S.A.)</h3>
              <h4 className="vertical-timeline-element-subtitle">Mallorca, Spain</h4>
              <p>
                Professional driver. Delivery of books and magazines, both to private companies as kiosks and public schools.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element--work res symbol"
            date="2012 - 2018"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faTruck} size="2x" className="icono"/>}
            >
              <h3 className="vertical-timeline-element-title">Professional Driver (Rotger S.A.)</h3>
              <h4 className="vertical-timeline-element-subtitle">Mallorca, Spain</h4>
              <p>
                Professional driver. Delivery of daily press, books and magazines.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element--work res symbol"
            date="2012"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faShieldAlt} size="2x" className="iconob"/>}
            >
              <h3 className="vertical-timeline-element-title">Information / Security Assistant (Prosegur S.A.)</h3>
              <h4 className="vertical-timeline-element-subtitle">Mallorca, Spain</h4>
              <p>
                During the elections of the Republic of Ecuador I was hired to help manage people flow inside the consulate and in the voting center.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element--work res symbol"
            date="2010 - 2012"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faTruck} size="2x" className="icono"/>}
            >
              <h3 className="vertical-timeline-element-title">Delivery Man (Rotger S.A.)</h3>
              <h4 className="vertical-timeline-element-subtitle">Mallorca, Spain</h4>
              <p>
                My function was to load and unload trucks and vans and to deliver packages to small shops.
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
