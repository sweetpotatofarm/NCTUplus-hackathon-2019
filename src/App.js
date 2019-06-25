import React from 'react';
import './App.scss';

import UserFile from './components/UserFile'
import MainPage from './pages/MainPage'
import ProcessingPage from './pages/ProcessingPage'
import './pages/MainPage.scss'
import styles from './navbarscss.scss'


import UnGroupingList from './components/UnGroupingList';

class App extends React.Component {
  render(){
    return (
      <div>
        <MainPage />
        
      </div>
    );
  }
}

export default App;
