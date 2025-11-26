import React from 'react'
import NumEl from './num-el'

export default class Hours extends React.Component {
  render() {
    const { date } = this.props
    const tens = Math.floor(date / 10)
    const ones = date % 10

    return (
      <div>
        <div className="title">
          小时
        </div>
        <NumEl type='hours-pre' num={3} value={tens} />
        <NumEl type='hours-last' num={10} value={ones} />
        <div className="semicolon">
          <span></span>
          <span></span>
        </div>
      </div>
    )
  }
}
