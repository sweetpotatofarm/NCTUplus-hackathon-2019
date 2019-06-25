import React from 'react';
import '../pages/MainPage.scss';
import Component from '../component.js'
import Chatroom from '../chatroom'
import Projects from '../components/Projects'

class ProcessingPageDown extends React.Component {
  render(){
    return (
      <div className="pageDown">
        <Projects />
        <Component />
        <Chatroom />
      </div>
    );
  }
}

export default ProcessingPageDown;
