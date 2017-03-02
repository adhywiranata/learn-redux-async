import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import QuestionItem from './QuestionItem';
import { fetchQuestions } from '../../actions';
import styles from './styles.css';
import catGif from './animal.gif';

class QuestionsList extends Component {

  componentDidMount() {
    this.props.fetchQuestions();
  }

  render() {
    return (
    <div className={styles.questionsList}>
      { this.props.questions.length === 0 ? <img src={catGif} alt="loading" /> : true }
      { this.props.questions.map(item => (<QuestionItem key={item.id} {...item} />)) }
    </div>
    );
  }
};

const mapStateToProps = state => ({
  questions: state.questions
});

const mapDispatchToProps = dispatch => ({
  fetchQuestions: () => dispatch(fetchQuestions())
});

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({ fetchQuestions }, dispatch);
// }

// QuestionsList.propTypes = {
//   questions: PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     question: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//   }).isRequired,
//   fetchQuestions: PropTypes.func.isRequired,
// }

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsList);
