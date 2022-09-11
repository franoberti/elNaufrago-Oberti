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

    }

    const removeItem = (producto) => {
        
        setCarrito(carrito.filter(el => el.id !== producto.id))
        
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