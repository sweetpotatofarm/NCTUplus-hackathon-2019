import React from 'react';
import './App.scss';
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom'
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
       <BrowserRouter>
          <Switch>
            <Route exact path='/' component={MainPage}>
            </Route>
            <Route exact path='/ProgressingPage' component={ProcessingPage}>
            </Route>

          </Switch>
       </BrowserRouter>

        
      </div>
    );
  }
}

export default App;
