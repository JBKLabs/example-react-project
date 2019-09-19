import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ValidationError, withFormHandling } from '@jbk/react-form';

const Input = ({ value, setValue, error }) => {
  const [blurred, setBlurred] = useState(false);

  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={() => setBlurred(true)}
      />
      {error && blurred && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
};

const onFormChange = (value, { regex, defaultErrorMessage }) => {
  if (!value.match(regex)) {
    throw new ValidationError(defaultErrorMessage);
  }
};

Input.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func,
  error: PropTypes.string
};

export default withFormHandling(Input, onFormChange);
