import React from 'react'
import ItemList from '../../components/ItemList/ItemList'
import productos from '../../products/products.json'
import { useState } from 'react'
import { useEffect } from 'react'


const ItemListContainer = ({greeting}) => {

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
    <h1 className='titulo p-5'>
        {greeting}
    </h1>
    <div class="container">
      <div class="row">
        <ItemList items={items}/>
      </div>
    </div>
  </>
  )
}

export default ItemListContainer
