import './Hero.css'

const Hero = () => {
    return (
        <>
            <section className="hero">
                <div className='hero-content'>
                    <h1>Travel Memories You Never <span>Forget</span> </h1>
                    <p>From local escapes to far-flung adventures, find what makes you happy
                        anytime, anywhere</p>
                    <div className="hero-icon">
                        <div className="h1">
                            <div className='circle1'></div>
                             <div className='h2'>
                                <p>Where</p>
                                <p className='p1'>Search Destinations</p>     
                            </div>  
                        </div >
                        <div className="h1">
                            <div className='circle1'></div>
                             <div className='h2'>
                                <p>Where</p>
                                <p className='p2'>Febraury 04~March 14</p>     
                            </div>  
                        </div>
                        <div className="h1">
                            <div className='circle1'></div>
                             <div className='h2'>
                                <p>Where</p>
                                <p className='p1'>All Tour</p>     
                            </div>  
                        </div>
                        <div className="h1">
                            <div className='circle2'></div>
                               
                        </div>
                      

                    </div>
                </div>

            </section>
        </>
    )
}

export default Hero