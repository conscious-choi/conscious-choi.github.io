import React from 'react';
import { createGlobalStyle } from "styled-components";
import { ThemeEvent } from "../contexts";
import reset from 'styled-reset';

export const themeInverser = () => ThemeEvent().theme === "day" ? "black" : "white";
export const themeNonInverser = () => ThemeEvent().theme === "day" ? "white" : "black";
export const themeTexter = () => ThemeEvent().theme === "day" ? "black" : "rgb(200, 200, 211)"

export const Globalstyle = createGlobalStyle`
    ${reset};
    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow: hidden;
        overflow-y: scroll;
        background-color: ${props => props.theme === "dark" ? "black" : "white"}
    };
    #root {
        background-color: ${props => props.theme === "dark" ? "black" : "white"}
    }
    /*-----------FONTS----------*/

    @font-face {
        font-family: 'telegrafico';
        src: local('telegrafico'), url(src\styles\telegrafico.ttf) format('ttf');
    };
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    };

    /*-----------a tag-----------*/

    a {
        color: ${props => props.theme === "dark" ? "white" : "black"}
    }

    /*-----------SCROLL BAR---------*/
    ::-webkit-scrollbar {
        width: 5px;
    };
    /* Track */
    ::-webkit-scrollbar-track {
        background: rgba(0,0,0,0); 
    };
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #555; 
    };
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #333; 
    };

`

export const GlobalStyle = () => <Globalstyle theme={ThemeEvent().theme}/>

export default GlobalStyle