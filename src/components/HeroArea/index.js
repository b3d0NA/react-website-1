import React, { useState } from 'react'
import Video from '../../videos/video.mp4'
import { Button } from '../Button'
import { ArrowForward, ArrowRight, H1, HeroBg, HeroBtnWrapper, HeroContainer, HeroContent, P, VideoBg } from './HeroElement'
const HeroArea = () => {
    const [hover, setHover] = useState(false)

    const toggleHover = () => {
        setHover(!hover)
    }
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <H1>Make your site perfect with ReactJS</H1>
                <P>ReactJS is the most powerfull library of javascript. Which has made by a Facebook engineer.</P>
                <HeroBtnWrapper>
                    <Button to='/signin' onMouseEnter={toggleHover} onMouseLeave={toggleHover} primary="true" dark="true">
                        Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroArea
