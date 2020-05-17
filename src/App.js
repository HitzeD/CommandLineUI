import React from 'react';
import Header from './view/Header.js';
import About from './view/About.js';
import Home from './components/Home.js';

import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <Header />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />

    </div>
  );
}

export default App;
