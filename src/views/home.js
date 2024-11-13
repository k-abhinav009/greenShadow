import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'
import Deals from '../components/Deals';
import Spef from '../components/spef'
import Testinomials from '../components/testinomials'

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <Deals />
        <Spef />
        <Testinomials />
        <Footer />
      </div>        
    );
  }
}
 
export default Home;