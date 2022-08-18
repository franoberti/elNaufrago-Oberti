import React from 'react'
import menos from '../../assets/elim.png'
import mas from '../../assets/plus.png'


const ItemCount = (props) => {

    const {initial, stock} = props

    const [numero, setNumero] = React.useState(initial)
    const [stoc, setStoc] = React.useState(stock)


    const restador = (n) => {
        if (n == 0){
            setNumero(n)
        }
        else{
            setNumero(n - 1)
        }
    }

    const sumador = (n, s) => {
        if (n == s){
            setNumero(n)
        }
        else{
            setNumero(n + 1)
        }
    }


  return (
    <>
        <a className="sumador" onClick={()=> restador(numero)}> <img src={menos} alt="imagen no encontrada" width="20"/> </a>
        <span className="card-text">{numero}</span>
        <a className="sumador" onClick={()=> sumador(numero, stoc)}> <img src={mas} alt="imagen no encontrada" width="20"/> </a>
    </>
  )
}

export default ItemCount
