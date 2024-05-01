import React, {useEffect, useState} from 'react';
import {Row, Text, Link} from './index'
import Logo from './logo';
import { MainEvent } from '../contexts';

export const Header = ({}) => {
    const {goMain, showMain} = MainEvent();
    const [opacity, setOpacity] = useState(0);
    
    useEffect(() => {
        const opaciter = () => {
            if (showMain) {
                setOpacity(1)
            } else {
                goMain && setTimeout(() => setOpacity(1), 1500);
            }
        };
        opaciter();
    }, [goMain, showMain]);
    return (
        <>
            {goMain && <Row width="100vw" align="center" justify="space-between" ptb="20px" prl="35px" position="fixed" opacity={opacity} style={{left: 0, top: 0, transition: "all 500ms"}} zIndex={10000}>
                <Link to="/">
                    <Logo width={50} height={55} />
                </Link>
                <Row>
                    <Link>
                        <Text>

                        </Text>
                    </Link>
                    <Link to="/about">
                        <Text size="15px" weight="500">
                            ABOUT
                        </Text>
                    </Link>
                </Row>
            </Row>}
        </>
    )
}

export default Header;