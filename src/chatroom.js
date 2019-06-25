import React from 'react'
import Reactstyles from './chatroom.scss'

class Chatroom extends React.Component{
    render(){
        return(
            <div className="Chatroom">
                <div className="ChatroomTitle">聊天室</div>
                <div className="ChatroomScreen"></div>
                <input type="text" className="ChatroomInput"></input>
            </div>
        )
    }
}

export default Chatroom 