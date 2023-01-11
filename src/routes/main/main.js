import React, {useState, useEffect} from 'react';
import {Flex, Col, Row, Text, Screen} from '../../components';
import { ThemeEvent } from '../../contexts';
import {VoyageBackground} from "./welcome";

export const Main = ({main}) => {
    const {theme} = ThemeEvent();
    return (
        <Screen bg={theme == "day" ? "white" : "black"} height="100vh" opacity={main ? 1 : 0} style={{transition: "all 1000ms ease-in-out"}}>
            <VoyageBackground position="absolute" startTime={0} id="main_voyage" transitionTime='7000ms' />
        </Screen>
    )
};

export default Main;