import React from 'react'
import { SessionTeam } from '../../generated/graphql'

interface TeamProps {
  team: SessionTeam
}

const Team: React.FC<TeamProps> = (props) => {
  const { team } = props
  return (
    <div>{team.school}</div>  
  )
}

export default Team
