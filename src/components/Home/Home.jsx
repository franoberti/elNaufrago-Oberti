import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHelmetSafety } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <div>
        <h1 className='titulo p-5'>Bienvenido a la Librería El Náufrago</h1>
        <h2>Esta seccion se encuentra en Construcción</h2>
        <FontAwesomeIcon icon={faHelmetSafety} style={{width: '150px', height: '150px'}}/>
        <h2>Dirigete al Catálogo</h2>
        <Link className='col-1' to={`/catalogo`} ><button className='btn' style={{border: '1px solid rgba(0, 0, 0, 0.175)'}}>Catálogo</button></Link>
    </div>
  )
}

export default Home
