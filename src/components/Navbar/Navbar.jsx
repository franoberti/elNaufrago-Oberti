import React from 'react'
import logo from '../../assets/logoNaufrago150.svg'
import CartWidget from '../Cart/CartWidget'
import {NavLink} from 'react-router-dom'
import ItemsNav from './config.json'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import './style.css'

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navegador">
            <div className="container align-items-center justify-content-center">
                <NavLink to={'/'} style={{textDecoration: 'none'}}>
                    <div className="tituloNav navbar-brand d-flex justify-content-center align-items-center" href="#" style={{cursor: 'pointer'}}>
                        <img src={logo} alt="" width="80" height="50" className="d-inline-block align-text-top" />
                        El Náufrago
                    </div>
                </NavLink>
            </div>
            <div className="input-group container align-items-center justify-content-center">
                <input type="text" className="buscador" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                <button className="nav-search-btn" type="button"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
            </div>
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse justify-content-center navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        {ItemsNav.routes.map((item, index)=>(
                            <NavLink key={index} className="nav-link float-left d-flex align-items-center" to={item.to} style={{fontSize:'20px !important'}}>{item.label}</NavLink>
                        ))}
                        <Link to={'/carrito'} className="nav-link float-left d-flex align-items-center"><CartWidget/></Link>
                        
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
