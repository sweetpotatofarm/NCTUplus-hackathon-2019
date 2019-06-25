import React from 'react';
import './App.css';
import UserFile from './components/UserFile'

import Navbar from './component'
import styles from './navbarscss.scss'


class App extends React.Component {
  render(){
    return (
      <div>

        <UserFile/>
        <Navbar></Navbar>
      </div>
    );
  }
}

export default App;
