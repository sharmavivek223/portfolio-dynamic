import React from 'react';
import './App.css';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import ErrorPage from './Components/404';


function App() {
  
  return (<Router>
      <Switch>
        <Route exact path="/" component={Home}/>

        <Route path="/404" component={ErrorPage} />

        <Redirect to="/404"/>

      </Switch>
      </Router>
    );
}

export default App;
