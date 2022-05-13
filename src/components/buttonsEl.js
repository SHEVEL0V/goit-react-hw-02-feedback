import React from 'react';
import PropTypes from 'prop-types';
import s from './style.module.css';

export default function FeedbackOptions({
  options,
  onLeaveFeedback,
}) {
  return (
    <div className={s.thumb}>
      {options.map(el => {
        const { id, name } = el;
        return (
          <button
            key={id}
            className={s.button}
            name={name}
            onClick={e => onLeaveFeedback(e.currentTarget.name)}
          >
            {name}
          </button>
        );
      })}
    </div>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
