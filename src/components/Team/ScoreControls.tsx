import React from 'react'
import { useUpdateTeamScoreMutation } from '../../generated/graphql'

interface ScoreControlsProps {
  index: number
  id: string
}

const ScoreControls: React.FC<ScoreControlsProps> = (props) => {
  const intervals = [5, 10, 15, 20]
  const [ updateTeamScore ] = useUpdateTeamScoreMutation()

  const update = (value: number) => {
    updateTeamScore({
      variables: {
        _id: props.id,
        index: props.index,
        inc: value
      }
    })
  }

  return (
    <div>
      {intervals.map(interval => {
        return (
          <div>
            <button onClick={() => update(-interval)}>-{interval}</button>
            <button onClick={() => update(interval)}>+{interval}</button>
          </div>
        )
      })}
    </div>
  )
}

export default ScoreControls
