import React from 'react'
import menos from '../../assets/elim.png'
import mas from '../../assets/plus.png'


const ItemCount = (props) => {

    const {initial, stock, onAdd} = props

    const [numero, setNumero] = React.useState(initial)


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
        <div className="card d-flex flex-row align-items-center justify-content-between col-12" style={{width: '', height:'2rem', marginBottom:'10px'}}>
            <a className="sumador" onClick={()=> restador(numero)}> <img src={menos} alt="imagen no encontrada" width="20"/> </a>
            <span className="card-text">{numero}</span>
            <a className="sumador" onClick={()=> sumador(numero, stock)}> <img src={mas} alt="imagen no encontrada" width="20"/> </a>
        </div>
        <button className="btn btn-success col-12" onClick={()=> onAdd(numero)}>Agregar a Carrito</button>
    </>
  )
}

export default ItemCount
