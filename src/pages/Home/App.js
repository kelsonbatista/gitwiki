import React, { useState } from 'react';
import logo from '../../assets/images/github.png';
import Button from '../../components/Button';
import Input from '../../components/Input';
import ItemRepo from '../../components/ItemRepo';
import { Container } from './styles';

function App() {
  const [repos, setRepos] = useState([]);

  return (
    <Container>
      <img src={logo} width={72} height={72} alt="Github logo" />
      <Input />{repos}<Button />
      <ItemRepo />
    </Container>
  );
}

export default App;
