import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Registration from './components/Registration';
import Admin from './components/Admin';
// import UserHome from './components/UserHome';
import AdminUpdate from './components/AdminUpdate';

function App() {
  return (
    <div className="App">
      {/*<Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/reg" component={Registration} />
          <Route path="/userafterlogin" component={UserHome} />
          <Route path="/admin" component={Admin} />
          {/* <Route component={NoMatch} /> */}
        {/* </Switch> */}
      {/* </Router>  */}
      <AdminUpdate />
    </div>
  );
}

export default App;
