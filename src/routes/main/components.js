import React, {useState, useEffect} from 'react';
import {Flex, Col, Text} from '../../components';

export const BigFeed = ({}) => {
    return (
        <Col padding="50px" br="50px" bg={"rgba(0, 0, 0, 0.25)"} width="100%" style={{backdropFilter: "blur(2px)"}}>
            <Text size="50px" lh={"80px"} ff="Nanum Myeongjo">Observational RL</Text>
        </Col>
    )
};