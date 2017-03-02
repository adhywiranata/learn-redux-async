export const fetchQuestionsSuccess = questions => ({
  type: 'FETCH_QUESTIONS_SUCCESS',
  payload: questions,
})

export const fetchQuestions = () => {
  return (dispatch) => {
    setTimeout(() => {
      fetch('http://localhost:1234/questions')
        .then(res => res.json())
        .then(questions => dispatch(fetchQuestionsSuccess(questions)))
      }
    , 3000);

  }
}
