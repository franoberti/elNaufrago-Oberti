import React from 'react'
import ItemList from '../../components/ItemList/ItemList'
import productos from '../../products/products.json'
import { useState } from 'react'
import { useEffect } from 'react'
import db from "../../services"
import { collection, getDocs } from 'firebase/firestore'
import './styles.css'


const ItemListContainer = ({greeting}) => {

  const [items, setItems] = useState([])

   /*  useEffect(() => {
        const task = new Promise ((resolve, rejected) =>{
            setTimeout(()=>{
                resolve(productos)
            }, 500);
        })

        task.then(resultado => setItems(resultado))
        return () => {
        };

    }, []); */

    useEffect(() => {
      const getColData = async() => {
        try {
          const data = collection(db, "products")
          const col = await getDocs(data)
          const res = col.docs.map((doc) =>  doc = {id: doc.id,...doc.data()})
          setItems(res)
          console.log(res)
        } 
        catch (error) {
          console.log(error)
        }
      }
      getColData()
    }, [])

  return (
    <>
      <h1 className='titulo p-5'>
          {greeting}
      </h1>
      <div className="container">
        <div className="row">
          <ItemList items={items}/>
        </div>
      </div>
    </>
  )
}

export default ItemListContainer