import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Registration from './components/Registration';
import AdminUser from './components/AdminUser'
import UserHome from './components/UserHome';
import AdminUpdate from './components/AdminUpdate';
import UserExamRegister from './components/UserExamRegister'
import AdminExam from './components/AdminExam';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/reg" component={Registration} />
          <Route path="/userafterlogin" component={UserHome} />
          <Route path="/admin" component={AdminExam} />
          <Route path="/adminuser" component={AdminUser} />
          <Route path="/adminUpdate/:email" component={AdminUpdate} />
          <Route path="/userRegister/:examName" component={UserExamRegister} />
        </Switch>
      </Router> 
    </div>
  );
}

export default App;
