import React from 'react'
import logo from '../../logoNaufrago150.svg'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container">
            <div class="navbar-brand d-flex justify-content-center align-items-center" href="#">
                <img src={logo} alt="" width="80" height="50" class="d-inline-block align-text-top"/>
                El Náufrago
            </div>
        </div>
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-link active float-left" aria-current="page" href="#">Home</a>
                    <a class="nav-link float-left" href="#">About Us</a>
                    <a class="nav-link float-left" href="#">Categorias</a>
                    <a class="nav-link float-left" href="#">Login</a>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
