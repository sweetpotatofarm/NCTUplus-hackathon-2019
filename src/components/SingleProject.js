import React from 'react';
import './Project.css';
import ProjectProcess from './ProjectProcess'

class SingleProject extends React.Component {
  // constructor(props){
  //   super(props);
  // }
  render(){
    return (
      <div className="singleProject">
        {
          this.props.title
          
        }
        <br/>
        {
          "Due: "+this.props.due
        }
        <ProjectProcess process="進行中"/>
      </div>
    );
  }
}

export default SingleProject;
