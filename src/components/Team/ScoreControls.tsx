import React from 'react'
import { useUpdateTeamScoreMutation } from '../../generated/graphql'
import { Row, Col, Button } from 'reactstrap'
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
    <Row>
      <Col>
        {intervals.map(interval => {
          return (
            <Row className='my-4'>
              <Col>
                <Button block onClick={() => update(-interval)}>-{interval}</Button>
              </Col>
              <Col>
                <Button block onClick={() => update(interval)}>+{interval}</Button>
              </Col>
            </Row>
          )
        })}
      </Col>
    </Row>
  )
}

export default ScoreControls
