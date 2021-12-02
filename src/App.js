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

<<<<<<< HEAD
          <Route exact path="*">
          error
=======
          <Route exact path="">
          <div/>
>>>>>>> 85e8bae127d1dc7a3d6ff5eb38043b4ca0cd0e73
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
