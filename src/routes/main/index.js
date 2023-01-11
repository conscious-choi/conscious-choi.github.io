import React, {useState, useEffect} from 'react';
import {Screen, Flex, Col, Row} from '../../components';
import { MainEvent } from '../../contexts';
import Welcome from './welcome';
import Main from './main';

export const MainPage = ({}) => {
    const [main, setMain] = useState(false);
    const {goMain} = MainEvent();
    useEffect(() => {
        const mainer = () => {
            setTimeout(() => goMain && setMain(true), 1000);
        }
        mainer();
    })
    return (
        <Screen height="100vh" bg="white">
            {!main && <Welcome />}
            {goMain && <Main main={main} />}
        </Screen>
    )
};

export default MainPage;