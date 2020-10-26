import React, { Component } from 'react'

export default class Overview extends Component {

  render() {
    
    return this.props.tasks.map((item) => (
      <li key={this.props.tasks.indexOf({item})}>{item}</li>      
      
    ))
  }
}
