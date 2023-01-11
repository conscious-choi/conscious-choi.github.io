import React, {useEffect, useState} from 'react';
import { Flex, Screen, Row, Text } from '../../components';
import {CircleLogo} from '../../contents/logo';
import styled from 'styled-components';
import spaceAnimate from './spaceAnimation';
import Typewriter from 'typewriter-effect';

export const Welcome = ({}) => {
    return (
        <Screen height="100%" align="center" justify="center">
            <CodeCursor />
            <VoyageBackground />
        </Screen>
    )
};

export const Writer = styled(Flex)`
    color: white;
    font-family: Source Code Pro;
    font-size: 30px;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 1;
    background-color: rgba(0,0,0,0);
`;

export const CodeCursor = ({}) => {
    useEffect(() => {
        const enter = () => {
            let enterbtnsibling = document.getElementsByClassName('Typewriter__wrapper')[0];
            let enterbtn = document.createElement("div");
            setTimeout(() => enterbtn.style = `
                opacity: 1;
                transition: all 1000ms ease-in-out;
                font-size: 20px;
                color: white;
                background-color: rgba(30, 30, 30, 0.85);
                padding: 10px 30px 10px 30px;
                border-radius: 20px;
                cursor: pointer;
                margin: auto;
                margin-top: 30px;`
            , 102000);
            enterbtn.innerText = "Enter the Consciousness"
            enterbtn.style.fontSize = "20px"
            enterbtn.style.transition = "all 1000ms ease-in-out"
            enterbtn.style.opacity = "0"
            enterbtnsibling.parentNode.appendChild(enterbtn)
        };
        enter();
    }, [])
    return (
        <Writer>
            <Typewriter
                onInit={(typewriter) => {
                    typewriter.typeString('Welcome to Consciousness')
                    .pauseFor(1500)
                    .deleteAll()
                    .pauseFor(1000)

                    typewriter.typeString('Consciousness')
                    .pauseFor(800)

                    typewriter.typeString('.')
                    typewriter.typeString('.')
                    typewriter.typeString('.')
                    .pauseFor(1500)
                    .deleteChars(3)
                    .pauseFor(1000)

                    typewriter.typeString(',')
                    .pauseFor(1000)
                    typewriter.typeString(' something very misterious?')
                    .pauseFor(1800)
                    .deleteChars(27)
                    .pauseFor(500)

                    typewriter.typeString(' maybe the key of ourselves?')
                    .pauseFor(1800)
                    .deleteChars(28)
                    .pauseFor(800)

                    typewriter.typeString(' or maybe a key further to the universe?')
                    .pauseFor(2500)
                    .deleteAll()
                    .pauseFor(800)
                    typewriter.typeString(' and maybe the pathway to')
                    .pauseFor(500)

                    typewriter.typeString('...')
                    .pauseFor(1500)
                    .deleteAll()
                    .pauseFor(1000)

                    typewriter.typeString('Well...')
                    .pauseFor(1000)
                    .deleteChars(3)
                    
                    .pauseFor(300)
                    typewriter.typeString(', ')
                    .pauseFor(300)

                    typewriter.typeString('all of those may not be exist.')
                    .pauseFor(1500)
                    .deleteAll()
                    .pauseFor(800)

                    typewriter.typeString("But we are not yet to find those.")
                    .pauseFor(1000)
                    .deleteAll()
                    .pauseFor(500)

                    typewriter.typeString("Wouldn't be amazing to discover it?")
                    .pauseFor(1800)
                    .deleteAll()

                    typewriter.typeString("No hesitation for that!")
                    .pauseFor(2000)
                    .deleteAll()

                    typewriter.typeString("Ready to start our voyage?")

                    .callFunction(() => {
                        console.log('String typed out!');
                    })
                    .callFunction(() => {
                        console.log('All strings were deleted');
                    })
                    .start();
                }}
            />
        </Writer>
    )
}

export const VoyageBackground = ({}) => {
    const [opacity, setOpacity] = useState(0);
    useEffect(() => {
        const animator = () => {
            setTimeout(() => setOpacity(1), 90000)
            spaceAnimate("voyage");
        }
        animator();
    }, [])
    return (
        <Screen position="fixed" height="100vh" id="voyage" zIndex={0} opacity={opacity} style={{transition: 'all 15s'}}>
        </Screen>
    )
}

export default Welcome;