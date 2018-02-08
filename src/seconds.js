import React from 'react'
import '@/index.scss'
import NumEl from './num-el'

export default class Seconds extends React.Component {
  render () {
    return (
      <div>
        <NumEl type='seconds-pre' num='6' />
        <NumEl type='seconds-last' num='10' />
      </div>
    )
  }
}
