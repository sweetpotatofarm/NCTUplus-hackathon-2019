import React from 'react';
import './Project.scss';
import ProjectProcess from './ProjectProcess'

class SingleProject extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      nameAndContribute : [("王曉明", "吉祥物"), ("王志強", "組長")]
    }
  }
  render(){
    return (
      <div className="singleProject" >
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
