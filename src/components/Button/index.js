import React from 'react';
import { ButtonContainer } from './styles';

function Button(props) {
  const { onClick } = props;

  return (
    <ButtonContainer onClick={onClick}>
      Search
    </ButtonContainer>
  )
}

export default Button
