import React, { useEffect } from 'react'
import ItemCount from '../../components/ItemCount/ItemCount'
import productos from '../../products/products.json'

const ItemListContainer = ({greeting}) => {

  const onAdd = (numero) => {
    console.log('Se agregaron ' + numero + ' libros al carrito')
  }

  return (
    <>
    <h1 className='titulo p-5'>
        {greeting}
    </h1>
    <div className="container">
      <div className="row">
        {productos.map((item, index)=>(
          <div key={index} className="col">
            <div className="card" style={{width: '18rem', marginTop: '15px'}}>
              <div className="card-body">
                  <img src={item.image} className="card-img-top"></img>
                  <h5 className="card-title pt-3">{item.title}</h5>
                  <ItemCount initial={item.initial} stock={item.stock} onAdd={onAdd}/>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </>
  )
}

export default ItemListContainer

