import React, { Component } from 'react';
import * as actions from '../../actions';
import { reduxForm } from 'redux-form';

class Signin extends Component {
  constructor(props) {
    super(props);

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit({ email, password }) {
    console.log(email, password);
    // login here
    this.props.signinUser({ email, password });
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

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
}, mapStateToProps, actions)(Signin);