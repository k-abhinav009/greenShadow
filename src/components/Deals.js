import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import RoomSlides from './roomslides';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faAnchor, faNewspaper, faGifts } from '@fortawesome/free-solid-svg-icons';
import m1 from '../assets/m1.gif'
const useStyles = makeStyles({
  card: {
    width: '40%',
    margin:'3vw',
    height:'53vh',
    marginLeft:'10vw',
    backgroundColor:'transparent',
    border:'none'

  },
  card2: {
    width: '40%',
    margin:'3vw',
    height:'53vh',
    marginLeft:'-3vw',
    border:'none',
    padding:'1px',
    backgroundColor:'#19756d' ,
    '&:hover': {
      background:'linear-gradient(to right, #4cb1c3 0%, #eff1c8 30%, #2de549 100%);'},
      fontColor:'white'
  
  },
 
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <div style={{backgroundImage: `url(${m1})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
    <span style={{display:'flex',marginTop:'-1vh',marginBottom:'-1vh'}}>
        <Card className={classes.card}>
            <RoomSlides />
        </Card>
     <Card className={classes.card2}>
        <div>
             <h1 style={{justify:'center',paddingLeft:'60px', color:'white'}}>PORTOLA ROOMS</h1>
             <h3 style={{justify:'center',paddingLeft:'50px',color:'#1419c9',}}>Eco-friendly amenities, king or two double beds and a variety of other touches welcome guests in the Portola Rooms.</h3>
        </div>
        <div>
            <Button  variant="contained"
                    color="secondary"
                    startIcon={<FontAwesomeIcon icon={faNewspaper} ></FontAwesomeIcon>}
                    className={classes.button}style={{justify:'center',margin:'20px 0px 10px 200px'}}>Read More</Button><br></br>
            <Button  variant="contained"
                    color="secondary"
                    startIcon={<FontAwesomeIcon icon={faGifts} ></FontAwesomeIcon>}
                    className={classes.button} style={{justify:'center',margin:'20px 0px 10px 200px'}}>View Deal</Button>
            
        </div>
    </Card>
    </span>

    <span style={{display:'flex'}}>
        <Card className={classes.card}>
            <RoomSlides />
        </Card>
     <Card className={classes.card2}>
        <div>
             <h1 style={{justify:'center',paddingLeft:'60px',color:'white'}}>COURTYARD ROOMS</h1>
             <h3 style={{justify:'center',paddingLeft:'50px',color:'#1419c9'}}>Relax on your secluded patio or send a postcard of Monterey from your work desk as you enjoy the comforts of a Courtyard Room.</h3>
        </div>
        <div>
            <Button  variant="contained"
                color="secondary"
                startIcon={<FontAwesomeIcon icon={faNewspaper} ></FontAwesomeIcon>}
                className={classes.button} style={{justify:'center',margin:'20px 0px 10px 200px'}}>Read More</Button><br></br>
            <Button  variant="contained"
                    color="secondary"
                    startIcon={<FontAwesomeIcon icon={faGifts} ></FontAwesomeIcon>}
                     className={classes.button} style={{justify:'center',margin:'20px 0px 10px 200px'}}>View Deal</Button>
            
        </div>
    </Card>
    </span>
    <span style={{display:'flex'}}>
        <Card className={classes.card}>
            <RoomSlides />
        </Card>
     <Card className={classes.card2} >
        <div>
             <h1 style={{justify:'center',paddingLeft:'60px',color:'white'}}>HARBOR VIEW ROOMS</h1>
             <h3 style={{justify:'center',paddingLeft:'50px',color:'#1419c9'}}>Enjoy stunning Monterey Bay views, coastal inspired décor and eco-friendly amenities in a well appointed Harbor View Room.</h3>
        </div>
        <div>
            <Button  variant="contained"
              color="secondary"
              startIcon={<FontAwesomeIcon icon={faNewspaper} ></FontAwesomeIcon>}
               className={classes.button} style={{justify:'center',margin:'20px 0px 10px 200px'}}>Read More</Button><br></br>
            <Button  variant="contained"
                     color="secondary"
                     startIcon={<FontAwesomeIcon icon={faGifts} ></FontAwesomeIcon>}
                     className={classes.button}style={{justify:'center',margin:'20px 0px 10px 200px'}}>View Deal</Button>
            
        </div>
    </Card>
    </span>
    </div> 
  );
}
