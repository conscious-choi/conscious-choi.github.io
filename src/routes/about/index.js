import React from "react";
import styled from "styled-components";
import {Flex, Row, Text, Screen, Col, Image, Link} from "../../components";
import qlid from "../../contents/about/qlid.png"

const A = styled(Link)`
    cursor: pointer;
    :hover {
        color: #00dcff;
    };
    text-decoration: none;
    transition: all 300ms;
`;

export const About = () => {
    return (
        <Screen height="100vh" padding="15%">
            <Col>
                <Col mb="50px" align="center">
                    <Text size="38px" mb="20px" weight="600">Suhyung Choi</Text>
                    <Text weight="300" mt="10px" size="18px">Master Student @ <A to="https://snu.ac.kr" target="_blank">Seoul National University</A></Text>
                    <Text weight="300" mt="10px" size="18px"><A to="https://gsai.snu.ac.kr/" target="_blank">Graduate School of Artificial Intelligence</A></Text>
                    {/* <Text weight="300" mt="10px" size="18px"><A href="https://bi.snu.ac.kr/" target="_blank">Bio Intelligence Lab</A></Text> */}
                    <Text weight="300" mt="10px" size="18px"><A to="mailto:s.choi@snu.ac.kr">s.choi@snu.ac.kr</A></Text>
                    <Row mt="30px">
                        <A to="https://www.github.com/conscious-choi" target="_blank">
                            <Flex align="center" justify="center" width="40px" height="40px" to="svg{path{fill: #00dcff}}">
                                <svg height="100%" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="100%" data-view-component="true" class="octicon octicon-mark-github v-align-middle color-fg-default">
                                    <path fill="white" d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                                </svg>
                            </Flex>
                        </A>
                    </Row>
                </Col>
                <Col mb="70px" align="center">
                    <Text size="25px" mb="20px" weight="600">About</Text>
                    <Text size="18px" weight="300" lh="1.5" mb="10px">Hi! I'm a graduate student in Biointelligence Lab at the Seoul National University, advised by <A target="_blank" to="https://bi.snu.ac.kr">Byoung-Tak Zhang</A>.</Text>
                    <Text size="18px" weight="300" lh="1.5">My research interest is based on <span style={{color: "#00dcff"}}>the core of intelligence, from fundamental intelligence to the consciousness of our mind.</span></Text>
                    <Text size="18px" weight="300" lh="1.5" mb="10px">In the aspect of artificial intelligence, <span style={{color: "#00dcff"}}>I'm widely researching from Neuroscience-Inspired A.I to the Next Generation Neural Networks.</span></Text>
                    {/* <Text size="18px" weight="300" lh="1.5" mb="10px">Before starting my joint MS / Ph.D. program at Seoul National University, I graduated from <A target="_blank" to="https://korea.ac.kr">Korea University</A> with a Bachelor's in Artificial Intellgence and Business Administration.</Text> */}
                </Col>
                <Col mb="70px">
                    <Text size="25px" mb="25px" weight="600" style={{alignSelf: "center"}}>Education</Text>
                    <Text size="20px" weight="500" mb="10px">Seoul National University</Text>
                    <Text size="18px" weight="300" lh="1.5"mb="10px">Joint MS / Ph.D. Student in <A target="_blank" to="https://gsai.snu.ac.kr">SNU IPAI<br/>(AI Graduate School supported by the Ministry of Science and ICT at South Korea Government)</A></Text>
                    <Text style={{fontStyle: "italic"}} opacity="0.7" mb="30px">2023 ~ Present</Text>
                    <Text size="20px" weight="500" mb="10px">Korea University</Text>
                    <Text size="18px" weight="300" lh="1.5" mb="0px">BEngg, Interdisciplinary Major in Artificial Intelligence (2nd Major, Seoul)</Text>
                    <Text size="18px" weight="300" lh="1.5" mb="10px">BBA, Digital Business in Division of Convergence Business (1st Major, Sejong)</Text>
                    <Text style={{fontStyle: "italic"}} opacity="0.7">2018 ~ 2022</Text>
                </Col>
                <Col mb="50px">
                    <Text size="25px" mb="30px" weight="600" style={{alignSelf: "center"}}>Publications</Text>
                    <Row align="center">
                        <Flex width="170px" height="120px" overflow="hidden" br="20px" align="center" justify="center">
                            <Image width="100%" height="100%" src={qlid} />
                        </Flex>
                        <Col ml="30px">
                            <Text size="18px" weight="600" mb="10px"><A>Causal Dynamics Learning with Quantized Local Independence Discovery</A></Text>
                            <Text size="18px" weight="300" mb="10px" opacity="0.8">Inwoo Hwang, Yunhyeok Kwak, <span style={{fontWeight: 600}}>Suhyung Choi</span>, Byoung-Tak Zhang*, <A target="_blank" to="https://www.sanghacklee.me/">Sanghack Lee*</A>.</Text>
                            <Text size="18px" weight="300" mb="10px"><span style={{fontWeight: 600}}>ICML Workshop</span> on Spurious Correlations, Invariance, and Stability, 2023</Text>
                            <Text size="18px" weight="300" ><A>Paper</A> / <A target="_blank" to="https://sites.google.com/view/scis-workshop-23/home">Workshop</A></Text>
                        </Col>
                    </Row>
                </Col>
                <Col mb="50px">
                    <Text size="25px" mb="30px" weight="600" style={{alignSelf: "center"}}>Experiences</Text>
                    <Text size="18px" weight="600" mb="10px">Core Computing: Thinking with Computers (L0444.000500)</Text>
                    <Text size="18px" weight="300"><span style={{fontWeight: 600}}>Teaching Assistant</span>, Seoul National University, 2023 Spring</Text>
                </Col>
            </Col>
        </Screen>
    )
};

export default About;