import React from 'react'
import { render } from 'react-dom'
import Clock from '../src/react-flip-clock.js'

const Index = () => {
  return (
    <div>
      <Clock />
    </div>
  )
}

render(
  <Index />,
  document.getElementById('app')
)
