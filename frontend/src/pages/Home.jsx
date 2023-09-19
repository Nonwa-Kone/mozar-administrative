import React from 'react'
import Hero from '../components/Hero'
import homeCss from "../assets/css/home.css"
import WhoWeAre from '../components/WhoWeAre'
import CommentSaMarche from '../components/CommentSaMarche'

const Home = () => {
  return (
    <div className='container-fluid'>
        <div className="container">
            <div className="row py-5 hero">
                <Hero/>
            </div>
            <div className="row py-5">
                <WhoWeAre/>
            </div>
            <div className="row py-5">
                <CommentSaMarche/>
            </div>
        </div>
    </div>
  )
}

export default Home