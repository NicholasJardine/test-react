import React from 'react'
// import Button from '../ButtonElement'

import actor from '../images/company.svg'

const InfoComp = () => {

    return (
        <>
        <div className="info-container-2" id="discover">
            <div className="info-wrapper-2">
                <div className="info-row-2">
                    <div className="column-1">
                        <div className="text-wrapper">
                            <div className="topline">Find the perfect fit</div>
                            <h1 className="heading-2">Looking for Actors?</h1>
                            <p className="subtitle-2">Actors can sign up to the website and become a part of a database of actors, with the ability to add their bios, agents or contact information, websites and pictures/videos to their profiles. They will also receive briefs that match their profile and upload their audition tapes and send it directly to the casting agents.</p>
                        </div>
                        <div className="btn-wrap">
                            <a className="comp-btn" href="users/sign_up">Learn More</a>
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

export default InfoComp
