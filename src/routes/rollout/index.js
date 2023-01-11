import React, {useState} from 'react';
import { Screen, Flex } from '../../components';
import Welcome from './components';

export const Rollout = ({}) => {
    return (
        <Screen align="center" justify="center" height="100vh">
            <Welcome />
        </Screen>
    )
}

export default Rollout;