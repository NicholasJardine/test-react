import React from 'react'

import heropic from '../images/cinema.jpg'

const Hero = () => {

    // const [isOpen, setIsOpen] = useState(false)
    // const toggle = () => {
    //   setIsOpen(!isOpen)
    // }
    const style = {
        backgroundImage: `url(${heropic})`
    }
    return (
        <div className="hero-container" style={style}>
            <div className="hero-content">

                <div className="hero-items">
                <h1 className="hero-h1">Pictor</h1>
                    <p className="hero-text">The best platform for online auditions for actors and casting agents/production companies.</p>
                    {/* <HeroBtn><p>Place Order</p></HeroBtn> */}
                    {/* <HeroButton to='about' smooth={true} duration={500} spy={true} exact='true' offset= {-80}> Learn More</HeroButton> */}
                </div>
            </div>
        </div>

    )
}

export default Hero


