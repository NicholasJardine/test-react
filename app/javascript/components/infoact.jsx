export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Become a Star',
    headline: 'Showcase your talent',
    description: 'Sign up and become a part of a database of actors. Become more accessible and discoverable.Casting agents can send out casting briefs directly to actors and receive their audition tapes directly to their profiles. With a dashboard to help them manage their auditions.',
    buttonLabel: 'Get Started',
    imgStart: false,
    img: require ('../../images/awards.svg'),
    alt: 'Car',
    dark: true,
    primary: true,
    darkText:false,

};


import React from 'react'
import Button from '../ButtonElement'
import { InfoContainer, InfoWrapper, InfoRow, Heading, Column1, Column2, TextWrapper, Subtitle, BtnWrap, TopLine, ImgWrap, Img} from './InfoElements'
// import BanTwo from '../../images/video.svg'
// import BanOne from '../../images/awards.svg'


const InfoSection = ({lightBg, img, img2, id, imgStart, description, topLine, lightText, darkText, headline, buttonLabel, alt, primary, dark, dark2 }) => {

    console.log(img);

    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper lightBg={lightBg}>

                    <InfoRow imgStart={imgStart} lightBg={lightBg}>
                        <Column1>
                        <TextWrapper>
                            <TopLine lightText={lightText}>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                                        <BtnWrap>
                                            <Button to="home"                                                          smooth={true}
                                                duration={500}
                                                spy={true}
                                                exact="true"
                                                offset={-80}
                                                primary={primary ? 1: 0}
                                                dark={dark ? 1 : 0}
                                                dark2={dark2 ? 1: 0}>
                                                {buttonLabel}

                                            </Button>
                                        </BtnWrap>
                        </TextWrapper>
                        
                        </Column1>
                        <Column2>
                        <ImgWrap>
                            <Img src={img.default} />

                        </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>

            </InfoContainer>
        </>
    )
}

export default InfoSection