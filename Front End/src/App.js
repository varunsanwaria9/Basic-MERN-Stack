import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Registration from './components/Registration';
import Admin from './components/Admin';
import UserHome from './components/UserHome';
import AdminUpdate from './components/AdminUpdate';
import UserExamRegister from './components/UserExamRegister'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/reg" component={Registration} />
          <Route path="/userafterlogin" component={UserHome} />
          <Route path="/admin" component={Admin} />
          <Route path="/adminUpdate/:email" component={AdminUpdate} />
          <Route path="/userRegister" component={UserExamRegister} />
        </Switch>
      </Router> 
    </div>
  );
}

export default App;
