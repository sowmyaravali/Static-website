import React from 'react'
import './Article.css'

import img1 from '../../../assets/Link (8).png'
import img2 from '../../../assets/Link (9).png'
import img3 from '../../../assets/Link (10).png'

const Article = () => {

    const artivleCards=[{
        s1:img1,
        s2:'April 06 2023',
        s3:'By Ali Tufan',
        s4:'Kenya vs Tanzania Safari: The Better African Safari Experience'
    },{
        s1:img2,
        s2:'April 06 2023',
        s3:'By Ali Tufan',
        s4:'Kenya vs Tanzania Safari: The Better African Safari Experience'
    },{
        s1:img3,
        s2:'April 06 2023',
        s3:'By Ali Tufan',
        s4:'Kenya vs Tanzania Safari: The Better African Safari Experience'
    }]
  return (
     <section className='article'>
        <div className='article-title'>
            <h1>Travel Articles</h1>
            <button>see all</button>     
        </div>
        <div className='article-cards'>
            {artivleCards.map((card,index)=>{
                return(
                      <div key={index} className='article-card'>
                        <img src={card.s1} alt="" />
                        <div className='c3'>
                            <p style={{fontSize:'12px'}}>{card.s2}</p>
                            <hr />
                            <p style={{fontSize:'12px'}}>{card.s3}</p>
                        </div>
                        <h4>{card.s4}</h4>
                      </div>  )
            })            }

        </div>

     </section>
  )
}

export default Article