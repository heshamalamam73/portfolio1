import React, { Component } from 'react';
// import{BrowserRouter,Route} from 'react-router-dom';
import Index from './component/index'
import './css/main.css';
import Header from './component/index/Header';
// import index from './component/index';

class App extends Component {
  render() {
    return (     
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
