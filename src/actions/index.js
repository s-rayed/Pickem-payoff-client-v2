import axios from 'axios';
import { browserHistory } from 'react-router';

const API_URL = 'http://localhost:3090';

export function signinUser({ email, password }) {

  return function(dispatch) {
    axios.post(`${API_URL}/signin`, { email, password })
      .then(response => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
        borswerHistory.push('/feature');
      });
      .catch(() => {
        dispatch(authError('Bad login info'));
      });
  }
  // submit email, pwd to server
  // if req good, update state, user auth
  // save jwt token
  // redirect to route
  // if req bad, show error
}