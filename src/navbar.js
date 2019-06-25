import React from 'react'
import NavbarStyles from './navbarscss.scss'

class Navbar extends React.Component{
    render(){
        return (
            <div className="Navbar">
                <div className="NavbarTitle">GrouPotato
                </div>
                <div className="NavbarUser">王志強
                </div>
            </div>

        )
    }
} 


export default Navbar

