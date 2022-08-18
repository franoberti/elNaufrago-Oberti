import React from 'react'
import productos from '../../products/products.json'
import Item from '../../components/Item/Item'
import Spinner from '../../components/Spinner/Spinner'
import { useState } from 'react'
import { useEffect } from 'react'

const ItemList = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        const task = new Promise ((resolve, rejected) =>{
            setTimeout(()=>{
                resolve(productos)
            }, 2000);
        })

        task.then(resultado => setItems(resultado))
        return () => {
        };

    }, []);

    return (
        <>
            {items.length < 1 ? <Spinner/> : items.map((item, index)=>(<Item key={index} title={item.title} image={item.image} stock={item.stock} initial={item.initial}/>))}
        </>
    )
}

export default ItemList
