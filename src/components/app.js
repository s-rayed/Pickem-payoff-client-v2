import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="mainBody">
          {this.props.children}
        </div>
      </div>
    );
  }
}
