import { combineReducers } from 'redux';

import questionsReducer from '../reducers/questionsReducer';

const rootReducer = combineReducers({
  questions: questionsReducer,
});

export default rootReducer;
