import { useState } from 'react'

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return <>
    <h1>Unicafe</h1>

    <h2>Give feedback</h2>

    <button onClick={() => setGood(good + 1)}>Good</button>
    <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
    <button onClick={() => setBad(bad + 1)}>Bad</button>

    <h2>Statistics</h2>

    <p><strong>Good</strong>: {good}  | <strong>Neutral</strong>: {neutral}  | <strong>Bad</strong>: {bad}</p>
  </>
}

export default App
