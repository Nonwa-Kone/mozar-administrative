import React from 'react'
import logo from '../assets/img/logo.jpg'

const WhoWeAre = () => {
  return (
    <>
    <div className="col-md-6 col-lg-6 col-sm-12">
        <h1>Qui nous sommes?</h1>
        <p className='lead'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, laboriosam, tenetur quo veritatis vel blanditiis molestias officia cupiditate autem odio rem qui, in perspiciatis sapiente iusto ullam assumenda maxime delectus.</p>
    </div>
    <div className="col-md-6 col-lg-6 col-sm-12">
        <img src={logo} alt="" className='h-100 img-fluid' />
    </div>
    </>
  )
}

export default WhoWeAre