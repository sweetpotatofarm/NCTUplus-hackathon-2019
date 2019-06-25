import React from 'react'
import navbarstyles from './navbarscss.scss'
import filestyles from './file.scss'
import Navbar from './navbar'
import File from './file'

class Component extends React.Component{
    render(){
        return (
            <div className="component">
                <Navbar></Navbar>
                <File></File>
            </div>
        )
    }
} 


export default Component