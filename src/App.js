import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchDog } from './actionCreators'

class App extends Component {
  render = () => {
    const {dispatch, url }  = this.props
    return (
      <div>
        <button onClick={() => dispatch(fetchDog())}>Show Dog</button>
          {this.props.loading
            ? <p>Loading...</p>
            : this.props.error
              ? <p>Error, try again</p>
              : <p><img src={url} /></p>
           }
      </div>
    )
  }
}

export const ConnectedApp = connect((state) => {
  return state;
})(App);
