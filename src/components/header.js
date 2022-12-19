import React, {useState} from 'react';
import {Row, Text} from './index'
import Logo from './logo';

export const Header = ({}) => {
    return (
        <Row width="100vw" align="center" ptb="20px" prl="25px" position="fixed" style={{left: 0, top: 0}}>
            <Logo width={50} height={55} />
        </Row>
    )
}

export default Header;