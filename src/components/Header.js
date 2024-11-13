import React, { Component } from 'react'
import {withStyles } from '@material-ui/core/styles';
import Slider from './Slider'
import images from '../images'
import { Typography } from '@material-ui/core';
 
const Styles = theme => ({});

class Header extends Component {
  render() {
    return (
      <div>
          
           <Slider slides={images}/>,
      </div>
    );
  }
}
export default withStyles(Styles) (Header);