import React from 'react'
import Services from './Services'

const Hero = () => {
  const dataServices = [
    {
        title: "Création",
        service: ["SARL", "SARLU", "SAS", "SASU", "ONG", "SCI", "SCOOPS", "Association", "Fondation", "Entreprise individuelle"],
        content: ["Création d'entreprise"]
    },
    {
        title: "Gestion",
        service: ["Domiciliation", "SARLU", "SAS", "SASU", "ONG", "SCI", "SCOOPS", "Association", "Fondation", "Entreprise individuelle"],
        content: ["Gestion d'entreprise"]
    },
    {
        title: "Accompagnement",
        service: ["Comptabilité", "Paie", "Rédaction de contrat", "recouvrement de créance"],
        content: ["Accompagnement"]
    }
  ]
    const services = ['SARL', 'SARLU', 'SAS', 'SASU']
  return (
    <div className='container'>
        <div className="row">
            <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, ratione?</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum consequuntur unde harum!</p>
        </div>
        <div className="row">
            <Services services={dataServices}/>
        </div>
    </div>
  )
}

export default Hero