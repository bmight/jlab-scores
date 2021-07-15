import React, { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { useSessionByIdQuery } from '../generated/graphql'
import Team from './Team'
import useInterval from '../hooks/useInterval'

interface TeamsProps {

}

const Teams: React.FC<TeamsProps> = (props) => {
  const params = useParams<{ session: string }>()
  const location = useLocation()
  const { loading, data, refetch } = useSessionByIdQuery({
    variables: {
      id: params?.session
    }
  })
  useInterval(refetch, 2000)
  const session = data?.session
  const teams = session?.teams || []
  const id = session?._id

  useEffect(() => {
    refetch()
  }, [location, refetch]) 


  if(loading) {
    return <div>loading</div>
  }

  return (
    <>
      {teams.map((team, index) => {
        if(team !== null) {
          return <Team id={id} team={team} index={index} />
        } else {
          return null
        }
      })}
    </>
  )
}

export default Teams
