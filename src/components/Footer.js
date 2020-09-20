import React from "react";
import '../styles/Footer.css';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import PropTypes from 'prop-types';
import $ from 'jquery';
import { faGithub, faLinkedin, faTelegramPlane } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

$(document).scroll(function() {
    checkOffset();
});

function checkOffset() {

    /* console.log('menor que: ' + ($('#totop').offset().top + '  ?  ' + $('#totop').height())); */
    if(($('#totop').offset().top + $('#totop').height() <= $('#pie').offset().top - 10 )) {
        $('#totop').css('position', 'fixed'); // restore when you scroll up
        $('#acbut').css('position', 'relative');
        $('#acbut').css({'float' : ''});
        $('#acbut').css({'bottom' : ''});
        $('#acbut').css({'right' : ''});
        $('#acbut').css({'margin-bottom' : ''});
        /* console.log('corregido'); */
    } else {
        /* console.log('mayor que: ' + ($('#totop').offset().top + $('#totop').height()) + ' mayor? ' + ($('#pie').offset().top )); */
        if($('#totop').offset().top + $('#totop').height() > $('#pie').offset().top -10) {
            $('#totop').css('position', 'relative');
            $('#totop').css('height', '40px');
            $('#acbut').css('position', 'absolute');
            $('#acbut').css('float', 'right');
            $('#acbut').css('bottom', '10%');
            $('#acbut').css('right', '0%');
            /* console.log('jAajakeloko'); */
        }
    }

    if($(document).scrollTop() + window.innerHeight < $('#pie').offset().top +10) {
        $('#totop').css('position', 'fixed'); // restore when you scroll up
        $('#acbut').css('position', 'relative');
        $('#acbut').css({'float' : ''});
        $('#acbut').css({'bottom' : ''});
        $('#acbut').css({'right' : ''});
        $('#acbut').css({'margin-bottom' : ''});
        /* console.log('corregido22222'); */
    }
}

function ScrollTop(props) {
    const { children, window } = props;
    /* const classes = useStyles(); */
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

        if (anchor) {
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <Zoom in={trigger}>
            <div onClick={handleClick} role="presentation" className='totop' id='totop'>
                {children}
            </div>
        </Zoom>
    );
}

ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default function Footer(props) {
    return (
        <div>
            <ScrollTop {...props}>
                <Fab color="secondary" size="small" aria-label="scroll back to top" id="acbut">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
            <div className="pie" id="pie">
                <div className="footer2">
                    <div className="footerContainer">
                        <div className="hola">
                            <div><h2>Let's work together</h2></div>
                            <div>I'm always open to new adventures! Are you looking for a new employee? Contact me! :)</div>
                        </div>
                        <div className="adios">
                            <div><h2>Social</h2></div>
                            <div>
                                <a href="mailto:jomipagu94@gmail.com" className="iconoLibre-div">
                                    <FontAwesomeIcon icon={faEnvelope} size="2x" className="iconoLibre"/>
                                </a>
                                <a href="https://github.com/KryonSoftware" className="iconoLibre-div">
                                    <FontAwesomeIcon icon={faGithub} size="2x" className="iconoLibre"/>
                                </a>
                                <a href="http://www.linkedin.com" className="iconoLibre-div">
                                    <FontAwesomeIcon icon={faLinkedin} size="2x" className="iconoLibre"/>
                                </a>
                                <a href="https://t.me/Kryon94" className="iconoLibre-div">
                                    <FontAwesomeIcon icon={faTelegramPlane} size="2x" className="iconoLibre"/>
                                </a>
                            </div>
                            {/* </div> */}
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div className="copyr">José M. Pascual Gutiérrez | Software Developer</div>
                </div>
            </div>
        </div>
    )
}