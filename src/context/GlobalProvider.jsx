import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const CartContext = createContext()

function GlobalProvider({children}) {

    const [carrito, setCarrito] = useState([])

    const addCarrito = (producto) => {

        let existe = false
        carrito.forEach(element => {
            if (element.id === producto.id){
                existe = true
                element.cantidad += producto.cantidad
            }
        });

        if (existe == false) {
            setCarrito([...carrito, producto])
        }

        console.log(carrito)
    }

    const removeItem = (producto) => {

        let idAEliminar
        let i = 0
        carrito.forEach(chocolate => {
            chocolate.id === producto.id && (idAEliminar = i)
            i++
        })

        carrito.splice(idAEliminar, 1)
    }

    const resetCart = () => {
        setCarrito([])
    }

    return (
        <CartContext.Provider value={
            {
                carrito,
                addCarrito,
                removeItem,
                resetCart
            }
            }>
            {children}
        </CartContext.Provider>
    )
}

export default GlobalProvider