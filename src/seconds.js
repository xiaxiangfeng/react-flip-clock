import React from 'react'
import NumEl from './num-el'

export default class Seconds extends React.Component {
  render () {
    return (
      <div>
        <div className="title">
          秒数
        </div>
        <NumEl type='seconds-pre' num='6' />
        <NumEl type='seconds-last' num='10' />
      </div>
    )
  }
}
