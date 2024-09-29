import React from 'react'
import './Offer.css'
import img1 from '../../../assets/image (11).png'
import img2 from '../../../assets/image (12).png'
import img3 from '../../../assets/image (13).png'

import logo1 from '../../../assets/div.d-flex.png'
import logo2 from '../../../assets/div.d-flex (1).png'
import logo3 from '../../../assets/div.d-flex (2).png'
import logo4 from '../../../assets/div.d-flex (3).png'
import logo5 from '../../../assets/div.d-flex (4).png'
import logo6 from '../../../assets/div.d-flex (5).png'

const Offer = () => {
  return (
    <section className='special-offer'>
      <div className='sp-title'>
        <h1>Special Offers</h1>
        <button>see all</button>
      </div>
      <div className='special-cards'>
        <div className='cards-data'>
          <img src={img1} alt="" />
          <div className='data-content' style={{color:'white', lineHeight:'25px'}}>
            <p>Enjoy Upto</p>
            <h4>60% OFF</h4>
            <p>on your booking</p>

          </div>

        </div>
        <div className='cards-data'>
          <img src={img2} alt="" />
          <div className='data-content' style={{color:'white',lineHeight:'25px'}}>
            <p>80% OFF</p>
            <h4>Are you ready <br />to turkey tour</h4>
          </div>

        </div>
        <div className='cards-data'>
          <img src={img3} alt="" />
          <div className='data-content'>
            <h4>Discover the <br /> wow of Europe</h4>
          </div>

        </div>
      </div>
      <div className='logo-sec'>
        <p>
          Trusted by worlds best
        </p>
        <div className='logos'>
          <img src={logo1} alt="" />
          <img src={logo2} alt="" />
          <img src={logo3} alt="" />
          <img src={logo4} alt="" />
          <img src={logo5} alt="" />
          <img src={logo6} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Offer