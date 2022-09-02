import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const GlobalContext = createContext()

function GlobalProvider({children}) {

    let superHeroe = 'superman'
    const [numeros, setNumeros] = useState([1,2,3,4,5])
    const tirarAlerta = () => alert('Hola desde Context')

    return (
        <GlobalContext.Provider value={{superHeroe, numeros, tirarAlerta}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider