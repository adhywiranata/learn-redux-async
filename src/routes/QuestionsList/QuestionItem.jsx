import React, { PropTypes } from 'react';

import styles from './styles.css';

const QuestionItem = props => (
  <div className={styles.questionItem}>
    <h2>{props.id}. {props.question}</h2>
    <p>{props.description}</p>
  </div>
);

QuestionItem.propTypes = {
  id: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default QuestionItem;
