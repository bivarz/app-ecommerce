/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useField } from '@unform/core';
import { Content } from './styles';

export default function Input({ name, ...rest }) {
  const inputRef = useRef(null);

  const { fieldName, defaultValue, registerField, error } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Content>
      {!error ? (
        <input ref={inputRef} defaultValue={defaultValue} {...rest} />
      ) : (
          <>
            <input
              ref={inputRef}
              defaultValue={defaultValue}
              {...rest}
              className="focused"
            />
            <span className="erro_msg">{error}</span>
          </>
        )}
    </Content>
  );
}
Input.propTypes = {
  name: PropTypes.string.isRequired,
};
