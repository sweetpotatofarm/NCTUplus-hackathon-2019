import React from 'react';
import '../App.scss';
import User from '../picture/User.png';

class UnGroupingList extends React.Component{
	render(){
		return(
				<div className="unGroupingContainer">
					<div className="title" style={{fontSize:25}}>未分組成員</div>
					
					<div className="grayBar"></div>
					<br></br>
					<div className="member">
						<img alt='404' src={User} height="60" width="68"/>
						<div className='nameStyle' style={{fontSize:18}}>白白<br></br>資工系</div>
					</div>
					<br></br>
					<div className="grayBar"></div>
					<br></br>
					<div className="member">
						<img alt='404' src={User} height="60" width="68"/>
						<div className='nameStyle' style={{fontSize:18}}>小白<br></br>資工系</div>
					</div>
					<br></br>
					<div className="grayBar"></div>
					<br></br>
					<div className="member">
						<img alt='404' src={User} height="60" width="68"/>
						<div className='nameStyle' style={{fontSize:18}}>大白<br></br>資工系</div>
					</div>
					<br></br>
					<div className="grayBar"></div>
					<br></br>
					<div className="member">
						<img alt='404' src={User} height="60" width="68"/>
						<div className='nameStyle' style={{fontSize:18}}>黑黑<br></br>傳科系</div>
					</div>
					<br></br>
					<div className="grayBar"></div>
					<br></br>
					<div className="member">
						<img alt='404' src={User} height="60" width="68"/>
						<div className='nameStyle' style={{fontSize:18}}>小黑<br></br>傳科系</div>
					</div>
					<br></br>
					<div className="grayBar"></div>
					<br></br>
					<div className="member">
						<img alt='404' src={User} height="60" width="68"/>
						<div className='nameStyle' style={{fontSize:18}}>大黑<br></br>傳科系</div>
					</div>
					<br></br>
					<div className="grayBar"></div>
					<br></br>
					<div className="member">
						<img alt='404' src={User} height="60" width="68"/>
						<div className='nameStyle' style={{fontSize:18}}>小紅<br></br>電機系</div>
					</div>
					<br></br>
					<div className="grayBar"></div>

					<br></br>
					<div className="member">
						<img alt='404' src={User} height="60" width="68"/>
						<div className='nameStyle' style={{fontSize:18}}>大紅<br></br>電機系</div>
					</div>
					<br></br>
					<div className="grayBar"></div>
					
				</div>
			)
	}
}

export default UnGroupingList;