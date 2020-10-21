import React, { useState, useContext } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Context from './Context/Context';

import './App.scss';
import Welcome from './Components/Welcome';
import Home from './Components/Home';


function App() {
  const { example, setExample } = useContext(Context);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/">
          <div>
            asd {example}
            <Welcome />
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
