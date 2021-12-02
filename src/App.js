import './App.css';
import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Homepage from './pages/homepage';
import NotFound from './pages/notFound'

function App() {
  return (
    <div>
      <Router>
        <Switch>

        <Route exact path="/">
            <Homepage/>
          </Route>

          <Route exact path="/1">
          <div/>
          </Route>

          <Route exact path="">
          <div/>
          </Route>

          <Route exact path="*">
          <NotFound/>
          </Route>

         

          
          
        </Switch>
    </Router>
    </div>
  );
}

export default App;
