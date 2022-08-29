import React from 'react'
import logo from '../../assets/logoNaufrago150.svg'
import CartWidget from '../Cart/CartWidget'
import Rutas from './config.json'
import {NavLink} from 'react-router-dom'
import ItemsNav from './config.json'

const Navbar = () => {

    const navBarItems = ["Home", "Catalogo", <CartWidget/>]

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container align-items-center justify-content-center">
                <NavLink to={'/'} style={{textDecoration: 'none'}}>
                    <div className="tituloNav navbar-brand d-flex justify-content-center align-items-center" href="#" style={{cursor: 'pointer'}}>
                        <img src={logo} alt="" width="80" height="50" className="d-inline-block align-text-top" />
                        El Náufrago
                    </div>
                </NavLink>
            </div>
            <div class="input-group container align-items-center justify-content-center">
                <input type="text" class="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button">Buscar</button>
                </div>
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
                        <NavLink to={'/carrito'}><CartWidget/></NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
