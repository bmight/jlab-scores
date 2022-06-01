import React from 'react'
import { SessionTeam } from '../../generated/graphql'
import ScoreControls from './ScoreControls'
import { Col } from 'reactstrap'

interface TeamProps {
  index: number
  team: SessionTeam
  id: string
}

const Team: React.FC<TeamProps> = (props) => {
  const { team, index, id } = props
  return (
    <Col className='text-center mx-4'>
      <h1>{team.score}</h1>
      <span>{team.school}</span>
      <ScoreControls id={id} index={index} />
    </Col>
  )
}

export default Team
