import React from 'react'
import { Link } from 'react-router-dom'

const Services = (props) => {
  const services = props.services.map(link => {
    return (
        <div className='card col-lg-4 col-md-4 mb-sm-3'>
            <div className="card-heading">
                <h5>{ link.title }</h5>
            </div>
            <div className="card-body">
                <Link>{ link.service.map(item => item + ', ') }</Link>
            </div>
            <div className="card-footer">
                <button className='btn'><Link>{ link.content }</Link></button>
            </div>
        </div>
    )
  })
  return (
    <div className='row d-flex flex-row flex-wrap justify-content-evenly'>{services}</div>
  )
}

export default Services