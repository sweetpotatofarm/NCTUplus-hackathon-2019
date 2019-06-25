import React from 'react';
import '../pages/MainPage.css';
import Projects from '../components/Projects'

class MainPage extends React.Component {
  render(){
    return (
      <div className="page">
        <Projects />
      </div>
    );
  }
}

export default MainPage;
