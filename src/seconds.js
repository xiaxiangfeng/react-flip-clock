import React from 'react'
import NumEl from './num-el'

export default class Seconds extends React.Component {
  render() {
    const { date } = this.props
    const tens = Math.floor(date / 10)
    const ones = date % 10

    return (
      <div>
        <div className="title">
          秒数
        </div>
        <NumEl type='seconds-pre' num={6} value={tens} />
        <NumEl type='seconds-last' num={10} value={ones} />
      </div>
    )
  }
}
