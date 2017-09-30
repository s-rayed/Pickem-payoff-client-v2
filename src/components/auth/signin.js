import React, { Component } from 'react';

class Signin extends Component {
  constructor(props) {
    super(props);

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit({ email, password }) {
    console.log(email, password);
    // login here
  }

  render() {
    const { handleSubmit, fields: { email, password } } = this.props; 
    return(
      <form onSubmit={this.handleFormSubmit}>
        <fieldset>
          <label>Email:</label>
          <input { ...email } /><br />
          <label>Password:</label>
          <input { ...password }/><br/>
        </fieldset>
        <button action="submit">Sign In</button>
      </form>
    );
  }
}