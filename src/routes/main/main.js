import React, {useState, useEffect} from 'react';
import {Flex, Col, Row, Text, Screen} from '../../components';
import {VoyageBackground} from "./welcome";
import {BigFeed} from './components';

export const Main = ({main}) => {
    return (
        <Screen height="100vh" opacity={main ? 1 : 0} style={{transition: "all 1000ms ease-in-out"}}>
            <VoyageBackground position="absolute" startTime={0} id="main_voyage" transitionTime='2000ms' />
            <Screen bg="rgba(0,0,0,0)" overflow="hidden" style={{overflowY: "scroll", flexDirection: "column"}} height="100%" position="fixed" pt="12%" prl="15%" zIndex={10}>
                {/* <BigFeed /> */}
            </Screen>
        </Screen>
    )
};

export default Main;