import React from 'react'
import Logo from "../assets/img/logo.jpg";
import headerCss from "../assets/css/header.css"
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg header">
      <div class="container">
        <Link to={"/"}><img src={Logo} alt="Le logo de l'entreprise" className='logo'/></Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Création d'une entreprise
              </a>
              <ul class="dropdown-menu">
                <li><Link class="dropdown-item" to={"individuel"}>Créer une entreprise individuel</Link></li>
                <li><Link class="dropdown-item" to={"sarl"}>Créer une SARL</Link></li>
                <li><Link class="dropdown-item" to={"sarlu"}>Créer une SARLU</Link></li>
                <li><Link class="dropdown-item" to={"sas"}>Créer une SAS</Link></li>
                <li><Link class="dropdown-item" to={"ong"}>Créer une ONG</Link></li>
                <li><Link class="dropdown-item" to={"sci"}>Créer une SCI</Link></li>
                <li><Link class="dropdown-item" to={"startup"}>Créer une STARTUP</Link></li>
                <li><Link class="dropdown-item" to={"filiale"}>Créer une FILIALE</Link></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Gestion d'une entreprise
              </a>
              <ul class="dropdown-menu">
                <li><Link class="dropdown-item" to={""}>Domiciliez votre entreprise</Link></li>
                <li><Link class="dropdown-item" to={""}>Rédaction de CDD</Link></li>
                <li><Link class="dropdown-item" to={""}>Rédaction de CDI</Link></li>
                <li><Link class="dropdown-item" to={""}>Contrat de bail</Link></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Accompagnement
              </a>
              <ul class="dropdown-menu">
                <li><Link class="dropdown-item" to={""}>Comptabilité</Link></li>
                <li><Link class="dropdown-item" to={""}>Gestion de le paie</Link></li>
                <li><Link class="dropdown-item" to={""}>Déclaration CNPS</Link></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Etat civile
              </a>
              <ul class="dropdown-menu">
                <li><Link class="dropdown-item" to={""}>Actes de Naissance</Link></li>
                <li><Link class="dropdown-item" to={""}>Actes de Mariage</Link></li>
                <li><Link class="dropdown-item" to={""}>Actes de décès</Link></li>
                <li><Link class="dropdown-item" to={""}>Certifications de Document</Link></li>
                <li><Link class="dropdown-item" to={""}>Légalisation De Signature</Link></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Acte de justice
              </a>
              <ul class="dropdown-menu">
                <li><Link class="dropdown-item" to={""}>Certificats de Nationalité Ivoirienne</Link></li>
                <li><Link class="dropdown-item" to={""}>Cassier Judiciaires</Link></li>
              </ul>
            </li>
          </ul>
          <Link to={"login"}><button className='btn'>Espace client</button></Link>
        </div>
      </div>
    </nav>
    </>
  );
}

export default Header;