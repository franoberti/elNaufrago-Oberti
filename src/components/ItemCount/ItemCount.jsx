import React from 'react'

const ItemCount = (props) => {

    const {title, initial, image, stock} = props

    const [numero, setNumero] = React.useState(initial)
    const [imagen, setImagen] = React.useState(image)
    const [stoc, setStoc] = React.useState(stock)



  return (
        <div className="col">
            <div className="card" style={{width: '18rem', marginTop: '15px'}}>
                <div className="card-body">
                    <img src={imagen} class="card-img-top"></img>
                    <h5 className="card-title pt-3">{title}</h5>
                    <div className="card d-flex flex-row align-items-center justify-content-between" style={{width: '16rem', height:'2rem', marginBottom:'10px'}}>
                        <a className="sumador" onClick={()=>{
                            if (numero == 0){
                                setNumero(numero)
                            }
                            else{
                                setNumero(numero - 1)
                            }
                        }
                        }>—</a>
                        <span className="card-text">{numero}</span>
                        <a className="sumador" onClick={()=>{
                            if (numero == stoc){
                                setNumero(numero)
                            }
                            else{
                                setNumero(numero + 1)
                            }
                        }
                        }>+</a>
                    </div>
                    <button className="btn btn-success">Agregar a Carrito</button>
                </div>
            </div>
        </div>
  )
}

export default ItemCount
