import React from 'react';
import {Row, Text} from './index'
import {CircleLogo} from '../contents/logo';

export const Logo = ({width, height, textSize = 24, marginLeft = 15}) => {
    return (
        <Row align="center" justify="center" us="none" to="cursor">
            <CircleLogo width={width} height={height} />
            <Text ml={`${marginLeft}px`} size={textSize} mt="5px" ff="outfit" weight="300">CONSCIOUSNESS</Text>
        </Row>
    )
}

export default Logo;