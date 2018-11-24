import React, { Component } from 'react';

//importing various components of the application in the app main file for compilation
import Header from './components/header/header';
import Contents from './components/content/content';
import Footer from './components/footer/footer';

//importing the back-end for the application which makes a fetch call for retrieving various data for places from FourSquare
import * as Fetch from './fetch/Fetch';

//importing the styling sheet which contains all the styling for all the components as well as the app itself
import './App.css';

class App extends Component {

  render() {

    //here we make a call to the loadScript method which is actually a call to load the map
    Fetch.loadScript();

    //here we render all the components of our applciation to make our not-so-beautiful application working
    return (
      <div className="App">
        <Header /> {/* contains the heading for the project */}
        <Contents /> {/* contains the detailed contents such as map as well as the sidebar for the project */}
        <Footer /> {/* contains the footer for the project */}
      </div>
    );
  }
}

export default App;