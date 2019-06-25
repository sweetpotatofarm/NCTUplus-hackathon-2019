import React from 'react';
import '../App.scss';
import User from '../picture/User.png';

class ProfileTitle extends React.Component{
	render(){
		return(
			<div className="titleContainer">

			<img alt='404' src={User} height="112" width="130"/>	
			<div className='wordStyle' style={{fontSize:36}}>王志強<br></br>外文系</div>
			<div style={{width:100}} style={{fontSize:20}}><br></br>平均評分<br></br>4.2/5</div>
			</div>
		)
	}
}

export default ProfileTitle;