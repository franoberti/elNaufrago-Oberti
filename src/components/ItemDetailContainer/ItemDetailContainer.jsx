import React  from 'react'
import {useParams} from 'react-router-dom'
import productos from '../../products/products.json'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useState } from 'react'
import { useEffect } from 'react'
import db from "../../services"
import { collection, getDocs } from 'firebase/firestore'

const ItemDetailContainer = () => {

    const {idBuscado} = useParams()
    const [item, setItems] = useState({})

    /* useEffect(() => {

        fetch(productos)
        .then((data) => data.json())
        .catch((error) => console.error(error))

        const task = new Promise((resolve) => {
            setTimeout(()=>{
                resolve(productos.find((elemento) => elemento.id == idBuscado))
            }, 500);
        })
        task.then((data) => {
            setItems(data)
        })

    }, [idBuscado]);
 */

    useEffect(() => {

      const getColData = async() => {
        try {
          const data = collection(db, "products")
          const col = await getDocs(data)
          const res = col.docs.map((doc) =>  doc = {id: doc.id,...doc.data()})
          const resItem = res.filter(el => el.id == idBuscado)
          setItems(resItem[0])
        } 
        catch (error) {
          console.log(error)
        }

      }
      getColData()

    }, [])

  return (
    <>
      <ItemDetail item={item}/>
    </>
  )

}

export default ItemDetailContainer
