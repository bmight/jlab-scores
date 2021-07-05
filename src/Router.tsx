import React from 'react'
import {
  Switch,
  Route,
} from "react-router-dom";
import Teams from './components/Teams'

const Router: React.FC = (props) => {
  return (
    <Switch>
      <Route exact path="/">
        Main Route
      </Route>
      <Route exact path="/:session">
        <Teams />
      </Route>
    </Switch>
  )
}

export default Router
