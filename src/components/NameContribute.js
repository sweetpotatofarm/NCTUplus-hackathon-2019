import React from 'react';
import './Project.scss';
import ProjectProcess from './ProjectProcess'
import User from '../picture/User2.png';

class NameContribute extends React.Component {
  
  render(){
    return (
      <div className="nameContribute" >
        <div className="nameSide">
            <img alt='404' src={User} height="32" width="40"/>
            {
                this.props.name
            }
        </div>
        <div className="contributeSide">
            {
                this.props.contribute
            }
        </div>
      </div>
    );
  }
}

export default NameContribute;
