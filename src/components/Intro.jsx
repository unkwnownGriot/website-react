import React from 'react';
import styled from 'styled-components';
import IntroImg from "../img/intro2.png"
import AnimatedShapes from './AnimatedShapes';
const Container = styled.div`
    height: calc( 100vh - 50px );
    display: flex;
    padding: 20px;
    @media only screen and (max-width:480px) {
        flex-direction: column;
    }
`
const Left = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
@media only screen and (max-width:480px) {
        width: 100%;
        height: 100%;
    }

`
const Title = styled.h1`
    font-size: 60px;
    width: 60%;
    @media only screen and (max-width:480px) {
        width: 100%;
        font-size: 50px;
    }
`
const Desc = styled.p`
    width: 60%;
    font-size: 20px;
    margin-top: 20px;
    @media only screen and (max-width:480px) {
        width: 100%;
    }
`

const Info = styled.div`
    width: 60%;
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media only screen and (max-width:480px) {
        width: 100%;
        flex-direction: column;
    }
`

const Button = styled.button`
    padding: 15px;
    background-color: darkblue;
   color: #fff;
   border-radius: 10px;
   border: none;
   cursor: pointer;
   font-weight: bold;
   letter-spacing: 2px;
   @media only screen and (max-width:480px) {
        margin-bottom: 20px;
    }
`

const Contact = styled.div`
    display: flex;
    flex-direction: column;
    
`

const Phone = styled.span`
    color: #f0667d;
    font-weight: bold;
`
const ContactText = styled.span`
    color: gray;
    margin-top: 5px;
`

const Right = styled.div`
width: 40%;
position: relative;
@media only screen and (max-width:480px) {
        display: none;
    }
`
const Image = styled.img`
position: absolute;
top: -40%;
left: -50%;
`



const Intro = () => {
    return (
        <Container>
            <Left>
                <Title>Adventures in Creative Mode</Title>
                <Desc>
                    we sincerely believe that offering products and services designed
                     in perfect harmony with our customers is the real way to have a 
                     real impact on their business
                </Desc>
                <Info>
                    <Button>START A PROJECT</Button>
                    <Contact>
                        <Phone>Call Us (016) 543 - 6978 </Phone>
                        <ContactText>For all your requests or concerns</ContactText>
                    </Contact>
                </Info>
            </Left>
            <Right>
                <Image src={IntroImg }/>
            </Right>
            <AnimatedShapes/>
        </Container>
    );
};

export default Intro;