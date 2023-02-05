import React, {useState, useEffect} from 'react';
import {Flex, Col, Text, Image, Row} from '../../components';

export const BigFeed = ({}) => {
    return (
        <Col padding="50px" br="50px" bg={"rgba(50, 50, 50, 0.25)"} width="100%" style={{backdropFilter: "blur(2px)"}} mb="30px">
            <Text size="50px" lh={"65px"} weight="700" ff="Nanum Myeongjo">Spiking neural network</Text>
            <Row mt="20px" justify="space-between">
                <Row>
                    <Text ff="Nanum Myeongjo" size="18px" opacity={1} color="#00dcff"># Spiking Neural Networks</Text>
                </Row>
                <Text ff="Nanum Myeongjo" size="18px" opacity={0.9}>2023 July 11, 5 min to Read</Text>
            </Row>
            <Row mtb="30px">
                <Flex width="47%" height="350px" style={{minWidth: "47%", minHeight: 350}} br="30px" overflow="hidden" mr="15px">
                    <Image src={"https://images.theconversation.com/files/374303/original/file-20201210-18-elk4m.jpg?ixlib=rb-1.1.0&rect=0%2C22%2C7500%2C5591&q=45&auto=format&w=926&fit=clip"} width="100%" height="100%" of="cover" />
                </Flex>
                <Flex ml="15px" style={{maxHeight: 350}} overflow="hidden">
                    <Text size="25px" lh="1.4" weight="500" ff="Nanum Myeongjo">Spiking neural networks (SNNs) are artificial neural networks that more closely mimic natural neural networks.[1] In addition to neuronal and synaptic state, SNNs incorporate the concept of time into their operating model. The idea is that neurons in the SNN do not transmit information at each propagation cycle (as it happens with typical multi-layer perceptron networks), but rather transmit information only when a membrane potential – an intrinsic quality of the neuron related to its membrane electrical charge – reaches a specific value, called the threshold. When the membrane potential reaches the threshold, the neuron fires, and generates a signal that travels to other neurons which, in turn, increase or decrease their potentials in response to this signal. A neuron model that fires at the moment of threshold crossing is also called a spiking neuron model.[2]</Text>
                </Flex>
            </Row>
            <Row justify="space-between">
                <Row>
                    <Text ff="Nanum Myeongjo" size="18px" opacity={0.9} mr="20px">3 Likes</Text>
                    <Text ff="Nanum Myeongjo" size="18px" opacity={0.9}>50 Comments</Text>
                </Row>
            </Row>
        </Col>
    )
};