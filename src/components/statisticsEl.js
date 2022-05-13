import React from 'react';
import PropTypes from 'prop-types';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  const nullFeedback = 0;
  return (
    <div>
      <h2>Statistics</h2>
      {total === nullFeedback ? (
        <p>There is no feedback</p>
      ) : (
        <ul>
          <li>Good: {good}</li>
          <li>Neutrel: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>
            Total:
            {total}
          </li>
          <li>
            Positive feetback:
            {positivePercentage}%
          </li>
        </ul>
      )}
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};