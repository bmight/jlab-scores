import React from 'react'
import {
  Switch,
  Route,
} from "react-router-dom";
import Teams from './components/Teams'
import PageRoute from './PageRoute'
import Stream from './components/Stream'

const Router: React.FC = (props) => {
  return (
    <Switch>
      <PageRoute exact path="/">
        Main Route
      </PageRoute>
      <PageRoute exact path="/:session">
        <Teams />
      </PageRoute>
      <Route exact path="/:session/stream/:team/:type">
        <Stream />
      </Route>
    </Switch>
  )
}

export default Router
