import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/GlobalProvider'

const Cart = () => {

  const {carrito, resetCart, addCarrito} = useContext(CartContext)




  return (
    <div>
      <h1 className='titulo p-5'>Carrito</h1>
      {carrito.length > 0  ? 
      <>
        <h2>Productos de tu Carrito</h2>
        <ul>
          {carrito.map((item)=>{
            <li>{item.title}</li>
          })}
        </ul>
      </>
      :
      <h2>Carrito Vacio</h2>
      }
      <button onClick={resetCart}>Vaciar Carrito</button>
      <button onClick={() => addCarrito({id: 1, title: "Prueba"})}>Agregar producto</button>
    </div>
  )
}

export default Cart
