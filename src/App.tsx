import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Auth from './routes/auth';
import Events from './routes/events';
import Home from './routes/home';
import Drawer from "./features/uikit/drawer";
import TopBar from './features/uikit/topBar';
import { CssBaseline } from '@material-ui/core';

function App() {
  return (
    <Router>
      <CssBaseline />
      <TopBar />
      <Drawer />
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/auth">Auth</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/auth'>
            <Auth />
          </Route>
          <Route path='/events'>
            <Events />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
