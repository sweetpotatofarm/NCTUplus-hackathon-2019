import React from 'react';
import '../pages/MainPage.scss';
import Navbar from '../navbar'
import Component from '../component.js'

class ProcessingPage extends React.Component {
  render(){
    return (
      <div>
        <Navbar />
        <Component />
      </div>
    );
  }
}

export default ProcessingPage;
