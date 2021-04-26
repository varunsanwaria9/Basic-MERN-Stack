import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Registration from './components/Registration';
import Admin from './components/Admin';
import UserHome from './components/UserHome';

function App() {
  return (
    <div className="App">
      {/* <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/reg" component={Registration} />
          <Route path="/userafterlogin" component={UserHome} />
          <Route path="/adminafterlogin" component={AdminHome} />
          {/* <Route component={NoMatch} /> */}
        {/* </Switch> */}
      {/* </Router>  */}
      <Admin />
    </div>
  );
}

export default App;
