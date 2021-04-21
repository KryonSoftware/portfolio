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
          <h2 className="bienv2">For the last years I've been working on SaaS complex tourism Java applications, mainly on the back-end area. 
          Beside that, I've been doing React.js and Python projects on my own.</h2>
        </div>
      </div>
      <div className="content-grey closetop">
          <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work res"
            contentStyle={{ background: 'rgb(113, 50, 255)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(113, 50, 255)' }}
            date="2021"
            iconStyle={{ background: 'rgb(113, 50, 255)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faCode} size="2x" className="icono"/>}
            >
              <h3 className="vertical-timeline-element-title">Junior Backend Developer (Statista GmbH)</h3>
              <h4 className="vertical-timeline-element-subtitle">Hamburg, Germany</h4>
              <p className="bienv">
              Core features backend java development. Member of selected, international agile team in charge of creation and maintenance of API/Endpoints, 
              maintenance and upgrade of highly complex databases and filtering, management, mapping and processing of over 20 million individual company reports 
              through some of the most important market researchers worldwide. GitKraken, Docker, MySQL and RabbitMQ are related technologies.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element--work res"
            contentStyle={{ background: 'rgb(113, 50, 255)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(113, 50, 255)' }}
            date="2020 - 2020"
            iconStyle={{ background: 'rgb(113, 50, 255)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faCode} size="2x" className="icono"/>}
            >
              <h3 className="vertical-timeline-element-title">Junior Backend Developer and Team Leader (Kumo Consultoría S.L.)</h3>
              <h4 className="vertical-timeline-element-subtitle">Mallorca, Spain</h4>
              <p className="bienv">
              Backend Junior Development Team leader. Teaching the Kumo's software technologies to the Spanish Dual Studium employees and developing new features
               and improving legacy ones for the backend multi-threading environment. Meet with clients to gather requirements and project times. Reduced users' bug 
               reports on mailing and API connections by 80% after finding root causes. Using Apache Tomcat both to staging and production deployments and its further surveillance.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element--work res"
            contentStyle={{ background: 'rgb(113, 50, 255)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(113, 50, 255)' }}
            date="2020 - 2020"
            iconStyle={{ background: 'rgb(113, 50, 255)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faCode} size="2x" className="icono"/>}
            >
              <h3 className="vertical-timeline-element-title">React.js Developer (Private Nonprofit side project)</h3>
              <h4 className="vertical-timeline-element-subtitle">Mallorca, Spain</h4>
              <p className="bienv">
              Nonprofit development of two webpages using React.js and Node.js and automatized deployment to github pages. 
              Complete frontend development. The webpages were made for a hospitalized children association.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element--work res"
            contentStyle={{ background: 'rgb(113, 50, 255)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(113, 50, 255)' }}
            date="2019 - 2020"
            iconStyle={{ background: 'rgb(113, 50, 255)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faCode} size="2x" className="icono"/>}
            >
              <h3 className="vertical-timeline-element-title">Backend Java Developer (Kumo Consultoría S.L.)</h3>
              <h4 className="vertical-timeline-element-subtitle">Mallorca, Spain</h4>
              <p className="bienv">
              Backend core development team. Maintenance of legacy code and development of new features in a multi-thread environment, 
              OracleSQL Database, Hibernate connections and Struts management. Improvement of SQL connection times and memory consumption, 
              extension of legacy projects' database structures and development of highly complex SQL queries for specific side to side searches in a tourism-focused buy-and-sell rooming system.
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
              <h3 className="vertical-timeline-element-title">Fullstack Developer (Kumo Consultoría S.L.)</h3>
              <h4 className="vertical-timeline-element-subtitle">Barcelona (remote), Spain</h4>
              <p className="bienv">
              Both frontend and backend developments. JavaScript, Bootstrap and Angular or React.js were used for the frontend environment 
              while on the backend side the focus was on Maven, Struts, Hibernate, Spring, JPA and OracleDB/SQL.
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
              <h3 className="vertical-timeline-element-title">Fullstack Developer (Europlayas S.A. / Guest Incoming S.A.)</h3>
              <h4 className="vertical-timeline-element-subtitle">Llucmajor, Mallorca, Spain</h4>
              <p className="bienv">
              B2B and B2C backend and frontend developments and maintenance of vacational packages and buy-and-sell hotel room and cruiser systems. 
              Javascript and Bootstrap developments and SQL connections and queries as main tasks.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element--work res symbol"
            date="2012 - 2019"
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
