import React from 'react'

const Footer = () => {
  return (
    <footer className='container-fluid py-5 bg-dark text-white'>
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <h3>A propos</h3>
                    <p>Situté à Abidjan Non loi de la pharmacie sainte athanse</p>
                    <p>Téléphone : </p>
                    <p>Email</p>
                    <p>N° RCCM : </p>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <h3>Nos Services</h3>
                    <ul>
                        <li>Création d'entreprise</li>
                        <li>Gestion d'entreprise</li>
                        <li>Accompagement</li>
                        <li>Etat civil</li>
                        <li>Actes de justices</li>
                    </ul>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <h3>Mozar Course Administrative</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>        
            </div>
        </div>
    </footer>
  )
}

export default Footer
