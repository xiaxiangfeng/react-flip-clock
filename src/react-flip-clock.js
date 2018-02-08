import React from 'react'
import Seconds from './seconds'

export default class FilpClock extends React.Component {
  constructor () {
    super()
    this.flip = this.flip.bind(this)
    this.clearFilpClock = this.clearFilpClock.bind(this)
  }

  $$ (str) {
    return document.querySelectorAll(str)
  }

  componentDidMount () {
    this.secondsPre = this.$$('.seconds-pre > li')
    this.secondsLast = this.$$('.seconds-last > li')
    this.flip()
  }

  flip () {
    let secondsNum = 0
    const secondsLast = this.secondsLast

    setInterval(() => {
      this.clearFilpClock('.seconds-last')
      secondsLast[secondsNum].className = 'flip-clock-before'

      if (secondsNum === 9) {
        secondsLast[0].className = 'flip-clock-active'
        secondsNum = 0
        this.secondsPredMove()
        return
      }

      secondsLast[secondsNum + 1].className = 'flip-clock-active'
      secondsNum = secondsNum + 1
    }, 1000)
  }

  secondsPredMove = (() => {
    let secondsNum = 0
    return () => {
      const secondsPre = this.secondsPre

      this.clearFilpClock('.seconds-pre')
      secondsPre[secondsNum].className = 'flip-clock-before'

      if (secondsNum === 5) {
        secondsPre[0].className = 'flip-clock-active'
        secondsNum = 0
        return
      }

      secondsPre[secondsNum + 1].className = 'flip-clock-active'
      secondsNum = secondsNum + 1
    }
  })()

  clearFilpClock (str) {
    this.$$(`${str} li`).forEach((item) => {
      item.className = ''
    })
  }

  render () {
    return (
      <div className="flip-clock-wrapper">
        <Seconds ref="seconds"/>
      </div>
    )
  }
}
