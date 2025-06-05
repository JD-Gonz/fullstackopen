import { useState } from 'react'

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

    <h2>Statistics</h2>

    <p><strong>Good</strong>: {good}  | <strong>Neutral</strong>: {neutral}  | <strong>Bad</strong>: {bad}</p>
    <p>All: {total}</p>
    <p>Average: {total > 0 ? (good - bad) / (total) : 0}</p>
    <p>Positive: {total > 0 ? (good / (total) * 100) : 0}%</p>
  </>
}

export default App
