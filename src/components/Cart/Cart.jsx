import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/GlobalProvider'
import {Link} from 'react-router-dom'
import Form from '../Form/Form'
import './Cart.css'

const Cart = () => {

  const {carrito, resetCart, removeItem} = useContext(CartContext)

  return (
    <div>
      <h1 className='titulo p-5'>Carrito de Compras</h1>
      {carrito.length > 0  ? 
      <>
        <div>
          <div className='d-flex' style={{margin: '20px'}}>
            <div className='col-10'></div>
            <div className='col-2'><button className='btn btn-danger' onClick={resetCart}>Vaciar Carrito</button></div>
          </div>
          <div className='d-flex justify-content-center'>
            <div className='col-6 cartCont containerItems'>
              {carrito.map((item)=>
                <div className='cartCont d-flex item card-bodyItem'>
                  <div className='col-4' style={{padding: '10px'}}>
                    <img src={item.image} style={{height: '200px'}} alt="" />
                  </div>
                  <div className='col-8' style={{padding: '10px'}}>
                    <h4 >{item.title}</h4>
                    <h5 className='d-flex justify-content-start'> Cantidad: {item.cantidad}</h5>
                    <h5 className='d-flex justify-content-end'> Precio: ${item.price * item.cantidad}</h5>
                    <button className='btn btn-danger col-6' onClick={() => removeItem(item)}><i class="fa fa-trash-can" onclick="onclickTrash(6)"></i> Eliminar</button>
                  </div>
                </div>
              )}
            </div>

            <div className='col-4 cartCont containerItems' style={{padding: '10px'}}>
              <div className='sticky-top'>
                <Form compra={{carrito}} ></Form>
              </div>
            </div>
          </div>
        </div>
      </>
      :
      <div className='d-flex align-items-center justify-content-center'>
        <div className='col-6 containerItems'>
          <h2>Tu carrito está vacío</h2>
          <p className='parrafo'>¿No sabés qué comprar? ¡Ve a chequear nuestro catálogo!</p>
          <Link to={`/catalogo`}><button type="button" className="btn btn-outline-secondary">Ver catálogo de productos</button></Link>
        </div>
      </div>
      
      }
    </div>
  )
}

export default Cart
