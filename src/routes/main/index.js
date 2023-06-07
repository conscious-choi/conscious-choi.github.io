import React, {useState, useEffect} from 'react';
import {Screen, Flex, Col, Row} from '../../components';
import { MainEvent } from '../../contexts';
import Welcome from './welcome';
import Main from './main';

export const MainPage = ({}) => {
    const {goMain, showMain, setShowMain} = MainEvent();
    useEffect(() => {
        const mainer = () => {
            setTimeout(() => goMain && setShowMain(true), 1000);
        }
        mainer();
    }, [goMain])
    return (
        <Screen height="100vh" bg="white">
            {!showMain && <Welcome />}
            {goMain && <Main main={showMain} />}
        </Screen>
    )
};

export default MainPage;