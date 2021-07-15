import React from 'react'
import { SessionTeam } from '../../generated/graphql'
import ScoreControls from './ScoreControls'

interface TeamProps {
  index: number
  team: SessionTeam
  id: string
}

const Team: React.FC<TeamProps> = (props) => {
  const { team, index, id } = props
  return (
    <div>
      <h3>{team.school}</h3>
      <span>Score: {team.score}</span>
      <ScoreControls id={id} index={index} />
    </div>
  )
}

export default Team
