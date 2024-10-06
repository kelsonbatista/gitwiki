import React, { useState } from 'react';
import logo from '../../assets/images/github.png';
import Button from '../../components/Button';
import Input from '../../components/Input';
import ItemRepo from '../../components/ItemRepo';
import { api } from '../../services/api';
import { Container, Error } from './styles';

function App() {
  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);

  const handleSearchRepos = async (event) => {
    event.preventDefault();

    try {
      const response = await api.get(`/repos/${currentRepo}`);

      const repoExists = repos.find((repo) => repo.id === response.data.id);
      
      if (repoExists) {
        setError('Repository already added');
      } else {
        setRepos((prev) => [...prev, response.data]);
        setCurrentRepo("");
        setError(null);
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 404) {
          setError('Repository not found');
        } else {
          setError('Error fetching repository');
        }
      } else {
        setError(error);
      }
    }
  };
  

  const handleRemoveRepo = (id) => {
    setRepos((prev) => prev.filter((repo) => repo.id !== id));
  }
  

  return (
    <Container>
      <img src={logo} width={72} height={72} alt="Github logo" />
      <Input
        value={currentRepo}
        onChange={(e) => setCurrentRepo(e.target.value)}
      />
      <Button onClick={handleSearchRepos} />
      <Error>{error && <p>{error}</p>}</Error>
      {repos.map((repo) => (
        <ItemRepo
          repo={repo}
          key={repo.id}
          handleRemoveRepo={handleRemoveRepo}
        />
      ))}
    </Container>
  );
}

export default App;
