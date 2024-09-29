import React from 'react'
import './Trip.css'

import paris from '../../../assets/div.tourCard__image.png'
import newyork from '../../../assets/div.tourCard__image (1).png'
import london from '../../../assets/div.tourCard__image (2).png'
import usa from '../../../assets/div.tourCard__image (3).png'


const Trips = () => {

    const trip_Card = [{
        s1: paris,
        s2: 'Paris, France',
        s3: 'Centipede Tour - Guided Arizona Desert Tour by ATV',
        s4: '4 days',
        s5: 'From $189.25'
    }, {
        s1: newyork,
        s2: 'New York, USA',
        s3: 'Molokini and Turtle Town Snorkeling Adventure Aboard',
        s4: '4 days',
        s5: 'From $225'
    }, {
        s1: london,
        s2: 'London,UK',
        s3: 'Westminster Walking Tour & Westminster Abbey Entry',
        s4: '4 days',
        s5: 'From $943'
    }, {
        s1: usa,
        s2: 'New York, USA',
        s3: 'All Inclusive Ultimate Circle Island Day Tour with Lunch',
        s4: '4 days',
        s5: 'From $771'
    }]
    return (



        <section className='trips'>
            <div className="featured">
                <div className="featured-title">
                    <h1>Featured Trips</h1>
                    <button>By Travel Style</button>
                </div>
                <div className="Featured-data">
                    {trip_Card.map((card, index) => {
                        return (
                            <div key={index} className="featured-card">

                                <img src={card.s1} alt="" />
                                <p style={{fontSize:'12px',color:'#717171'}}>{card.s2}</p>
                                <div className='c2'>
                                    <h5>{card.s3}</h5>
                                    <p style={{fontSize:'12px'}}>4.8 (423)</p>
                                </div>
                                <hr />
                                <div className='c1' style={{fontSize:'15px'}}>
                                        <p>{card.s4}</p>
                                        <p>{card.s5}</p>
                                </div>

                            </div>  )  })    }
                 </div>
            </div>

          
        </section>
    )
}

export default Trips