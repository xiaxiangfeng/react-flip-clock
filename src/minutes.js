import React from 'react'
import NumEl from './num-el'

export default class Minutes extends React.Component {
  render() {
    const { date } = this.props
    const tens = Math.floor(date / 10)
    const ones = date % 10

    return (
      <div>
        <div className="title">
          分数
        </div>
        <NumEl type='minutes-pre' num={6} value={tens} />
        <NumEl type='minutes-last' num={10} value={ones} />
        <div className="semicolon">
          <span></span>
          <span></span>
        </div>
      </div>
    )
  }
}
