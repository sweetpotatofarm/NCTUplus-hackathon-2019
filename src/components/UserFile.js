import React from 'react';
import '../App.scss'
import ClassHistory from './ClassHistory'
import ProfileTitle from './ProfileTitle'
import SkillList from './SkillList'
class UserFile extends React.Component{
	render(){
		
		return(
			<div className="container">
				<ProfileTitle/>
				<div className="titleContainer">
				<ClassHistory/>
				<SkillList/>
				</div>
			</div>
		)
	}
}

export default UserFile