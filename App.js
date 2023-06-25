import React, { Component } from "react";

class App extends Component {
  render () {
    return (
      <div>
        <button onClick={() => this.props.dispatch(fetchDog())}>Show Dog</button>
          {this.props.loading
            ? <p>Loading...</p>
            : this.props.error
              ? <p>Error, try again</p>
              : <p><img src={this.props.url} /></p>
           }
      </div>
    )
  }
}

export default App;
