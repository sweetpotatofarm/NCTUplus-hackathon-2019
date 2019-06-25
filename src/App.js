import React from 'react';
import './App.css';
import MainPage from './pages/MainPage.js';
import './pages/MainPage.css';
import './components/Project.css';

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
