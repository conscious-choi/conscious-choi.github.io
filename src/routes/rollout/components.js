import React, {useState, useEffect} from 'react';
import { Flex, Row, Text as span } from '../../components';
import {CircleLogo} from '../../contents/logo';
import styled from 'styled-components';

const Text = styled(span)`
    position: relative;
`;

export const WelcomeText = ({}) => {
    return (
        <Flex>
            <Row position="absolute">
                <Flex>
                    <CircleLogo width={50} height={55} />
                </Flex>
                <Text>Welcome to Consciousness</Text>
            </Row>
            <Row>
                <Text>Consciousness,</Text>
                <Text>a way to discover our Universe.</Text>
                <Text></Text>
                <Text>a way to the Truth.</Text>
                <Text>a deep system of our Mind.</Text>
                <Text>we would do that no hesitation</Text>
                <Text>Everything is in our Imagination.</Text>
                <Text>Wouldn't that be amazing?</Text>
            </Row>
            <Row>
                <Text>All the potential of human's possibility is in our consciousness.</Text>
            </Row>
        </Flex>
    )
};