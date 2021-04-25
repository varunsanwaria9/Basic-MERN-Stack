import React from 'react';
import './App.css';
import Login from './components/Login';
import Registration from './components/Registration';

function App() {
  return (
    <div className="App">
      {/* <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/reg" component={Registration} />
          <Route path="/login" component={UserLogin} />
          <Route path="/userafterlogin" component={UserAfterLogin} />
          <Route path="/about" component={AboutUs} />
          <Route path="/contact" component={ContactUs} />
          <Route path="/adminlogin" component={AdminLogin} />
          <Route path="/adminafterlogin" component={AdminAfterLogin} />
          <Route path="/displayall" component={DisplayAll} />
          <Route path="/delete" component={Delete} />
          <Route path="/search" component={Search} />
          <Route path="/logout" component={Logout} />
          <Route component={NoMatch} />
        </Switch>
      </Router> */}
      <Login />
      <br/>
      <Registration />
    </div>
  );
}

export default App;
