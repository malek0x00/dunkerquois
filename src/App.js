import './App.css';
import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Homepage from './pages/homepage';
import NotFound from './pages/notFound'
import Login from './pages/login';
import Signup from './pages/signUp';
import ResultPage from './pages/result';
import ListeDonnation from './pages/listedonnation';

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


          <Route exact path="/login">
          <Login/>
          </Route>

          <Route exact path="/signup">
          <Signup/>
          </Route>

          <Route exact path="/result">
          <ResultPage/>
          </Route>

          <Route exact path="/listedonnation">
          <ListeDonnation/>
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
