import React, { useState } from 'react'

const StatisticLine = props => (
  <tr>
    <td>{props.text}</td>
    <td>{props.value}</td>
  </tr>
)  


const Statistics = (props) => {
  const getAll = () => props.clicks.good + props.clicks.neutral + props.clicks.bad

  const getPositive = () => props.clicks.good / getAll() * 100

  const getAverage = () => (props.clicks.good * 1 + props.clicks.bad * -1) / getAll()

  return (
    <>
    <h1>statistics</h1>
    { getAll() > 0 ? 
    <table>
      <tbody>
        <StatisticLine text="good" value={props.clicks.good} />
        <StatisticLine text="neutral" value={props.clicks.neutral} />
        <StatisticLine text="bad" value={props.clicks.bad} />
        <StatisticLine text="all" value={getAll()} />
        <StatisticLine text="average" value={getAverage()} />
        <StatisticLine text="positive" value={getPositive()} />
      </tbody>
    </table> : 
    <>
      <p>No feedback given</p>
    </>
    }
    </>
    
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [clicks, setClicks] = useState({
    good: 0, neutral: 0, bad: 0
  })

  const setValue = property => {
    const newClicks = { 
      ...clicks, 
      [property]: clicks[property] + 1 
    }
    setClicks(newClicks)
  }



  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setValue('good')} text="good" />
      <Button handleClick={() => setValue('neutral')} text="neutral" />
      <Button handleClick={() => setValue('bad')} text="bad" />
      <Statistics clicks={clicks} />
    </div>
  )
}

export default App