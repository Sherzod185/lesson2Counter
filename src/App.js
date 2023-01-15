import React from "react";
class App extends React.Component {
  state = {
    count: 0,
  };
  changeOne = () => { this.setState({ count: this.state.count + 1,});};
  reset = () => { this.setState({count: 0,});};
  deleteOne = () => {this.setState({count: this.state.count - 1});};

  render() {
    return (
      <div className="counter">
        <h1 className="title">Counter</h1>
        <span className="count">{this.state.count}</span>
        <div className="buttonBlock">
          <button className="btn1" onClick={this.deleteOne}>
            Delete-1
          </button>
          <button className="btn2" onClick={this.reset}>
            Reset
          </button>
          <button className="btn3" onClick={this.changeOne}>
            ADD+1
          </button>
        </div>
      </div>
    );
  }
}
export default App;
