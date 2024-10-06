import React from 'react'
import { ItemRepoContainer } from './styles'

function ItemRepo() {
  return (
    <ItemRepoContainer>
      <h3>Teste</h3>
      <p>testeteste</p>
      <a href="#" className=''>Ver respositório</a>&nbsp;|&nbsp;
      <a href="#" className='remover'>Remover</a>
      <hr />
    </ItemRepoContainer>
  )
}

export default ItemRepo
