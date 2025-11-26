import React from 'react'
import Seconds from './seconds'
import Minutes from './minutes'
import Hours from './hours'
import '@/index.scss'

export default class FlipClock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      diff: 0
    }
  }

  componentDidMount() {
    this.tick()
    this.timer = setInterval(() => {
      this.tick()
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  tick() {
    const { mode, value } = this.props
    const now = new Date().getTime()
    let diff = 0

    if (mode === 'countdown') {
      const target = value instanceof Date ? value.getTime() : value
      diff = Math.max(0, target - now)
    } else if (mode === 'timer') {
      const start = value instanceof Date ? value.getTime() : value
      diff = Math.max(0, now - start)
    } else {
      // Clock mode
      diff = new Date().getTime()
    }

    this.setState({ diff })
  }

  render() {
    const { mode } = this.props
    const { diff } = this.state

    let hours = 0
    let minutes = 0
    let seconds = 0

    if (mode === 'clock') {
      const date = new Date(diff)
      hours = date.getHours()
      minutes = date.getMinutes()
      seconds = date.getSeconds()
    } else {
      // Duration logic for countdown/timer
      const totalSeconds = Math.floor(diff / 1000)
      hours = Math.floor(totalSeconds / 3600)
      minutes = Math.floor((totalSeconds % 3600) / 60)
      seconds = totalSeconds % 60
    }

    return (
      <div className="flip-clock-wrapper">
        <Hours date={hours} />
        <Minutes date={minutes} />
        <Seconds date={seconds} />
      </div>
    )
  }
}

FlipClock.defaultProps = {
  mode: 'clock', // 'clock', 'countdown', 'timer'
  value: new Date()
}
