import React from 'react';
import propTypes from 'prop-types';

const Button = ({ name }) => (
  <button type="button">{name}</button>
);

Button.propTypes = {
  name: propTypes.string.isRequired,
};

export default Button;
