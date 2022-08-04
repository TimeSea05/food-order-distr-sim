import React from 'react'
import './App.css'
import { Button, Form } from 'rsuite'
import PoissonReqSim from './utilities/Poisson-Simulation'

function App () {
  const [simTime, setSimTime] = React.useState(0)
  const [orderNum, setOrderNum] = React.useState(0)

  return (
    <div className='App'>
      <Form
        className='input' onChange={({ inputTime, inputOrderNum }) => {
          setSimTime(Number(inputTime))
          setOrderNum(Number(inputOrderNum))
        }}
      >
        <Form.Group controlId='inputTime'>
          <Form.ControlLabel>Simulation Time (second)</Form.ControlLabel>
          <Form.Control name='inputTime' />
        </Form.Group>
        <Form.Group controlId='inputOrderNum'>
          <Form.ControlLabel>Average Order Number</Form.ControlLabel>
          <Form.Control name='inputOrderNum' />
          <Form.HelpText tooltip>Mathematical expectation, not the exact number.</Form.HelpText>
        </Form.Group>
      </Form>
      <Button
        appearance='primary' size='lg'
        onClick={() => { PoissonReqSim(orderNum, simTime) }}
        className='button'
      >
        Click to Simulate
      </Button>
    </div>
  )
}

export default App
