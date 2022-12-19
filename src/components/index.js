import React from "react";
import styled from "styled-components";
import {ThemeEvent} from '../contexts';
import { Link as link } from 'react-router-dom';

export const Text = styled.span`
    font-weight: ${props => props.weight};
    font-size: ${props => props.size ? (typeof(props.size) === "number" ? props.size + "px" : props.size) : 15 + "px"};
    line-height: ${props => (typeof(props.lh) === "number" ? props.lh + "px" : props.lh)};
    color: ${props => props.color ? props.color : ThemeEvent().theme === "day" ? "black" : "white"};
    margin: ${props => props.margin ? (typeof(props.margin) === "number" ? props.margin + 'px' : props.margin) : null};
    margin-left: ${props => !props.margin && (props.ml || props.mlr) ? (props.ml ? props.ml : props.mrl) : null};
    margin-right: ${props => !props.margin && (props.mr || props.mlr) ? (props.mr ? props.mr : props.mrl) : null};
    margin-top: ${props => !props.margin && (props.mt || props.mtb) ? (props.mt ? props.mt : props.mtb) : null};
    margin-bottom: ${props => !props.margin && (props.mb || props.mtb) ? (props.mb ? props.mb : props.mtb) : null};
    padding: ${props => props.padding ? (typeof(props.padding) === "number" ? props.padding + 'px' : props.padding) : null};
    padding-left: ${props => !props.padding && (props.pl || props.prl) ? (props.pl ? props.pl : props.prl) : null};
    padding-right: ${props => !props.padding && (props.pr || props.prl) ? (props.pr ? props.pr : props.prl) : null};
    padding-top: ${props => !props.padding && (props.pt || props.ptb) ? (props.pt ? props.pt : props.ptb) : null};
    padding-bottom: ${props => !props.padding && (props.pb || props.ptb) ? (props.pb ? props.pb : props.ptb) : null};
    flex: ${props => props.flex};
    z-index: ${(props) => props.zIndex};
    ${props => props.to ? `cursor: pointer;:hover {${props.to}}}` : null};
    ${props => props.us === "none" ? "user-select: none" : null};
    letter-spacing: 0.25px;
    opacity: ${(props) => props.opacity};
    font-family: ${(props) => props.ff ? props.ff : 'Outfit'};
    overflow: ${(props) => props.overflow};
    text-shadow: ${(props) => props.textshadow && '1.5px 1.5px 1.5px rgba(20, 20, 20, 0.9)'};
    transition: all 500ms;
`;

