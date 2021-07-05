import React from 'react'
import {
  Switch,
  Route,
} from "react-router-dom";

const Router: React.FC = (props) => {
  return (
    <Switch>
      <Route exact path="/">
        Main Route
      </Route>
      <Route exact path="/:session">
        Session Page
      </Route>
    </Switch>
  )
}

export default Router
