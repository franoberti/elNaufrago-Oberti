import React, { useState } from 'react'
import ItemCount from '../../components/ItemCount/ItemCount'


const Item = (props) => {


    const {title, image, stock, initial} = props


    return (
        
        <div className="col d-flex justify-content-center">
            <div className="card" style={{width: '16rem', marginTop: '2rem'}}>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5> 
                    <img src={image} class="card-img-top mb-3" style={{width: '10rem'}}></img>
                    <button type="button" class="btn btn-outline-secondary col-12">Ver detalle del producto</button>
                    <hr />
                    <p style={{margin: 0}} >Stock: {stock}</p>
                </div>
            </div>
        </div>
    )
}

export default Item