export const Flex = styled.div`
    display: flex;
    align-items: ${props => props.align};
    justify-content: ${props => props.justify};
    margin: ${props => props.margin ? (typeof(props.margin) === "number" ? props.margin + 'px' : props.margin) : null};
    margin-left: ${props => !props.margin && (props.ml || props.mlr) ? (props.ml ? props.ml : props.mrl) : null};
    margin-right: ${props => !props.margin && (props.mr || props.mlr) ? (props.mr ? props.mr : props.mrl) : null};
    margin-top: ${props => !props.margin && (props.mt || props.mtb) ? (props.mt ? props.mt : props.mtb) : null};
    margin-bottom: ${props => !props.margin && (props.mb || props.mtb) ? (props.mb ? props.mb : props.mtb) : null};
    width: ${props => props.size ? props.size : props.width};
    height: ${props => props.size ? props.size : props.height};
    background-color: ${props => props.bg};
    padding: ${props => props.padding ? (typeof(props.padding) === "number" ? props.padding + 'px' : props.padding) : null};
    padding-left: ${props => !props.padding && (props.pl || props.prl) ? (props.pl ? props.pl : props.prl) : null};
    padding-right: ${props => !props.padding && (props.pr || props.prl) ? (props.pr ? props.pr : props.prl) : null};
    padding-top: ${props => !props.padding && (props.pt || props.ptb) ? (props.pt ? props.pt : props.ptb) : null};
    padding-bottom: ${props => !props.padding && (props.pb || props.ptb) ? (props.pb ? props.pb : props.ptb) : null};
    border-radius: ${props => props.circle ? '50%' : props.br};
    box-sizing: border-box;
    border-radius: ${(props) => props.br}px;
    flex: ${props => props.flex};
    z-index: ${props => props.zIndex};
    ${props => props.to ? `cursor: pointer;:hover {${props.to}}}` : null};
    ${props => props.us === "none" ? "user-select: none" : null};
    opacity: ${props => props.opacity};
    position: ${props => props.position};
    ${(props) => props.shadow && `
        transition: 
            background-color .3s,
            color .3s,
            box-shadow .3s; 
        box-shadow: 
            0 0 0.1rem rgb(0 0 0 / 10%), 
            0 0.15rem 0.9rem rgb(0 0 0 / 10%);
        `}
    ${(props) => props.scrollbarFalse && `
    ::-webkit-scrollbar {
        display: none;
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;
      }`};
    ${(props) => (props.bw || props.bc) && `border: ${props.bw}px solid ${props.bc}`};
    overflow: ${(props) => props.overflow};
    ${(props) => props.svgcolor && `svg {
        ${(props) => (props.svgcolor.day.circle || props.svgcolor.dark.circle) && `circle {
            fill: ${(props) => ThemeEvent().theme === "day" ? props.svgcolor.day.circle.fill : props.svgcolor.dark.circle.fill};
            stroke: ${(props) => ThemeEvent().theme === "day" ? props.svgcolor.day.circle.stroke : props.svgcolor.dark.circle.stroke};
        }`}
        ${(props) => (props.svgcolor.day.line || props.svgcolor.dark.line) && ` line {
            stroke: ${(props) => ThemeEvent().theme === "day" ? props.svgcolor.day.line.stroke : props.svgcolor.dark.line.stroke};
        }`}
        ${(props) => (props.svgcolor.day.path || props.svgcolor.dark.path) && `path {
            fill: ${(props) => ThemeEvent().theme === "day" ? props.svgcolor.day.path.fill : props.svgcolor.dark.path.fill};
        }`}
    }`};
    ${(props) => (props.bgday || props.bgdark) && `{
        background-color: ${ThemeEvent().theme === "day" ? props.bgday : props.bgdark};
    }`};
    transition: all 500ms;
`;

export const Screen = styled(Flex)`
    align-items: flex-start;
    justify-content: flex-start;
    width: ${props => props.width ? props.width : '100vw'};
    background-color: ${props => !(props.bgdark || props.bgday) && (props.bg ? props.bg : ThemeEvent().theme === "day" ? "white" : "black")};
`

export const Row = styled(Flex)`
    flex-direction: row;
`;

export const Col = styled(Flex)`
    flex-direction: column;
`;

export const Box = styled(Col)`
    transition: background-color .3s,color .3s,box-shadow .3s;
    box-shadow: 0 0 0.1rem rgb(0 0 0 / 10%), 0 0.15rem 0.9rem rgb(0 0 0 / 10%);
    border: 0;
    ::-webkit-scrollbar {
        display: none;
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;
      }
`;

export const Image = styled.img`
    position: ${props => props.position};
    object-fit: ${props => props.of};
    margin: ${props => props.margin ? (typeof(props.margin) === "number" ? props.margin + 'px' : props.margin) : null};
    width: ${props => props.width};
    height: ${props => props.height};
    opacity: ${props => props.opacity};
    z-index: ${(props) => props.zIndex};
`;

export const ImageWrapper = styled(Flex)`
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    overflow: hidden;
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    background-color: ${(props) => props.bg};
`;

export const CirclePic = ({image, size, flex, margin, bg, of, style, scale = 1}) => {
    return (
        <ImageWrapper style={style} bg={bg} margin={margin} width={size} height={size} flex={flex}>
            <Image of={of} width={size+'px'} height={size+'px'} style={{transform: `scale(${scale})`}} src={image}/>
        </ImageWrapper>
    )
}

