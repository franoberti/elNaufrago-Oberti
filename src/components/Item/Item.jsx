import React from 'react'
import {Link} from 'react-router-dom'
import './styles.css'

const Item = (props) => {

    const {id, title, image, stock} = props

    let stoc
    if(stock === 0 ){
        stoc =  <>
                    <p style={{margin: 0, color: 'red'}} >Out of Stock</p>
                </>
    }
    else{
        stoc = <p style={{margin: 0}} >Stock: {stock}</p>
    }

    return (
        
        <div className="col d-flex justify-content-center item bordeItem">
            <div className="card" style={{width: '16rem', marginTop: '2rem'}}>
                <div className="card-body card-bodyItem">
                    <h5 className="card-title">{title}</h5> 
                    <img src={image} className="card-img-top mb-3" style={{width: '10rem'}} alt=""></img>
                    <Link to={`/item/${id}`}><button type="button" className="btn btn-outline-secondary col-12">Ver detalle del producto</button></Link>
                    <hr />
                    {stoc}
                </div>
            </div>
        </div>
    )
}

export default Item
