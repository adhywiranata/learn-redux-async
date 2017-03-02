const initialState = [];

const questionsReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_QUESTIONS_SUCCESS':
      return action.payload;
    default:
      return state;
  }
}

export default questionsReducer;
