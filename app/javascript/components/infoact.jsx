import React from 'react'
// import Button from '../ButtonElement'

import actor from '../images/actor.svg'

const InfoSection = () => {

    return (
        <>
        <div className="info-container" id="about">
            <div className="info-wrapper">
                <div className="info-row">
                    <div className="column-1">
                        <div className="text-wrapper">
                            <div className="topline">Become a Star</div>
                            <h1 className="heading">Showcase your talent</h1>
                            <p className="subtitle">Sign up and become a part of a database of actors. Become more accessible and discoverable.Casting agents can send out casting briefs directly to actors and receive their audition tapes directly to their profiles. With a dashboard to help them manage their auditions.</p>
                        </div>
                    </div>
                    <div className="column-2">
                        <div className="img-wrap">
                            <img className="image-style" src={actor} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </>
    )
}

export default InfoSection