import React from 'react'
import ItemCount from '../../components/ItemCount/ItemCount'
import productos from '../../products/products.json'

const ItemListContainer = ({greeting}) => {
  return (
    <>
    <h1 className='titulo p-5'>
        {greeting}
    </h1>
    <div class="container">
      <div class="row">
        {productos.map((item, index)=>(
          <ItemCount key={index} title={item.title} initial={item.initial} image={item.image} stock={item.stock}/>
        ))} 
      </div>
    </div>
  </>
  )
}

export default ItemListContainer
