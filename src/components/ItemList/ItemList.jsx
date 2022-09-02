import React from 'react'
import Item from '../../components/Item/Item'
import Spinner from '../../components/Spinner/Spinner'


const ItemList = (props) => {

    const {items} = props

    return (
        <>
            {items.length < 1 ? <Spinner/> : items.map((item, index)=>(<Item key={index} id={item.id} title={item.title} image={item.image} stock={item.stock} initial={item.initial}/>))}
        </>
    )
}

export default ItemList