export const Input = styled.input`
    margin: ${props => props.margin ? (typeof(props.margin) === "number" ? props.margin + 'px' : props.margin) : null};
    margin-left: ${props => !props.margin && (props.ml || props.mlr) ? (props.ml ? props.ml : props.mrl) : null};
    margin-right: ${props => !props.margin && (props.mr || props.mlr) ? (props.mr ? props.mr : props.mrl) : null};
    margin-top: ${props => !props.margin && (props.mt || props.mtb) ? (props.mt ? props.mt : props.mtb) : null};
    margin-bottom: ${props => !props.margin && (props.mb || props.mtb) ? (props.mb ? props.mb : props.mtb) : null};
    width: ${props => props.width};
    height: ${props => props.height};
    background-color: ${props => props.bg};
    padding: ${props => props.padding ? (typeof(props.padding) === "number" ? props.padding + 'px' : props.padding) : null};
    padding-left: ${props => !props.padding && (props.pl || props.prl) ? (props.pl ? props.pl : props.prl) : null};
    padding-right: ${props => !props.padding && (props.pr || props.prl) ? (props.pr ? props.pr : props.prl) : null};
    padding-top: ${props => !props.padding && (props.pt || props.ptb) ? (props.pt ? props.pt : props.ptb) : null};
    padding-bottom: ${props => !props.padding && (props.pb || props.ptb) ? (props.pb ? props.pb : props.ptb) : null};
    border-radius: ${props => props.circle ? '50%' : props.br};
    box-sizing: border-box;
    flex: ${props => props.flex};
    z-index: ${props => props.zIndex};
    font-weight: ${props => props.weight};
    font-size: ${props => props.size ? props.size : 15}px;
    line-height: ${props => props.lh}px;
    color: ${props => props.color};
    border: 0;
    color: ${(props) => props.color ? props.color : (ThemeEvent().theme === "day" ? "white" : "black")};
    ::placeholder {
        color: ${(props) => props.placeholderTextColor};
    };
`;

export const TextArea = styled.textarea`
    margin: ${props => props.margin ? (typeof(props.margin) === "number" ? props.margin + 'px' : props.margin) : null};
    margin-left: ${props => !props.margin && (props.ml || props.mlr) ? (props.ml ? props.ml : props.mrl) : null};
    margin-right: ${props => !props.margin && (props.mr || props.mlr) ? (props.mr ? props.mr : props.mrl) : null};
    margin-top: ${props => !props.margin && (props.mt || props.mtb) ? (props.mt ? props.mt : props.mtb) : null};
    margin-bottom: ${props => !props.margin && (props.mb || props.mtb) ? (props.mb ? props.mb : props.mtb) : null};
    width: ${props => props.width};
    height: ${props => props.height};
    background-color: ${props => props.bg};
    padding: ${props => props.padding ? (typeof(props.padding) === "number" ? props.padding + 'px' : props.padding) : null};
    padding-left: ${props => !props.padding && (props.pl || props.prl) ? (props.pl ? props.pl : props.prl) : null};
    padding-right: ${props => !props.padding && (props.pr || props.prl) ? (props.pr ? props.pr : props.prl) : null};
    padding-top: ${props => !props.padding && (props.pt || props.ptb) ? (props.pt ? props.pt : props.ptb) : null};
    padding-bottom: ${props => !props.padding && (props.pb || props.ptb) ? (props.pb ? props.pb : props.ptb) : null};
    border-radius: ${props => props.circle ? '50%' : props.br};
    box-sizing: border-box;
    flex: ${props => props.flex};
    z-index: ${props => props.zIndex};
    font-weight: ${props => props.weight};
    font-size: ${props => props.size ? props.size : 15}px;
    line-height: ${props => props.lh}px;
    color: ${props => props.color};
    border: 0;
    color: ${(props) => props.color ? props.color : (ThemeEvent().theme === "day" ? "white" : "black")};
    ::placeholder {
        color: ${(props) => props.placeholderTextColor};
    };
    resize: none;
    ::-webkit-scrollbar {
        display: none;
    }
`;

export const Link = styled(link)`
    text-decoration: none;
`;


export const HoverFlex = styled(Flex)`
    :hover {
        svg {
            ${(props) => (props.hover.day.circle || props.hover.dark.circle) && ` circle {
                fill: ${ThemeEvent().theme === "day" ? props.hover.day.circle.fill : props.hover.dark.circle.fill};
                stroke: ${ThemeEvent().theme === "day" ? props.hover.day.circle.stroke : props.hover.dark.circle.stroke};
            }`}
            ${(props) => (props.hover.day.line || props.hover.dark.line) && `line {
                stroke: ${ThemeEvent().theme === "day" ? props.hover.day.line.stroke : props.hover.dark.line.stroke};
            }`}
             ${(props) => (props.hover.day.path || props.hover.dark.path) && `path {
                fill: ${ThemeEvent().theme === "day" ? props.hover.day.path.fill : props.hover.dark.path.fill};
            }`}
        }
    };
    cursor: pointer;
`;