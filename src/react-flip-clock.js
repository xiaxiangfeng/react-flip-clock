import React from 'react'
import Seconds from './seconds'
import Minutes from './minutes'
import Hours from './hours'
import '@/index.scss'

export default class FlipClock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: new Date()
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        time: new Date()
      })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    const { time } = this.state
    const hours = time.getHours()
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()

    return (
      <div className="flip-clock-wrapper">
        <Hours date={hours} />
        <Minutes date={minutes} />
        <Seconds date={seconds} />
      </div>
    )
  }
}
