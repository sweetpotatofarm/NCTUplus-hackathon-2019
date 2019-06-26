import React from 'react';
import './Project.scss';
import ProjectProcess from './ProjectProcess'
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom'

class SingleProject extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      nameAndContribute : [("王曉明", "吉祥物"), ("王志強", "組長")]
    }
  }
  render(){
    return (
      <Link to='/ProgressingPage' className="singleProject" >
        {
          this.props.title
        }
        <br/>
        {
          "Due: "+this.props.due
        }
        <ProjectProcess process="進行中"/>
      </Link>
    );
  }
}

export default SingleProject;
