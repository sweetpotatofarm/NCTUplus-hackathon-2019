import React from 'react';
import '../App.scss'
class ClassHistory extends React.Component{
	render(){
		return(
			<div className="tableContainer">
			 <div className="bar">修課歷史</div>
			 <br></br>
			 <div className="bar">--------------------</div>
			 <br></br>
			 <div className="bar">微積分                4.0</div>
			 <br></br>
			 <div className="bar">日治時代科學           4.9</div>
			  <br></br>
			 <div className="bar">戲劇與電影             4.3</div>

			</div>
		)
	}
}

export default ClassHistory