import React from 'react';
import styled from "styled-components"
const Square = styled.div`
    width: 40px;
    height: 40px;
    background-color: #4e67e4;
    opacity: 0.7;
    position: absolute;
    top: -60px;
    left: -60px;
    z-index: -1;
    animation: moovSquare 25s linear alternate infinite;

    @keyframes moovSquare {
        to{
            transform: translate( 100vw,100vh);
        }
    }
`

const Circle = styled.div`
    width: 50px;
    height: 50px;
    border-radius:50% ;
    background-color: #ff97af;
    position: absolute;
    top: 200px;
    left: -100px;
    z-index: -1;
    animation:  moovCircle 25s linear alternate infinite;

    @keyframes moovCircle {
        to{
            transform: translate( 100vw,-100vh);
        }
    }
`
const Rectangle = styled.div`
    width: 20px;
    height: 70px;
    background-color: #669966;
    opacity: 0.5;
    position: absolute;
    top: 400px;
    left: -50px;
    z-index: -1;
    animation: moovRectangle 25s linear alternate infinite;

    @keyframes moovRectangle {
        to{
            transform: translate( 100vw,-50vh);
        }
    }
`


const AnimatedShapes = () => {
    return (
        <>
            <Square/>
            <Circle/>
            <Rectangle/>
        </>
        
    );
};

export default AnimatedShapes;