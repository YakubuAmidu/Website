import React from 'react';
import ReactDOM from 'react-dom';
import './components/App.css';
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import App from "./components/App";
import Portfolio from "./components/Portfolio";
import Jokes from "./components/Jokes";
import MusicMaster from "./projects/music-master";
import Contact from "./components/Contact";
import Reactone from "./screens/Reactone";
import Reacttwo from "./screens/Reacttwo";
import Reactthree from "./screens/Reactthree";
import Reactfour from "./screens/Reactfour";

ReactDOM.render(
  <Router history={createBrowserHistory()}>
  <Switch>
  <Route exact path="/" component={App}/>
  <Route path="/portfolio" component={Portfolio} />
  <Route path="/jokes" component={Jokes} />
  <Route path="/music-master" components={MusicMaster} />
  <Route path="/contact" components={Contact} />
 <Route path="/reactone" components={Reactone} />
 <Route path="/reacttwo" components={Reacttwo} />
 <Route path="/reactthree" components={Reactthree} />
 <Route path="/reactfour" components={Reactfour} />
  </Switch>
  </Router>,
  document.getElementById('root')
);
