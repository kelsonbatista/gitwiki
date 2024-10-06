import React from 'react';
import { ItemRepoContainer } from './styles';

function ItemRepo(props) {
  const { repo } = props;
  return (
    <ItemRepoContainer>
      <h3>{repo.name}</h3>
      <p>{ repo.full_name }</p>
      <a href={repo.html_url} target="_blank" rel="noreferrer" className=''>Ver respositório</a>&nbsp;|&nbsp;
      <a href="#" className='remover'>Remover</a>
      <hr />
    </ItemRepoContainer>
  )
}

export default ItemRepo
