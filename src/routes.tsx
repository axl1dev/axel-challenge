import React, { useEffect, useState } from 'react'
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect//,
  //useParams
} from 'react-router-dom';
import Main from './components/Main/index'


export const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path='/:username' component={Main} />
      <Route path='*'>
        <Redirect to='/yknx4' />
      </Route>
    </Switch>
  </Router>
)
