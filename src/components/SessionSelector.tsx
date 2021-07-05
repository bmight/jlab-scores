import React from 'react'
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { matchPath } from "react-router";

interface SessionSelectorProps {

}

interface AllSessions {
  sessions: Array<{
    _id: string
    name: string
  }>
}

const SessionSelector: React.FC<SessionSelectorProps> = (props) => {
  const location = useLocation()
  const match = matchPath<{ session: string }>(location.pathname, {
    path: "/:session",
    exact: true,
    strict: false
  });
  const history = useHistory()
  const { data } = useQuery<AllSessions>(gql`
    query AllSessions {
      sessions {
        _id
        name
      }
    }
  `);
  const session_id = match?.params.session

  const handleSessionChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    history.push(event.target.value) 
  }

  return (
    <>
      <select value={session_id} onChange={handleSessionChange}>
        { data !== undefined
          ? data.sessions.map(session => {
            return <option value={session._id}>{session.name}</option>
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
