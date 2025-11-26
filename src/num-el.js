import React from 'react'

export default class NumEl extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      prevValue: props.value
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (props.value !== state.value) {
      return {
        prevValue: state.value,
        value: props.value
      }
    }
    return null
  }

  render() {
    const { type, num } = this.props
    const { value, prevValue } = this.state
    const li = []

    for (var i = 0; i < num; ++i) {
      let className = ''
      if (i === value) {
        className = 'flip-clock-active'
      } else if (i === prevValue && value !== prevValue) {
        className = 'flip-clock-before'
      }

      li.push(
        <li key={i} className={className}>
          <a href="#">
            <div className="up">
              <div className="shadow"></div>
              <div className="inn">{i}</div>
            </div>
            <div className="down">
              <div className="shadow"></div>
              <div className="inn">{i}</div>
            </div>
          </a>
        </li>
      )
    }

    return (
      <ul className={type}>
        {li}
      </ul>
    )
  }
}
