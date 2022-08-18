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
          <div className="col">
            <div className="card" style={{width: '18rem', marginTop: '15px'}}>
              <div className="card-body">
                  <img src={item.image} class="card-img-top"></img>
                  <h5 className="card-title pt-3">{item.title}</h5>
                  <div className="card d-flex flex-row align-items-center justify-content-between" style={{width: '16rem', height:'2rem', marginBottom:'10px'}}>
                      <ItemCount key={index} initial={item.initial} stock={item.stock}/>
                  </div>
                  <button className="btn btn-success">Agregar a Carrito</button>
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



//<ItemCount key={index} title={item.title} initial={item.initial} image={item.image} stock={item.stock}/>