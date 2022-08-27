import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({item}) => {

    const {id, price, description, title, image, stock} = item

    const onAdd = (numero) => {
        console.log('Se agregaron ' + numero + ' libros al carrito')
      }

  return (
    <div className=' d-flex align-items-center justify-content-center'>
        <div className='container' style={{margin: '50px', border: '1px solid rgba(0, 0, 0, 0.175)', padding: '15px', borderRadius: '0.375rem'}}>
            <div className='row'>
                <div className='col-6'>
                    <img src={image} alt="" />
                </div>
                <div className='col-6'>
                    <h1>{title}</h1>
                    <h5>Sinopsis: </h5>
                    <h5>{description}</h5>
                    <p>Price: {price}</p>
                    <ItemCount initial={0} stock={stock} onAdd={onAdd} />
                </div>

            </div>
        </div>
    </div>
  )
}

export default ItemDetail
