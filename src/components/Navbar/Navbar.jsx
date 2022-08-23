import React from 'react'
import logo from '../../assets/logoNaufrago150.svg'
import CartWidget from '../Cart/CartWidget'

const Navbar = () => {

    const navBarItems = ["Home", "About Us", "Categorias", "Login", <CartWidget/>]

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container align-items-center justify-content-center">
                <div className="tituloNav navbar-brand d-flex justify-content-center align-items-center" href="#">
                    <img src={logo} alt="" width="80" height="50" className="d-inline-block align-text-top" />
                    El Náufrago
                </div>
            </div>
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse justify-content-center navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        {navBarItems.map((item, index)=>(
                            <a key={index} className="nav-link float-left d-flex align-items-center" href="#" style={{fontSize:'20px !important'}}>{item}</a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
