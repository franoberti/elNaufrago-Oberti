import React  from 'react'
import {useParams} from 'react-router-dom'
import productos from '../../products/products.json'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useState } from 'react'
import { useEffect } from 'react'

const ItemDetailContainer = () => {



    const {id} = useParams()

    const [item, setItems] = useState({})

    useEffect(() => {

        fetch(productos)
        .then((data) => data.json())
        .catch((error) => console.error(error))

        new Promise((resolve) => {
            setTimeout(()=>{
                resolve(productos.find((elemento) => elemento.id == id))
            }, 2000);
        })
        .then((data) => {
            setItems(data)
        })

    }, [id]);

    
  return (
    <>
      <ItemDetail item={item}/>
    </>
  )

}

export default ItemDetailContainer
