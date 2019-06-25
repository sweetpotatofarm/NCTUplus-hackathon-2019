import React from 'react';
import '../pages/MainPage.scss';
import Projects from '../components/Projects'
import Component from '../component.js'
import UnGroupingList from '../component/UnGroupingList'

class MainPageDown extends React.Component {
  render(){
    return (
      <div className="pageDown">
        <Projects />
        <UnGroupingList />
      </div>
    );
  }
}

export default MainPageDown;
