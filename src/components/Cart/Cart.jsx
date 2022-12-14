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
            <div className='col-md-10 col-8'></div>
            <div className='col-md-2 col-3'><button className='btn btn-danger' onClick={resetCart}>Vaciar Carrito</button></div>
          </div>
          <div className='row justify-content-center'>

            <div className='col-md-6 col-11 cartCont containerItems'>
              {carrito.map((item)=>
                <div className='cartCont d-flex item card-bodyItem row'>
                  <div className='col-md-4 col-11' style={{padding: '10px'}}>
                    <img src={item.image} style={{height: '200px'}} alt="" />
                  </div>
                  <div className='col-md-8 col-11' style={{padding: '10px'}}>
                    <h4 >{item.title}</h4>
                    <h5 className='d-flex justify-content-start'> Cantidad: {item.cantidad}</h5>
                    <h5 className='d-flex justify-content-end'> Precio: ${item.price * item.cantidad}</h5>
                    <button className='btn btn-danger col-6' onClick={() => removeItem(item)}><i class="fa fa-trash-can" onclick="onclickTrash(6)"></i> Eliminar</button>
                  </div>
                </div>
              )}
            </div>

            <div className='col-md-4 col-11 cartCont containerItems' style={{padding: '10px'}}>
              <div className='sticky-top'>
                <Form compra={{carrito}} ></Form>
              </div>
            </div>

          </div>
        </div>
      </>
      :
      <div className='d-flex align-items-center justify-content-center'>
        <div className='col-md-6 col-11 containerItems'>
          <h2>Tu carrito est?? vac??o</h2>
          <p className='parrafo'>??No sab??s qu?? comprar? ??Ve a chequear nuestro cat??logo!</p>
          <Link to={`/catalogo`}><button type="button" className="btn btn-outline-secondary">Ver cat??logo de productos</button></Link>
        </div>
      </div>
      
      }
    </div>
  )
}

export default Cart
