import React from 'react'
import { useParams } from 'react-router-dom'
import { useSessionByIdQuery } from '../generated/graphql'
import Team from './Team'

interface TeamsProps {

}

const Teams: React.FC<TeamsProps> = (props) => {
  const params = useParams<{ session: string }>()
  const { loading, data } = useSessionByIdQuery({
    variables: {
      id: params?.session
    }
  })
  if(loading || !data?.session?.teams) {
    return <div>loading</div>
  }

  return (
    <>
      {data.session.teams.map(team => {
        if(team !== null) {
          return <Team team={team} />
        } else {
          return null
        }
      })}
    </>
  )
}

export default Teams
