import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import '../styles/Tabs.css';
import Hello from '../landings/Hello';
import Experience from '../landings/Experience';
import Studies from '../landings/Studies';
import About from '../landings/About.js';
import Cv from '../landings/Cv';
import Contact from '../landings/Contact';
import useMediaQuery from '@material-ui/core/useMediaQuery';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={0} className="box">
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function Appbarear() {
    const matches = useMediaQuery('(max-width:1080px)');
    if(matches) {
      return  <AppBar position="sticky" color="primary" className="bar" elevation="3">
                <Tabear value={value}/>
              </AppBar>
    } else {
      return  <AppBar position="static" color="primary" className="bar" elevation="0">
                <Tabear value={value}/>
              </AppBar>
    }
  }

  function Tabear() {
  
    const matches = useMediaQuery('(max-width:1080px)');
    if (matches) {
      return <Tabs
      value={value}
      onChange={handleChange}
      indicatorColor="secondary"
      variant="scrollable"
      scrollButtons="auto"
      aria-label="scrollable auto tabs example"
    >
      <Tab label="Hello!" {...a11yProps(0)} />
      <Tab label="Experience" {...a11yProps(1)} />
      <Tab label="Studies" {...a11yProps(2)} />
      <Tab label="Curriculum" {...a11yProps(3)} />
      <Tab label="About me" {...a11yProps(4)} />
      <Tab label="Contact" {...a11yProps(5)} />
    </Tabs>
    } else {
      return <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            aria-label="scrollable auto tabs example"
            centered
          >
            <Tab label="Hello!" {...a11yProps(0)} />
            <Tab label="Experience" {...a11yProps(1)} />
            <Tab label="Studies" {...a11yProps(2)} />
            <Tab label="Curriculum" {...a11yProps(3)} />
            <Tab label="About me" {...a11yProps(4)} />
            <Tab label="Contact" {...a11yProps(5)} />
          </Tabs>
    }
  }

  return (
    <React.Fragment className={classes.root}>
      <Toolbar id="back-to-top-anchor" className="backtotop"/>
      <Appbarear />
      <TabPanel value={value} index={0}>
        <Hello />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Experience />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Studies />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Cv />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <About />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Contact />
      </TabPanel>
    </React.Fragment>
  );
}