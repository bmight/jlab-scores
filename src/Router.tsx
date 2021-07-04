import React from 'react'
import {
  Switch,
  Route,
} from "react-router-dom";

const Router: React.FC = (props) => {
  return (
    <Switch>
      <Route path="/">
        Main Route
      </Route>
    </Switch>
  )
}

export default Router
