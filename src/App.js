import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>

        <Route exact path="/">
            aaaa
          </Route>

          <Route exact path="/loginNavigation">
          <div/>
          </Route>

          <Route exact path="/login">
          <div/>
          </Route>

          <Route exact path="/signup">
          <div/>
          </Route>

          <Route exact path="*">
          <div/>
          </Route>

          
          
        </Switch>
    </Router>
    </div>
  );
}

export default App;
