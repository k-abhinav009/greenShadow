import React, { Component } from 'react';
import './Footer.css'
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import logo from '../assets/logo.png';
import { faFacebook, faInstagramSquare, faFacebookSquare, faTwitterSquare, faWhatsappSquare } from "@fortawesome/free-brands-svg-icons"
class Footer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="main-footer">
        <div className="container">
          <div className="row" style={{display:'flex'}}>
            {/*column1*/}
            <div className="col" style={{marginLeft:'2rem'}}>
                <h2 style={{marginLeft:'2rem',color:'darkgrey'}}>The Green Shadow</h2>
                  <ul className="list-unstyled">
                    <li>342-420-6969</li>
                    <li>Chennai,Rajsathan</li>
                    <li>123 Street South North</li>
                  </ul>
               </div>
               {/*column2*/}
               <div className="col" style={{marginLeft:'2rem'}}>
                <h2 style={{marginLeft:'2rem',color:'darkgrey'}}>The Green Shadow</h2>
                  <ul className="list-unstyled">
                    <li>342-420-6969</li>
                    <li>Chennai,Rajsathan</li>
                    <li>123 Street South North</li>
                  </ul>
               </div>
               <div className="col" style={{marginLeft:'2rem'}}>
                <h2 style={{marginLeft:'2rem',color:'darkgrey'}}>Contact Us</h2>
                <IconButton color="primary" aria-label="upload picture" component="span">
                   <FontAwesomeIcon icon={faFacebookSquare}  color="lightgrey" />
                    </IconButton>
                    <IconButton color="primary" aria-label="upload picture" component="span">
                   <FontAwesomeIcon icon={faInstagramSquare}  color="lightgrey"/>
                    </IconButton>
                    <IconButton color="primary" aria-label="upload picture" component="span">
                   <FontAwesomeIcon icon={faTwitterSquare}  color="lightgrey"/>
                    </IconButton>
                    <IconButton color="primary" aria-label="upload picture" component="span">
                   <FontAwesomeIcon icon={faWhatsappSquare}  color="lightgrey"/>
                    </IconButton>
                  
               </div>
               <div className="col" style={{marginLeft:'2rem'}}>
                <h2 style={{marginLeft:'2rem',color:'darkgrey'}}>Subscribe Us</h2>
                <Button variant="contained" color="primary" disableElevation style={{marginLeft:"2.5rem"}}>
                           SUBSCRIBE
                  </Button>
                  
               </div>


          </div>
          <hr></hr>
          <span className="row" style={{margin:'2rem',marginBottom:'1rem'}}>
          <img src={logo}></img>
            <p className="col-sm">
            <b > &copy;{new Date().getFullYear()} THE GREEN SHADOW | ALL RIGHT RESERVED | TERMS OF SERVICES | PREIVACY POLICY</b> 
            </p>
          </span>
        </div>
      </div>        
    );
  }
}
 
export default  Footer;