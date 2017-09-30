import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

const rootReducer = combineReducers({
  state: (state = {}) => state,
  form: form
});

export default rootReducer;
