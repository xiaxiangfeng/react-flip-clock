import React from 'react'
import NumEl from './num-el'

export default class Hours extends React.Component {
  render () {
    return (
      <div>
        <NumEl type='hours-pre' num='2' />
        <NumEl type='hours-last' num='4' />
        <div className="semicolon">
          <span></span>
          <span></span>
        </div>
      </div>
    )
  }
}
