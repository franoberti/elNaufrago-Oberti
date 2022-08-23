import React from 'react'
import fb from '../../assets/facebook.svg'
import ig from '../../assets/instagram.svg'
import tw from '../../assets/twitter.svg'

const Footer = () => {
  return (
    <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div className="col-md-4 d-flex align-items-center">
                <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                    <svg className="bi" width="30" height="24"></svg>
                </a>
                <span className="text-muted">© 2022 El Náufrago, Inc</span>
            </div>

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li className="ms-3"><a className="text-muted" href="#"><img src={tw} alt="" width="30" height="30" /></a></li>
                <li className="ms-3"><a className="text-muted" href="#"><img src={ig} alt="" width="30" height="30" /></a></li>
                <li className="ms-3"><a className="text-muted" href="#"><img src={fb} alt="" width="30" height="30" /></a></li>
            </ul>
        </footer>
    </div>
  )
}

export default Footer
