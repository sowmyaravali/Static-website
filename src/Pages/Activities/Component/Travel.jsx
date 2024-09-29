import React from 'react'
import './Travel.css'
import card1 from '../../../assets/1.svg.png'
import card2 from '../../../assets/2.svg.png'
import card3 from '../../../assets/3.svg.png'

const Travel = () => {
    const card_1 = [
        {
            c1: card1,
            c2: 240,
            c3: 'Total destinations'
        }
    ];
    const card_2 = [
        {
            c1: card2,
            c2: '96,842',
            c3: 'Happy Customer'
        }
    ];
    const card_3 = [
        {
            c1: card3,
            c2: 3672,
            c3: 'Amazing tours'
        }
    ];


    return (
        <section className='travel'>
            <div className="travel-content">
                <div className='tittle'>
                    <h1>We Make <br/> World Travel Easy</h1>
                    <p>Traveling under your own power and at your own pace,
                        you will connect more meaningfully with your destination and
                        have more fun!</p>

                </div>
                <button>Explore our Tours</button>
            </div>
            <div className="travel-cards">
                <div className="card2">
                    <div className='card-data'>
                        {
                            card_1.map((card, index) => {

                                return (
                                    <div key={index} className="card11">
                                        <img src={card.c1} alt="" />
                                        <h1>{card.c2}</h1>
                                        <p style={{fontSize:'12px'}}>{card.c3}</p>

                                    </div>
                                )
                            })

                        }

                    </div>

                    <div className='card-data'>{
                        card_2.map((card, index) => {

                            return (
                                <div key={index} className="card11">
                                    <img src={card.c1} alt="" />
                                    <h1>{card.c2}</h1>
                                    <p style={{fontSize:'12px'}} >{card.c3}</p>

                                </div>
                            )
                        })
                    }

                    </div>

                </div>
                <div className="card1">
                    <div className='card-data'>
                    {
                        card_3.map((card, index) => {

                            return (
                                <div key={index} className="card11">
                                    <img src={card.c1} alt="" />
                                    <h1>{card.c2}</h1>
                                    <p style={{fontSize:'12px'}}>{card.c3}</p>

                                </div>
                            )
                        })

                    }
                    </div>

                </div>
            </div>

        </section>
    )
}

export default Travel