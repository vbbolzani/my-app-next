'use client'

import styled from "styled-components";

export const Body = styled.body`
    padding: 0;
    margin: 0;
    outline: none;
    box-sizing: border-box;
    min-height: 100vh;
    min-width: 100vw;
    *{
        padding: 0;
        margin: 0;
        outline: none;
        box-sizing: border-box;
    }

    h1{
        font-size: 64px;
    }
    h2{
        font-size: 32px;
    }
    h3{
        font-size: 24px;
    }
    h4{
        font-size: 18px;
    }
    h5{
        font-size: 16px;
    }
`

export const Main = styled.main`
    background-color: #1b1b1b;
    min-height: 100vh;
    min-width: 100vw;
`

export const FlexBox = styled.div`
    display: flex;
    height: ${props => props.size == 'full' ? '100vh' : 'max-content'};
    width: ${props => props.size == 'full' ? '100vw' : 'max-content'};
    flex-direction: ${props => props.direction == 'row' ? 'row' : 'column'};
    justify-content: ${props => 
        props.justify == 'center' ? 'center' :
        props.justify == 'start' ? 'start' :
        props.justify == 'end' ? 'end' :
        props.justify == 'flex-start' ? 'flex-start' :
        props.justify == 'flex-end' ? 'flex-end' :
        props.justify == 'left' ? 'left' :
        props.justify == 'right' ? 'right' :
        props.justify == 'space-between' ? 'space-between' :
        props.justify == 'space-around' ? 'space-around' :
        props.justify == 'space-evenly' ? 'space-evenly' :
        props.justify == 'stretch' ? 'stretch' :
        props.justify == 'safe center' ? 'safe center' :
        props.justify == 'unsafe center' ? 'unsafe center' :
        props.justify == 'inherit' ? 'inherit' :
        props.justify == 'initial' ? 'initial' :
        props.justify == 'revert' ? 'revert' :
        props.justify == 'revert-layer' ? 'revert-layer' :
        props.justify == 'unset' ? 'unset' : 'center'
    };
    align-items: ${props => 
        props.align == 'normal' ? 'normal' :
        props.align == 'stretch' ? 'stretch' :
        props.align == 'center' ? 'center' :
        props.align == 'start' ? 'start' :
        props.align == 'end' ? 'end' :
        props.align == 'flex-start' ? 'flex-start' :
        props.align == 'flex-end' ? 'flex-end' :
        props.align == 'self-start' ? 'self-end' :
        props.align == 'right' ? 'right' :
        props.align == 'baseline' ? 'baseline' :
        props.align == 'first baseline' ? 'first baseline' :
        props.align == 'last baseline' ? 'last baseline' :
        props.align == 'safe center' ? 'safe center' :
        props.align == 'unsafe center' ? 'unsafe center' :
        props.align == 'inherit' ? 'inherit' :
        props.align == 'initial' ? 'initial' :
        props.align == 'revert' ? 'revert' :
        props.align == 'revert-layer' ? 'revert-layer' :
        props.$align == 'unset' ? 'unset' : 'center'
    };
`