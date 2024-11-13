import React, {Component}from 'react';
import {withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../assets/logo.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faUser, faHome, faCalendarCheck, faHeart, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import Drawer from './drawer'

const Styles  = theme => ({
  root: {
    flexGrow: 1,
    display:'inline-flex',

  },
  appstyle:{
    background: "linear-gradient(to right, #08591c 10%,#22d451)",
    width:'186.8vh',
    height:'10.5vh',
    border:'none'
  },
  menuButton: {
    display:'flex-end',
    color:'white',
  },
  title: {
    flexGrow: 1,
    color: "lightgrey",  
    fontWeight: '700',
    textShadow: '-1px 1px 10px rgba(255, 255, 255, 255)'
    

  },
  logo:{
      height:'4rem',
      border:'none',
      marginTop:'-6px',


  },
  button:{
      marginRight:'30px',
      padding:'0.2',
      height:'5vh',
      color:'lightgrey'
      
  }
});

class Navbar extends Component {
    render() {
             const { classes } = this.props;
             return(
                <div className={classes.root} >
                <img src={logo}  className={classes.logo}></img>
                <AppBar position="static" className={classes.appstyle}>
                  <Toolbar>
                    <Typography variant="h5" className={classes.title}>
                       The Green Shadow
                    </Typography>
                    <span style={{display:"space-between"}}>
                        <FontAwesomeIcon icon={faHome} />
                        <Button color="inherit" className={classes.button} style={{color:'white'}}><strong> Home </strong></Button>
                        <FontAwesomeIcon icon={faCalendarCheck} />
                        <Button color="inherit" className={classes.button}>Events</Button>
                        <FontAwesomeIcon icon={faHeart} />
                        <Button color="inherit" className={classes.button}>Services</Button>
                        <FontAwesomeIcon icon={faPhoneAlt} />
                        <Button color="inherit" className={classes.button}>Contact Us</Button>
                        <FontAwesomeIcon icon={faUser} />
                        <Button color="inherit" className={classes.button}>Know us</Button>
                    </span>
                   <Drawer />
                  </Toolbar>
                </AppBar>
              </div>
             )
       }
} 

export default  withStyles(Styles)(Navbar)