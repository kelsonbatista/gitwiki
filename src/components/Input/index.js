import React from 'react';
import { InputContainer } from './styles';

function Input(props) {
  const {value, onChange} = props;

  return (
    <InputContainer>
      <input value={value} onChange={onChange}/>
    </InputContainer>
  )
}

export default Input
