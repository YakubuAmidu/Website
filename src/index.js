import React from 'react';
import ReactDOM from 'react-dom';
import './components/App.css';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import App from './components/App';
import Portfolio from './components/Portfolio';
import Jokes from './components/Jokes';
import MusicMaster from './projects/music-master';
import SocialProfiles from './components/SocialProfiles';

ReactDOM.render(
  <Router history={createBrowserHistory()}>
    <Switch>
      <Route exact path='/' component={App} />
      <Route path='/portfolio' component={Portfolio} />
      <Route path='/jokes' component={Jokes} />
      <Route path='/music-master' components={MusicMaster} />
      <Route path='/socialProfiles' component={SocialProfiles} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
