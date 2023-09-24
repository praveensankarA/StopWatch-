// Write your code here

// <<- Murugan Thunnai->>

import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {isTimerRunning: false, seconds: 0, minutes: 0}

  clearTimeInterval = () => {
    this.setState(prevState => ({isTimerRunning: false}))
    clearInterval(this.intervalId)
  }

  componentWillUnMount = () => {
    this.clearInterval()
  }

  onStartFunction = () => {
    const {isTimerRunning, seconds, minutes} = this.state
    this.setState(prevState => ({isTimerRunning: !prevState.isTimerRunning}))

    if (!isTimerRunning) {
      this.intervalId = setInterval(() => {
        this.setState(prevState => ({seconds: prevState.seconds + 1}))
      }, 1000)
    }
  }

  getTime = () => {
    const {isTimerRunning, seconds, minutes} = this.state

    const minute = Math.floor(seconds / 60)
    const second = Math.floor(seconds % 60)
    const minuteStr = minute > 9 ? minute : `0${minute}`
    const secondStr = second > 9 ? second : `0${second}`

    return `${minuteStr}:${secondStr}`
  }

  resetFun = () => {
    this.setState({seconds: 0, minutes: 0})
    this.clearTimeInterval()
  }

  render() {
    const {isTimerRunning, seconds, minutes} = this.state
    return (
      <div className="timer-app-main-container">
        <h1 className="timer-app-main-head">Stopwatch</h1>
        <div className="time-card-container">
          <div className="watch-logo-head-container ">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png "
              alt="stopwatch"
              className="watch-logo"
            />
            <h1 className="timer-card-heading">Timer</h1>
          </div>
          <h1 className="time-ele">{this.getTime()}</h1>
          <div className="btn-container">
            <button
              onClick={this.onStartFunction}
              type="button"
              disabled={isTimerRunning}
              className="timer-btn start-btn"
            >
              Start
            </button>
            <button
              type="button"
              onClick={this.clearTimeInterval}
              className="timer-btn stop-btn"
            >
              Stop
            </button>
            <button
              type="button"
              onClick={this.resetFun}
              className="timer-btn reset-btn"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
