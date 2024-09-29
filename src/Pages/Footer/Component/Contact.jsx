import React from 'react'
import './Contact.css'
import m1 from'../../../assets/image (5).png'
import m2 from '../../../assets/image (6).png'
import m3 from '../../../assets/image (7).png'
import m4 from '../../../assets/image (8).png'
import m5 from '../../../assets/image (9).png'
import m6 from '../../../assets/image (10).png'

const Contact = () => {
  return (
    <section className='footer'>
      <div className='sec1'>
        <p>Speak to our expert at1-800-453-6744</p>
        <p>Follow us</p>

      </div>

   

      <div className='sec2'>
        <div className='ft1'>
          <h4>Contact</h4>
          <p>328 Queensberry Street, North Melbourne VIC3051,
          Australia.</p>
          <p>hi@viatours.com</p>


        </div>

        <div className='ft1'>
          <h4>Company</h4>
          <ul>
            <li>About us</li>
            <li>Tours reviews</li>
            <li>Contact Us</li>
            <li>Travel Guides</li>
            <li>Data Policy</li>
            <li>Cookie policy</li>
            <li>legal</li>
            <li>Sitemap</li>
          </ul>

        </div>

        <div className='ft1'>
          <h4>Support</h4>
          <ul>
            <li>Get in touch</li>
            <li>Help center</li>
            <li>Live chat</li>
            <li>How it works</li>
          </ul>
        </div>

        <div className='ft1'>
          <h4>Newsettler</h4>
          <p>Subscribe to the free newsletter and stay
          up to date</p>
          <div className='sender'>
            <input type="text" placeholder='enter the email' />
            <button>Send</button>
          </div>
          <h4>Mobile app</h4>
          <ul>
            <li>ios app</li>
            <li>Android app</li>
          </ul>
        </div>


      </div>
      

      <div className='sec3'>
       <p>© Copyright Viatours 2024</p>
        <div>
          <img src={m1} alt="" />
          <img src={m2} alt="" />
          <img src={m3} alt="" />
          <img src={m4} alt="" />
          <img src={m5} alt="" />
          <img src={m6} alt="" />
        </div>

      </div>

    </section>
  )
}

export default Contact