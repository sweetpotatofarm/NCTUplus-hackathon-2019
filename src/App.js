import React from 'react';
import './App.scss';

import UserFile from './components/UserFile'
import Component from './component'
import styles from './navbarscss.scss'


import UnGroupingList from './components/UnGroupingList';

class App extends React.Component {
  render(){
    return (
      <div>

        <Component></Component>

            {//<UserFile/>
            }
            <UnGroupingList/>

      </div>
    );
  }
}

export default App;
