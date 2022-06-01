import React from 'react'
import { useParams } from 'react-router-dom'
import { useSessionByIdQuery } from '../generated/graphql'
import useInterval from '../hooks/useInterval'

import './stream.css'

interface StreamProps {

}

interface StreamRouterProps {
  session: string
  team: string
  type: string
}

const Stream: React.FC<StreamProps> = (props) => {
  const params = useParams<StreamRouterProps>()

  const { data, refetch } = useSessionByIdQuery({
    variables: {
      id: params?.session
    }
  })
  useInterval(refetch, 2000)
  const index = Number(params?.team)
  const teams = data?.session?.teams || []
  const team = teams[index] !== undefined ? teams[index] : {}

  const getText = () => {
    if(team == null) {
      return null
    }
    if(params.type === 'name' ) {
      return team.school
    } else if(params.type === 'score' ) {
      return team.score
    }
  }

  return (
    <div className='vh-100 vw-100 d-flex align-items-center' id='stream-text'>
      <div className='vw-100 text-center'>
        {getText()}
      </div>
    </div> 
  )
}

export default Stream
