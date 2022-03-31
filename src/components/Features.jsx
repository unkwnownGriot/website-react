import React from 'react';
import styled from 'styled-components';
import Hand from '../img/hand.png'
import AnimatedShapes from './AnimatedShapes'

const Container = styled.div`
    display: flex;
    @media only screen and (max-width:480px) {
        flex-direction: column;
        padding: 30px 20px;
    }
`
const Left = styled.div`
    display: flex;
    width: 50%;
    @media only screen and (max-width:480px) {
        display: none;
    }
`
const Image = styled.img`
   margin-top: -22%;
`
const Right = styled.div`
width: 50%;
display: flex;
flex-direction: column;
justify-content: center;
@media only screen and (max-width:480px) {
        width: 100%;
    }
`
const Title = styled.span`
    font-size: 50px;
    @media only screen and (max-width:480px) {
        font-size: 40px;
    }
`
const SubTitle = styled.span`
    font-size: 20px;
    font-style: italic;
    color: #333;
    margin-top: 30px;
`
const Desc = styled.p`
    font-size: 20px;
    color: #777;
    margin-top: 30px;
`

const Button = styled.button`
    width: 150px;
    padding: 15px 20px;
    border: none ;
    background-color: darkblue;
    color: #fff;
    font-size: 20px;
    border-radius: 20px;
    cursor: pointer;
    margin-top: 10px;
`

const Features = () => {
    return (
        <Container>
            <Left>
                <Image src={Hand}/>
            </Left>
            <Right>
                <Title><b>good</b> design <br />
                <b>good</b> business </Title>
                <SubTitle>We know that good designs make the difference </SubTitle>
                <Desc>
                    we help our clients succeed by creating brand identities,suitable design,
                    experiences, and print materials that  communicate clearly, achieve their 
                    marketing goals, and look professional
                </Desc>
                <Desc>
                we take care of your business and we guarantee you to achieve your amrketing goals
                </Desc>
                <Button>Learn More</Button>
            </Right>
            <AnimatedShapes/>
        </Container>
    );
};

export default Features;