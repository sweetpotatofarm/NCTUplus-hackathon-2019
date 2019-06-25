import React from 'react';
import '../pages/MainPage.scss';
import Projects from '../components/Projects'
import Component from '../component.js'
import UnGroupingList from '../components/UnGroupingList'
import UserFile from '../components/UserFile'
import MyMember from './MyMember'

class MainPageDown extends React.Component {
  render(){
    return (
      <div className="pageDown">
        <Projects />
        <div>
        <UserFile />
        <MyMember />
        </div>
        
        <UnGroupingList />
      </div>
    );
  }
}

export default MainPageDown;
