import React, {useState, useEffect} from 'react';
import {Flex, Col, Row, Text, Screen} from '../../components';
import {VoyageBackground} from "./welcome";

export const Main = ({main}) => {
    return (
        <Screen height="100vh" opacity={main ? 1 : 0} style={{transition: "all 1000ms ease-in-out"}}>
            <VoyageBackground position="absolute" startTime={0} id="main_voyage" transitionTime='7000ms' />
            <Screen bg="rgba(0,0,0,0)" overflow="hidden" style={{overflowY: "scroll"}} height="100%" position="fixed" padding="15%" zIndex={10}>
                <Col padding="50px" br="50px" bg={"rgba(0, 0, 0, 0.25)"} width="100%" style={{backdropFilter: "blur(2px)"}}>
                    <Text size="50px" lh={"80px"} ff="Nanum Myeongjo">Observational RL</Text>
                </Col>
            </Screen>
        </Screen>
    )
};

export default Main;