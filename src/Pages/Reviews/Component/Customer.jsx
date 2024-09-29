import React from 'react'
import './Customer.css'

import tag from '../../../assets/SVG.png'
import person1 from '../../../assets/image.png'
import person2 from '../../../assets/image (1).png'
import person3 from '../../../assets/image (2).png'
import person4 from '../../../assets/image (3).png'
import person5 from '../../../assets/image (4).png'

const Customer = () => {
    const persons = [
        {
            p1: person1
        }, {
            p1: person2
        }, {
            p1: person3
        }, {
            p1: person4
        }, {
            p1: person5
        }
    ]
    return (
        <section className='review'>
            <div className='customer-review'>
                <h1>Customer Reviews</h1>
                <img src={tag} alt="" />
                <p>The tours in this website are great. I had been really enjoy with my family! The team is very
                    professional and taking care of the customers. Will surely recommend to my freind to join
                    this company!</p>
                <div className='sub'>
                    <p>Ali Tufan</p>
                    <p>Product Manager, Apple Inc.</p>
                </div>
                <div className='person-icons'>
                    {
                        persons.map((person, index) => {
                            return (
                                <div key={index} className="icons">
                                    <img src={person.p1} alt="" />

                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </section>
    )
}

export default Customer