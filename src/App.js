import React, { Component } from 'react';

import Home from './views/home';
 
class App extends Component {
  render() {
    return (
      <div style={{backgroundColor:"#083827",overflowX:'hidden'}}>
        <Home />
      </div>
    );
  }
}
 
export default App;