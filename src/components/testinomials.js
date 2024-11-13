import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import a1 from '../assets/a1.png'
import a2 from '../assets/a2.jpg'
import a3 from '../assets/a3.png'
import m2 from '../assets/m2.gif'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faComment, faQuoteLeft, faQuoteRight, faHeart, faAddressCard, faShareAlt } from '@fortawesome/free-solid-svg-icons';
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  cards:{
      margin:'7px',
      width:'30vw',
      height:'70vh',
      backgroundColor:'#afccaf'
  },
  title: {
    flexGrow: 1,
    color: "white",  
    fontWeight: '700',
    textShadow: '-1px 1px 10px rgba(255, 255, 255, 255)',
    paddingTop:'4vh'
    

  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();

  return (
      <div style={{backgroundImage: `url(${m2})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',height:'110vh',marginTop:'-3.2vh'}}>
          <h1 style={{textAlign:'center',}} className={classes.title}>TESTINOMIALS</h1>
          <h3 style={{textAlign:'center',color:'#e80ed6'}}>We continually receive positive feedback and compliments from our delighted clients, and would be happy to share these comments on request.</h3>
    <span style={{marginLeft:'40px',display:'inline-flex'}}>

        <Card  className={classes.cards}>
        <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar} src={a1}>
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Abhinav Kumar"
        subheader="September 14, 2016"
      />
             <CardContent>
            <FontAwesomeIcon icon={faQuoteLeft} size="2x" color="grey" />
            <Typography style={{padding:'4px',color:'#3d2d22',fontFamily:'cursive',fontSize:'1.15rem'}}>Thank you again for everything. The meeting went very well. Everyone loved the hotel and the support all your staff provided. It was a pleasure to work with a true professional like yourself. You made everything run seamless.</Typography>
            <FontAwesomeIcon icon={faQuoteRight} size="2x" color="grey" />
            </CardContent>
            <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
        </Card>
        <Card  className={classes.cards}>
        <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar} src={a2}>
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Utkarsh Daga"
        subheader="January 20, 2019"
      />
            <CardContent>
            <FontAwesomeIcon icon={faQuoteLeft} size="2x" color="grey" />
            
            <Typography style={{padding:'4px',color:'#3d2d22',fontFamily:'cursive',fontSize:'1.15rem'}}>Thank you again for everything. The meeting went very well. Everyone loved the hotel and the support all your staff provided. It was a pleasure to work with a true professional like yourself. You made everything run seamless.</Typography>
            <FontAwesomeIcon icon={faQuoteRight} size="2x" color="grey" />
            </CardContent>
            <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
        </Card>
        <Card  className={classes.cards}>
        <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar} src={a3}>
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Sanchi Singh"
        subheader="July 7, 2018"
      />
             <CardContent>
            <FontAwesomeIcon icon={faQuoteLeft} size="2x" color="grey" />
            
            <Typography style={{padding:'4px',color:'#3d2d22',fontFamily:'cursive',fontSize:'1.15rem'}}>Thank you again for everything. The meeting went very well. Everyone loved the hotel and the support all your staff provided. It was a pleasure to work with a true professional like yourself. You made everything run seamless.</Typography>
            <FontAwesomeIcon icon={faQuoteRight} size="2x" color="grey" />
            </CardContent>
            <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
        </Card>

    </span>
    </div>
  );
}
