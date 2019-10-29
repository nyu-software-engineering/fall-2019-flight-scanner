import React, {Component} from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Article from "./Article"
import Miniarticle from "./Mini-article"
import Teammember from "./Team-member"


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
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

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function NavbarUI() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
          // Cannot be scrollable and centered at the same time 
          // scrollButtons="auto"
          // centered={appBarWidth > 1179}
          // scrollable={appBarWidth < 1179}
        >
          <Tab label="Sport" {...a11yProps(0)} />
          <Tab label="Drama" {...a11yProps(1)} />
          <Tab label="Opinon" {...a11yProps(2)} />
          <Tab label="Politics" {...a11yProps(3)} />
          <Tab label="Weather" {...a11yProps(4)} />
          <Tab label="Agile" {...a11yProps(5)} />
          <Tab label="Team" {...a11yProps(6)} />
        </Tabs>
      {/* convert to mappin? */}
      </AppBar>
      <TabPanel value={value} index={0}>
        <Article></Article>
        <Miniarticle></Miniarticle>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Article></Article>
        <Miniarticle></Miniarticle>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Article></Article>
        <Miniarticle></Miniarticle>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <Article></Article>
        <Miniarticle></Miniarticle>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <Article></Article>
        <Miniarticle></Miniarticle>
      </TabPanel>
      <TabPanel value={value} index={5}>
      <Article></Article>
        <Miniarticle></Miniarticle>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <Teammember></Teammember>
      </TabPanel>
      
    </div>

  );
}

