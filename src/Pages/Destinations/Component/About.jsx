import React from 'react';
import './About.css'
import ticket from '../../../assets/ticket.svg.png'
import ballon from '../../../assets/hot-air-balloon.svg fill.png'
import daimond from '../../../assets/diamond.svg fill.png'
import medal from '../../../assets/medal.svg.png'

import paris from '../../../assets/Link.png'
import singapore from '../../../assets/Link (1).png'
import roma from '../../../assets/Link (2).png'
import bangkok from '../../../assets/Link (3).png'
import bhali from '../../../assets/Link (4).png'
import phuket from '../../../assets/Link (5).png'
import tokyo from '../../../assets/Link (6).png'
import cappadocia from '../../../assets/Link (7).png'

import city from '../../../assets/div.featureCard__icon.png'
import culture from '../../../assets/div.featureCard__icon (1).png'
import day from '../../../assets/div.featureCard__icon (2).png'
import bus from '../../../assets/div.featureCard__icon (3).png'
import beach from '../../../assets/div.featureCard__icon (4).png'
import food from '../../../assets/div.featureCard__icon (5).png'



const About = () => {
    const toursz_data = [{
        s1: ticket,
        s2: 'ultimate flexibility',
        s3: 'You are in control with free cancellation and payment options to satisfy any pain or budget'
    }, {
        s1: ballon,
        s2: 'memorable experience',
        s3: 'Browse and book tours and activities so incredible. you will want to tell your friends'

    },
    {
        s1: daimond,
        s2: 'Quality at our core',
        s3: 'High-quality standards. Millions of reviews. A tourz company you will want to tell your friends'
    },
    {
        s1: medal,
        s2: 'Award Winning Support',
        s3: 'New Price? New Plan? No problem we are here to help 24/7 you will want to tell your friends'
    }
    ];

    const Destinations = [
        {
            p1: 'Paris',
            p2: '100+ tours',
            p3: paris

        }, {
            p1: 'Sinagapore',
            p2: '100+ tours',
            p3: singapore
        }, {
            p1: 'Roma',
            p2: '100+ tours',
            p3: roma
        }, {
            p1: 'Bangkok',
            p2: '100+ tours',
            p3: bangkok
        }
    ]

    const destinations1 = [
        {
            d1: 'Bhali',
            d2: '100+ tours',
            d3: bhali
        }, {
            d1: 'Phuket',
            d2: '100+ tours',
            d3: phuket
        }, {
            d1: 'Tokyo',
            d2: '100+ tours',
            d3: tokyo
        }, {
            d1: 'Cappadocia',
            d2: '100+ tours',
            d3: cappadocia
        }
    ];


    const popular_cards = [
        {
            c1: city,
            c2: 'city tours',
            c3: '100+ tours'

        },
        {
            c1: culture,
            c2: 'city tours',
            c3: '100+ tours'
        },
        {
            c1: day,
            c2: 'culture tours',
            c3: '100+ tours'
        },
        {
            c1: bus,
            c2: 'bus tours',
            c3: '100+ tours'
        }, {
            c1: beach,
            c2: 'beach tours',
            c3: '100+ tours'
        }, {
            c1: food,
            c2: 'food tours',
            c3: '100+ tours'
        }
    ]
    return (
        <>
            <section className='about'>
                <div className='choose-tour'>
                    <h1>Why Choose Tourz</h1>
                    <div className='toursCards'>
                        {toursz_data.map((tours, index) => {
                            return (
                                <div key={index} className='tour-data'>
                                    <img src={tours.s1} alt="" />
                                    <h3>{tours.s2}</h3>
                                    <p style={{fontSize:'15px',lineHeight:'30px'}}>{tours.s3}</p>
                                </div>
                            )
                        })}
                    </div>

                </div>

                <div className='trending'>
                    <h1>Trending Destinations</h1>
                    <div className='destination'>
                        {Destinations.map((destination, index) => {
                            return (
                                <div key={index} className='destination-data'>
                                    <div className='city'>
                                        <p style={{fontSize:'12px'}}>{destination.p1}</p>
                                        <p style={{fontSize:'12px'}}>{destination.p2}</p>
                                    </div>
                                    <img src={destination.p3} alt="" />

                                </div>)
                        })}
                    </div>
                    <div className='destination'>
                        {destinations1.map((dest, index) => {
                            return (
                                <div key={index} className='destination-data'>
                                    <div className='city' >
                                        <p style={{fontSize:'12px'}}>{dest.d1}</p>
                                        <p style={{fontSize:'12px'}}>{dest.d2}</p>
                                    </div>
                                    <img src={dest.d3} alt="" />
                                </div>
                            )
                        })}
                    </div>

                </div>



                <div className='popular-things'>
                    <div className='popular-tittle'>
                        <h1>Popular Things do </h1>
                        <button>See all</button>
                    </div>
                    <div className="popular-boxes">
                        {popular_cards.map((card, index) => {
                            return (
                                <div key={index} className='city-cards'>
                                    <img src={card.c1} alt="" />
                                    <div className='card-content'>
                                        <p>{card.c2}</p>
                                        <p>{card.c3}</p>
                                    </div>


                                </div>
                            )
                        })}

                    </div>

                </div>

            </section>

        </>

    )
}

export default About