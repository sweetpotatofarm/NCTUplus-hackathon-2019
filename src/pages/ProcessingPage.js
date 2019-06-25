import React from 'react';
import '../pages/MainPage.scss';
import Navbar from '../navbar'
import Component from '../component.js'
import ProcessingPageDown from '../components/ProcessingPageDown';

class ProcessingPage extends React.Component {
  render(){
    return (
      <div className="page">
        <Navbar />
        <ProcessingPageDown />
      </div>
    );
  }
}

export default ProcessingPage;
