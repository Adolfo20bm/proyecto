import React from 'react';
import logo1 from "../../images/inicio02.jpg";
import logo2 from "../../images/inicio01.jpg";
import logo3 from "../../images/inicio03.jpg";
import ajustes from "../../images/ajustes.svg";
import pc from "../../images/PC.png";
import {Link} from "react-router-dom";


export const Inicio = () => {
  return (
<div>
    <div id="carouselExampleDark" className="carousel carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src={logo1} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">

      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={logo2} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      
      </div>
    </div>
    <div className="carousel-item">
      <img src={logo3} className="d-block w-100" width="120" alt="..."/>
      <div className="carousel-caption d-none d-md-block">

      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<div>
        <section className="px-2 py-3 row justify-content-arround text-center" id="secService">
          <h2 className="col-12 display-3 text-capitalize mb-3">Servicios</h2>
          <article className="col-10 col-md-10 col-lg-4 bg-white rounded shadow p-3 fw-light">
            <img src={ajustes} alt="icono1" className="bg-primary bg-gradient d-inline-bloc rounded-circle icon-service" />
            <h3 className="text-capitalize">
              Soporte Tecnico
            </h3>
            <p className="text-muted">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores quos consectetur cumque et autem tenetur commodi deserunt corporis, quis quidem dolorem illo, incidunt odit nihil, exercitationem eius. Facilis, est illo.
            </p>
            <a href="#" className="btn btn-outline-primary">Ver más</a>
          </article>

          <article className="col-10 col-md-10 col-lg-4 bg-white rounded shadow p-3 fw-light">
            <img src={ajustes} alt="icono1" className="bg-primary bg-gradient d-inline-bloc rounded-circle icon-service" />
            <h3 className="text-capitalize">
              Soporte Tecnico
            </h3>
            <p className="text-muted">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores quos consectetur cumque et autem tenetur commodi deserunt corporis, quis quidem dolorem illo, incidunt odit nihil, exercitationem eius. Facilis, est illo.
            </p>
            <a href="#" className="btn btn-outline-primary">Ver más</a>
          </article>

          <article className="col-10 col-md-10 col-lg-4 bg-white rounded shadow p-3 fw-light">
            <img src={ajustes} alt="icono1" className="bg-primary bg-gradient d-inline-bloc rounded-circle icon-service" />
            <h3 className="text-capitalize">
              Soporte Tecnico
            </h3>
            <p className="text-muted">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores quos consectetur cumque et autem tenetur commodi deserunt corporis, quis quidem dolorem illo, incidunt odit nihil, exercitationem eius. Facilis, est illo.
            </p>
            <a href="#" className="btn btn-outline-primary">Ver más</a>
          </article>

        </section>

</div>
<div>
<section class="project-area">
<div class="container">
    <div class="project-title pb-6">

        <h1 class="col-12 display-3 text-capitalize mb-3 text-uppercase title-h1 text-center">Lo mas Vendido</h1>
    </div>

    <div class="row grid">
        <div class="col-lg-4 col-md-6 col-sm-12 element-item latest">
            <div class="our-project">
                <div class="img">
                    <a class="test-popup-link" href="./img/portfolio/p1.jpg">
                    <img src={pc}  alt="portfolio-9" class="img-fluid"/>
                    </a>
                </div>
                <div class="title py-4">
                    <h4 class="text-uppercase">Laptops</h4>
                    
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 element-item popular">
            <div class="our-project">
                <div class="img">
                    <a class="test-popup-link" href="./img/portfolio/p2.jpg">
                    <img src={pc}  alt="portfolio-9" class="img-fluid"/>
                    </a>
                </div>
                <div class="title py-4">
                    <h4 class="text-uppercase">Monitores</h4>
                    
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 element-item popular">
            <div class="our-project">
                <div class="img">
                    <a class="test-popup-link" href="./img/portfolio/p3.jpg">
                    <img src={pc}  alt="portfolio-9" class="img-fluid"/>
                    </a>
                </div>
                <div class="title py-4">
                    <h4 class="text-uppercase">Discos Duros</h4>
                   
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 element-item latest">
            <div class="our-project">
                <div class="img">
                    <a class="test-popup-link" href="./img/portfolio/p1.jpg">
                    <img src={pc}  alt="portfolio-9" class="img-fluid"/>
                    </a>
                </div>
                <div class="title py-4">
                    <h4 class="text-uppercase">Laptops</h4>
                    
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 element-item popular">
            <div class="our-project">
                <div class="img">
                    <a class="test-popup-link" href="./img/portfolio/p2.jpg">
                    <img src={pc}  alt="portfolio-9" class="img-fluid"/>
                    </a>
                </div>
                <div class="title py-4">
                    <h4 class="text-uppercase">Monitores</h4>
                    
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 element-item popular">
            <div class="our-project">
                <div class="img">
                    <a class="test-popup-link" href="./img/portfolio/p3.jpg">
                    <img src={pc}  alt="portfolio-9" class="img-fluid"/>
                    </a>
                </div>
                <div class="title py-4">
                    <h4 class="text-uppercase">Discos Duros</h4>
                   
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 element-item latest">
            <div class="our-project">
                <div class="img">
                    <a class="test-popup-link" href="./img/portfolio/p1.jpg">
                    <img src={pc}  alt="portfolio-9" class="img-fluid"/>
                    </a>
                </div>
                <div class="title py-4">
                    <h4 class="text-uppercase">Laptops</h4>
                    
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 element-item popular">
            <div class="our-project">
                <div class="img">
                    <a class="test-popup-link" href="./img/portfolio/p2.jpg">
                    <img src={pc}  alt="portfolio-9" class="img-fluid"/>
                    </a>
                </div>
                <div class="title py-4">
                    <h4 class="text-uppercase">Monitores</h4>
                    
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 element-item popular">
            <div class="our-project">
                <div class="img">
                    <a class="test-popup-link" href="./img/portfolio/p3.jpg">
                    <img src={pc}  alt="portfolio-9" class="img-fluid"/>
                    </a>
                </div>
                <div class="title py-4">
                    <h4 class="text-uppercase">Discos Duros</h4>
                   
                </div>
            </div>
        </div>
 
    </div>
</div>
</section>

</div>
</div>






    

    
  )
}
