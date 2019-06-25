import React from 'react';
import './Project.css';
import SingleProject from './SingleProject'

class Projects extends React.Component {
  render(){
    return (
      <div className="project">
        <div className="projectsTitle">專案</div>
        <br/>
        <SingleProject title="決策分析報告" due="6/28" />
        <SingleProject title="計算機組織Lab5" due="6/26" />
        <SingleProject title="Steam 夏日特賣大作戰" due="7/XX"/>
        
      </div>
    );
  }
}

export default Projects;
