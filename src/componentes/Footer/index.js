import logo1 from '../../images/whatsapp.svg';
import logo2 from '../../images/facebook.svg';
import logo3 from '../../images/youtube.svg';

export const Footer = ()=>{
    return (

<div className="container">
  <footer className="py-5">
    <div className="row">
      <div className="col-6 col-md-2 mb-3">
        <h5>Compunort</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Av. Javier Prado 530 - Lima</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">993886144</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">936251478</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Lun - Sab 8:00am - 5:00pm</a></li>
        </ul>
      </div>

      <div className="col-6 col-md-2 mb-3">
      <h5>Productos</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Laptops</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Computadoras</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Impresoras</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Consumibles</a></li>
        </ul>
      </div>

      <div className="col-6 col-md-2 mb-3">
      <h5>Servicios</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Soporte</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Mantenimiento</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Ensamblaje</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Ventas e Instalacion</a></li>
        </ul>
      </div>

      <div className="col-md-5 offset-md-1 mb-3">
        <form>
          <h5>Subscribete para más noticias</h5>
          <p>Entérate de lo nuevo y emocionante de nosotros.</p>
          <div className="d-flex flex-column flex-sm-row w-100 gap-2">
            <label for="newsletter1" className="visually-hidden">Correo</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Correo Electrónico"/>
            <button className="btn btn-primary" type="button">Suscribete</button>
          </div>
        </form>
      </div>
    </div>

    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <p>© 2022 Compunort, Todos los Derechos Reservados.</p>
      <ul className="list-unstyled d-flex">
        <li className="ms-3"><a className="link-dark" href="https://api.whatsapp.com/send?phone=993886144"><img src={logo1} alt="logo" width="36" height="36"/></a></li>
        <li className="ms-3"><a className="link-dark" href="https://www.youtube.com/"><img src={logo2} alt="logo" width="36" height="36"/></a></li>
        <li className="ms-3"><a className="link-dark" href="https://www.youtube.com/"><img src={logo3} alt="logo" width="36" height="36"/></a></li>
      </ul>
    </div>
  </footer>
</div>


      );
    }
