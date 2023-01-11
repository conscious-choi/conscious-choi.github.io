import React, {useEffect, useState} from 'react';
import {Row, Text, Link} from './index'
import Logo from './logo';
import { MainEvent } from '../contexts';

export const Header = ({}) => {
    const {goMain} = MainEvent();
    const [opacity, setOpacity] = useState(0);
    useEffect(() => {
        const opaciter = () => {
            goMain && setTimeout(() => setOpacity(1), 1500);
        };
        opaciter();
    }, [goMain]);
    return (
        <>
            {goMain && <Row width="100vw" align="center" ptb="20px" prl="25px" position="fixed" opacity={opacity} style={{left: 0, top: 0, transition: "all 500ms"}} zIndex={10000}>
                <Link to="/">
                    <Logo width={50} height={55} />
                </Link>
                <Row>
                    <Link>
                        <Text>

                        </Text>
                    </Link>
                    <Link>
                        <Text>
                            
                        </Text>
                    </Link>
                </Row>
            </Row>}
        </>
    )
}

export default Header;