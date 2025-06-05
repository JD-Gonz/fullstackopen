import { useState } from 'react'

const Statistics = (props) => {
  return (
    <>
      <h2>Statistics</h2>
      <p><strong>Good</strong>: {props.good}  | <strong>Neutral</strong>: {props.neutral}  | <strong>Bad</strong>: {props.bad}</p>
      <p>All: {props.total}</p>
      <p>Average: {props.total > 0 ? (props.good - props.bad) / (props.total) : 0}</p>
      <p>Positive: {props.total > 0 ? (props.good / (props.total) * 100) : 0}%</p>
    </>
  )
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good + neutral + bad

  return <>
    <h1>Unicafe</h1>

    <h2>Give feedback</h2>

    <button onClick={() => setGood(good + 1)}>Good</button>
    <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
    <button onClick={() => setBad(bad + 1)}>Bad</button>

    <Statistics good={good} neutral={neutral} bad={bad} total={total} />
  </>
}

export default App
