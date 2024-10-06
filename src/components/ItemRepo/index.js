import React from 'react';
import { ItemRepoContainer } from './styles';

function ItemRepo(props) {
  const { repo, handleRemoveRepo } = props;

  const handleRemove = () => {
    handleRemoveRepo(repo.id);
  }

  return (
    <ItemRepoContainer>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <a href={repo.html_url} target="_blank" rel="noreferrer" className="">
        Ver respositório
      </a>
      &nbsp;|&nbsp;
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a href="#" onClick={handleRemove} rel="noreferrer" className="remover">
        Remover
      </a>
      <hr />
    </ItemRepoContainer>
  );
}

export default ItemRepo
