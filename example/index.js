import React from 'react'
import { render } from 'react-dom'
// import Clock from 'react-flip-clock'
import Clock from '../lib/index.js'

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
