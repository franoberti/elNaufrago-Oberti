import React from 'react'
import ItemList from '../../components/ItemList/ItemList'


const ItemListContainer = ({greeting}) => {
  return (
    <>
    <h1 className='titulo p-5'>
        {greeting}
    </h1>
    <div class="container">
      <div class="row">
        <ItemList/>
      </div>
    </div>
  </>
  )
}

export default ItemListContainer
