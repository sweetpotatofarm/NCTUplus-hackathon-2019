import React from 'react';
import '../pages/MainPage.scss';
import Projects from '../components/Projects'
import Navbar from '../navbar'
import Component from '../component.js'
import MainPageDown from '../components/MainPageDown';
class MainPage extends React.Component {
  render(){
    return (
      <div className="page">
        <Navbar />
        <MainPageDown />
      </div>
    );
  }
}

export default MainPage;
