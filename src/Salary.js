import React, { Component } from 'react';

class Salary extends Component {
  state = {
    month: 0,
    startTime: Date.now(),
    currentTime: Date.now(),
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        currentTime: Date.now(),
      })
    }, 100)
  }

  onChangeMoth = (e) => {
    this.setState({
      month: parseInt(e.target.value, 10),
    })
  }

  render() {
    const { month, startTime, currentTime } = this.state;
    const time = (currentTime - startTime) / 1000;

    return (
      <div>
        <label>月薪</label>
        <input
          type="number"
          value={month}
          onChange={this.onChangeMoth}
        />
        <br />
        <label>時薪</label>
        <input type="number" value={month / 240} />
        <br />
        <label>分薪</label>
        <input type="number" value={month / 240 / 60} />
        <br />
        <label>秒薪</label>
        <input type="number" value={month / 240 / 60 / 60} />
        <br />
        <label>經過時間</label>
        <span>{time.toFixed(1)}</span>
        <br />
        <label>偷取薪水</label>
        <span>{((time * month) / 240 / 60 / 60).toFixed(1)}</span>
      </div>
    );
  }
}

export default Salary;