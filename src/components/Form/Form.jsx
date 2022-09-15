import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/GlobalProvider'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import db from '../../services'


const Form = (props) => {

    const {compra} = props
    const {carrito, resetCart, removeItem} = useContext(CartContext)

    const getPrecioTotal = () =>{

        let total = 0
    
        carrito.forEach(element => {
          total += (element.price*element.cantidad)
        });
    
        return total
      }

      const [formulario, setFormulario] = useState({
        buyer: {
            email: '',
            nombre: '',
            apellido: '',
            telefono: ''
        },
        total: getPrecioTotal(),
        items: compra
    })

    const { buyer: {email, nombre, apellido, telefono} } = formulario

    const handleChange = (e) => {

        const {name, value} = e.target

        setFormulario({
            ...formulario,
            buyer : {
                ...formulario.buyer,
                [name]: value
            }
        })

        console.log(formulario)
    }

    const registrarCompra = async (compra) =>{

        try {
            const col = collection(db, "compras")
            const generarCompra = await addDoc(col, compra)
            console.log(generarCompra.id)
            alert("La compra se finalizo con éxito")

        } catch (error) {
            alert(error)
        }
    }

  return (
    <>
        <h3 >Datos de Compra</h3>

        <input 
            type="text" 
            name="nombre" 
            placeholder="Nombre..." 
            required className='form-control' 
            style={{marginTop: '10px'}}
            value={nombre}
            onChange={handleChange}
        />

        <input 
            type="text" 
            name="apellido" 
            placeholder="Apellido..." 
            required className='form-control' 
            style={{marginTop: '10px'}}
            value={apellido}
            onChange={handleChange}
        />

        <input 
            type="email" 
            name="email" 
            placeholder="Email..." 
            required className='form-control' 
            style={{marginTop: '10px'}}
            value={email}
            onChange={handleChange}
        />

        <input 
            type="number" 
            name="telefono" 
            placeholder="Telefono..." 
            required className='form-control' 
            style={{marginTop: '10px'}}
            value={telefono}
            onChange={handleChange}
        />

        <div className='cartCont' style={{padding: '10px', marginTop: '10px'}}>
            <h5>PRECIO TOTAL: $ {getPrecioTotal()}</h5>
            <button onClick={() => registrarCompra(formulario)} className='btn btn-primary'>Finalizar Compra</button>
        </div>
        <Link to={`/catalogo`}><button className='btn btn-secondary' style={{marginTop: '10px'}}>Volver al Catálogo</button></Link>
    </>
  )
}

export default Form
