import React from 'react';
import './App.css';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    }
  }

  CountIncreaseHandler = () => (
    this.setState(
      {
        count: this.state.count + 1,
      }
    )
  )

  CountDecreaseHandler = () => {
    if (this.state.count !== 0) {
      this.setState(
        {
          count: this.state.count - 1,
        }
      )
    }
  }


  CountResetHandler = () => (
    this.setState(
      {
        count: 0,
      }
    )
  )

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            <i className="fa fa-play-circle" aria-hidden="true"></i>
            &nbsp;
            Counter
        </h1>
        </header>

        <div className="counter">
          <div className="count">
            {this.state.count}
          </div>
          <div>
            <button onClick={this.CountIncreaseHandler} className="button btn-green" type="submit"><i className='fa fa-2x fa-plus-circle'></i></button>
            <button onClick={this.CountResetHandler} className="button btn-red" type="submit"><i className='fa fa-2x fa-refresh'></i></button>
            <button onClick={this.CountDecreaseHandler} className="button btn-yellow" type="submit"><i className='fa fa-2x fa-minus-circle'></i></button>
          </div>

        </div>

      </div >
    );

  }

}

export default App;
