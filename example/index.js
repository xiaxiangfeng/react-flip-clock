import React from 'react'
import { render } from 'react-dom'
import Clock from 'react-flip-clock'
// import Clock from '../lib/index.js'

const Index = () => {
  // Countdown target: 1 hour from now
  const countdownTarget = new Date().getTime() + 60 * 60 * 1000

  // Timer start: 5 minutes ago
  const timerStart = new Date().getTime() - 5 * 60 * 1000

  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      <h1>React Flip Clock Examples</h1>

      <div style={{ marginBottom: '40px' }}>
        <h2>1. Clock Mode (Default)</h2>
        <Clock />
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h2>2. Countdown Mode (1 hour)</h2>
        <Clock mode="countdown" value={countdownTarget} />
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h2>3. Timer Mode (Started 5 mins ago)</h2>
        <Clock mode="timer" value={timerStart} />
      </div>
    </div>
  )
}

render(
  <Index />,
  document.getElementById('app')
)
