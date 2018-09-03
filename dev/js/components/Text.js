import React, { Component } from 'react'
import HOC from './../containers/HOC';

class Text extends Component {
  render() {
    return (
      <div>
          text render
      </div>
    )
  }
}

export default HOC(Text)