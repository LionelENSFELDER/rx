import React,  {useEffect} from "react";

export default function Navbar(){

  useEffect(() => {
    autoClose();
  })

  function autoClose(){
    const navbar = document.getElementById('mainNavbar');
    const items = document.querySelectorAll('.nav-item');
    
    items.forEach(item => {
      item.addEventListener('click', () => {
        if(navbar.classList.contains('show')){
          navbar.classList.remove('show');
        }
      })
    })
  }


  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img className="navbar_logo" src="/logo/logo-rx.png" alt="RX logo" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="mainNavbar" className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#prestations">Prestations</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#sur-place">Sur place</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#a-distance">A distance</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#realisations">Réalisations</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}