import React from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import { matchPath } from "react-router";
import { useSessionSelectorQuery } from '../generated/graphql'

interface SessionSelectorProps {

}

const SessionSelector: React.FC<SessionSelectorProps> = (props) => {
  const location = useLocation()
  const match = matchPath<{ session: string }>(location.pathname, {
    path: "/:session",
    exact: true,
    strict: false
  });
  const history = useHistory()
  const { data } = useSessionSelectorQuery();
  const session_id = match?.params.session

  const handleSessionChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    history.push(event.target.value) 
  }

  return (
    <>
      <select value={session_id} onChange={handleSessionChange}>
        { data !== undefined
          ? data.sessions.map(session => {
            if(session !== null) {
              return <option value={session._id}>{session.name}</option>
            } else {
              return null
            }
          })
          : (
            <option>Loading...</option>
          )
        }
      </select>
    </>
  )
}


export default SessionSelector
