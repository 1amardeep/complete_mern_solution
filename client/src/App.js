import React from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Error from './components/error_page/Error';
import Logout from './components/logout/Logout';

import { Route, Switch } from 'react-router-dom'
import './App.css';

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/about"> 
        <About />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/registration">
        <Signup />
      </Route>
      <Route exact path="/logout">
        <Logout />
      </Route>
      <Route  component={Error} />
      </Switch>
    </>
  )
}

export default App
