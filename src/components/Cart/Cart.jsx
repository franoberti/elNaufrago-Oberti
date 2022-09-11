import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/GlobalProvider'
import {Link} from 'react-router-dom'
import './Cart.css'

const Cart = () => {

  const {carrito, resetCart, removeItem} = useContext(CartContext)

  const getPrecioTotal = () =>{

    let total = 0

    carrito.forEach(element => {
      total += (element.price*element.cantidad)
    });

    return total
  }
  
  let total
  return (
    <div>
      <h1 className='titulo p-5'>Carrito</h1>
      {carrito.length > 0  ? 
      <>
        <div>
          <div className='d-flex' style={{margin: '20px'}}>
            <div className='col-10'></div>
            <div className='col-2'><button className='btn btn-danger' onClick={resetCart}>Vaciar Carrito</button></div>
          </div>
          <div className='d-flex justify-content-center'>
            <div className='col-6 cartCont'>
              {carrito.map((item)=>
                <div className='cartCont d-flex'>
                  <div className='col-4' style={{padding: '10px'}}>
                    <img src={item.image} style={{height: '200px'}} alt="" />
                  </div>
                  <div className='col-8' style={{padding: '10px'}}>
                    <h4 >{item.title}</h4>
                    <h5> Cantidad: {item.cantidad}</h5>
                    <h5> Precio: ${item.price * item.cantidad}</h5>
                    <button className='btn btn-danger col-6' onClick={() => removeItem(item)}><i class="fa fa-trash-can" onclick="onclickTrash(6)"></i> Eliminar</button>
                  </div>
                </div>
              )}
            </div>
            <div className='col-4 cartCont' style={{padding: '10px'}}>
                <h3>Datos de Compra</h3>
                <input type="text" name="nombre" placeholder="Nombre..." required className='form-control' style={{marginTop: '10px'}}/>
                <input type="text" name="apellido" placeholder="Apellido..." required className='form-control' style={{marginTop: '10px'}}/>
                <input type="email" name="email" placeholder="Email..." required className='form-control' style={{marginTop: '10px'}}/>
                <input type="number" name="telefono" placeholder="Telefono..." required className='form-control' style={{marginTop: '10px'}}/>
                <div className='cartCont' style={{padding: '10px', marginTop: '10px'}}>

                  <h5>PRECIO TOTAL: $ {getPrecioTotal()}</h5>
                  <button className='btn btn-primary'>Finalizar Compra</button>

                </div>
                <Link to={`/catalogo`}><button className='btn btn-secondary' style={{marginTop: '10px'}}>Volver al Catálogo</button></Link>
            </div>
          </div>
          
          
          
        </div>
        
      </>
      :
      <>
      <h2>Carrito Vacio</h2>
      <Link to={`/catalogo`}><button type="button" className="btn btn-outline-secondary">Ver catálogo de productos</button></Link>
      </>
      }
    </div>
  )
}

export default Cart
