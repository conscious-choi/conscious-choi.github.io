import React, {useEffect, useState} from 'react';
import { Flex, Screen, Row, Text } from '../../components';
import styled from 'styled-components';
import spaceAnimate from './spaceAnimation';
import Typewriter from 'typewriter-effect';
import { MainEvent } from '../../contexts';
import { useLocation } from 'react-router-dom';

export const Welcome = ({}) => {
    const {goMain, setGoMain} = MainEvent();
    return (
        <Screen height="100%" align="center" justify="center" opacity={!goMain ? 1 : 0} position="absolute" style={{backgroundColor: goMain && "white"}} transition='all 500ms ease-in-out'>
            <CodeCursor goMain={goMain} setGoMain={setGoMain} />
            {/* <VoyageBackground id={"welcome"} /> */}
            <SkipBtn setGoMain={setGoMain} />
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

export const SkipBtn = ({setGoMain}) => {
    const [opacity, setOpacity] = useState(0);
    const [color, setColor] = useState("white");
    useEffect(() => {
        const opaciter = () => {
            setTimeout(() => setOpacity(1), 3000);
        };
        opaciter();
    }, [])
    return (
        <Row
            onMouseOver={() => setColor("#00dcff")} onMouseLeave={() => setColor("white")} position="absolute"
            style={{right: '5%', bottom: '10%'}} to="hover" align="center" opacity={opacity}
            transition="all 1000ms ease-in-out" zIndex="10000" onClick={() => setGoMain(true)}
        >
            <Text size="20px" weight="300" color={color}>
                Skip Tutorial
            </Text>
            <Flex ml="15px" align="center">
                <Flex style={{width: 35, height:1}} bg={color} />
                <Flex style={{width: 12.5, height: 1, transform: "rotate(45deg)", right: -2, top: 5.3}} position="absolute" bg={color} />
                <Flex style={{width: 12.5, height: 1, transform: "rotate(135deg)", right: -2, top: 13.8}} position="absolute" bg={color} />
            </Flex>
        </Row>
    )
}

export const CodeCursor = ({goMain, setGoMain}) => {
    useEffect(() => {
        const enter = () => {
            let enterbtnsibling = document.getElementsByClassName('Typewriter__wrapper')[0];
            let enterbtn = document.createElement("div");
            enterbtn.addEventListener("click", () => setGoMain(true))
            setTimeout(() => enterbtn.style = `
                opacity: 1;
                transition: all 1500ms ease-in-out;
                font-size: 20px;
                color: #00dcff;
                background-color: rgba(30, 30, 30, 0.75);
                padding: 10px 30px 10px 30px;
                border-radius: 20px;
                cursor: pointer;
                width: 276px;
                margin: auto;
                margin-top: 50px;
                user-select: none;`
            , 61000) //102000);
            enterbtn.innerText = "Enter the Consciousness"
            enterbtn.style.fontSize = "20px"
            enterbtn.style.transition = "all 1000ms ease-in-out"
            enterbtn.style.opacity = "0"
            enterbtnsibling.parentNode.appendChild(enterbtn)
        };
        enter();
    }, [])
    return (
        <Writer style={{opacity: goMain ? 0 : 1, transition: "all 500ms ease-in-out"}}>
            <Typewriter
                options = {{
                    delay : 50,
                    deleteSpeed	: 10
                }}
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

export const VoyageBackground = ({position = "fixed", startTime = 57000, id, transitionTime = '15s'}) => {
    const [opacity, setOpacity] = useState(0);
    const location = useLocation()
    useEffect(() => {
        const animator = () => {
            setTimeout(() => setOpacity(1), startTime)
            spaceAnimate(id);
        }
        animator()
    }, [location.pathname === "/"])
    return (
        <Screen position={position} height="100vh" id={id} zIndex={0} opacity={opacity} style={{transition: `all ${transitionTime} ease-in-out`}}>
        </Screen>
    )
}

export default Welcome;