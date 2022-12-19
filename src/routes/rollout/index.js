import React, {useState} from 'react';
import { Screen, Flex } from '../../components';
import { WelcomeText } from './components';

export const Rollout = ({}) => {
    return (
        <Screen align="center" justify="center" height="100vh">
            <WelcomeText />
        </Screen>
    )
}

export default Rollout;