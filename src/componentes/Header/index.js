import React from 'react'
import Nike from "../../images/Nike.jpg";
import { Link } from "react-router-dom";
import logo from '../../images/logotexto.png';

export const Header = () => {
  return (
    <div>
      <header>
        <div className="px-3 py-2 mb-2">
        <div className="container d-flex flex-wrap justify-content-center align-items-center">



        <Link className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none" to='/inicio'>
            <img className="bi me-2" src={logo} alt="logo" width="377" height="80" href="#bootstrap"/>
            </Link>
          <form className="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto w-50 input-lg" height="120" role="search">
            <input type="search" className="form-control" placeholder="Buscar Producto..." aria-label="Search"/>
          </form>

       
      
          <div className="text-end">
          <button type="button" className="btn btn-light"><Link className="nav-link text-dark"  to="/login">Ingresar</Link></button>
            <button type="button" className="btn btn-primary"><Link className="nav-link text-white"  to="/">Registrarme</Link></button>
          </div>
          <div className="cart">
          <box-icon name="cart"></box-icon>
          <span className="item__total">0</span>
          </div>

        </div>
      </div>
      <div className="px-3 py-2 text-bg-primary">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
      
      
            <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
              <li>
                <Link className="nav-link active text-white " to="/inicio"><i className="bi-house-door my-auto mx-2"></i>Inicio</Link>
              </li>

              <li>
              <Link className="nav-link text-white"  to="/productos"><i className="bi-grid my-auto mx-2"></i>Productos</Link>
              </li>

              <li className="nav-item dropdown">
              <a href="#" className="nav-link text-white dropdown-toggle" data-bs-toggle="dropdown">
              <i className="bi bi-grid-3x3-gap my-auto mx-2"></i>
    
                Categorias
              </a>
            </li>

              <li className="nav-item dropdown">
              <a href="#" className="nav-link text-white dropdown-toggle" data-bs-toggle="dropdown">
              <i className="bi bi-tools my-auto mx-2"></i>
    
                Servicios
              </a>
            </li>

              <li>
                <a href="#" className="nav-link text-white">
                <i className="bi bi-emoji-sunglasses my-auto mx-2"></i>
      
                  Nosotros
                </a>
              </li>





            </ul>
            


          </div>




        </div>
      </div>









      </header>
      

      

    </div>

    
  )
}
