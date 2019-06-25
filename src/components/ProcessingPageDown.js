import React from 'react';
import '../pages/MainPage.scss';
import Component from '../component.js'
import Chatroom from '../chatroom'
import ContributeProcessList from '../components/ContributeProcessList'

class ProcessingPageDown extends React.Component {
  render(){
    return (
      <div className="pageDown">
        <ContributeProcessList />
        <Component />
        <Chatroom />
      </div>
    );
  }
}

export default ProcessingPageDown;
