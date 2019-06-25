import React from 'react';
import './Project.scss';
import SingleProject from './SingleProject'
import NameContribute from '../components/NameContribute'

class Projects extends React.Component {
  render(){
    return (
      <div className="project">
        <div className="contributeUpper">
            <SingleProject title="決策分析報告" due="6/28" />
            <NameContribute name="王曉明" contribute="吉祥物"/>
            <NameContribute name="王志強" contribute="吉祥物的寵物"/>
        </div>
        <button className="contributeLower">分工</button>
      </div>
    );
  }
}

export default Projects;
