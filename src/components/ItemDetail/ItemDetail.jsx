import React, { useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/GlobalProvider'

const ItemDetail = (props) => {

    const {addCarrito} = useContext(CartContext)
    
    const {item} = props

    const {id, title, description, price, stock, image} = item

    const onAdd = (numero) => {
        addCarrito({id, image, title, price, cantidad: numero})
    }

  return (

    <div className=' d-flex align-items-center justify-content-center'>
        <div className='container containerItems' style={{margin: '50px', border: '1px solid rgba(0, 0, 0, 0.175)', padding: '15px', borderRadius: '0.375rem'}}>
            <div className='row' >
                <Link className='col-1' to={`/catalogo`} style={{color: 'black'}}><FontAwesomeIcon icon={faChevronLeft} style={{height: '2rem', cursor: 'pointer'}}/></Link>
                <div className='col-11'></div>
            </div>
            <div className='row'>
                <div className='col-6'>
                    <img src={image} alt="" />
                </div>
                <div className='col-6'>
                    <h1>{title}</h1>
                    <h4>Sinopsis: </h4>
                    <p className='text-left'>{description}</p>
                    <div className='d-flex align-items-center' style={{marginBottom: '15px'}}><h4 style={{marginBottom: '0'}}>Price:</h4> <p style={{marginBottom: '0', marginLeft: '10px'}}>$ {price}</p></div>
                    <div className='d-flex align-items-center' style={{marginBottom: '15px'}}><h4 style={{marginBottom: '0'}}>Stock:</h4> <p style={{marginBottom: '0', marginLeft: '10px'}}> {stock}</p></div>

                    <ItemCount initial={0} stock={stock} onAdd={onAdd} />
                </div>

            </div>
        </div>
    </div>
  )
}

export default ItemDetail
