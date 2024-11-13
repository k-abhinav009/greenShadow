import React, { Component } from 'react'
import {withStyles } from '@material-ui/core/styles';
import Roomslides from './roomSlides/main'
import { Typography } from '@material-ui/core';
 
const Styles = theme => ({});

class roomslides extends Component {
  render() {
    return (
      <div>
           <Roomslides />
      </div>
    );
  }
}
export default withStyles(Styles) (roomslides);