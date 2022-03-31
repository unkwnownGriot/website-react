import React,{useState} from 'react';
import styled from 'styled-components'
import ServiceImg from '../img/service.png'
import Card from './Card';
import Icon from "../img/play.png"
import videoFile from '../video/detective conan.mp4'
const Container = styled.div`
    display: flex;
    height: 100%;
    @media only screen and (max-width:480px) {
       flex-direction: column;
    }
`

const Left = styled.div`
    width: 50%;
   position: relative;
   @media only screen and (max-width:480px) {
        display: none;
    }
`

const Image = styled.img`
    display: ${props=> props.open && "none"};
    height: 100%;
`
const Video = styled.video`
    display: ${props=> !props.open && "none"};
    height: 200px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    @media only screen and (max-width:480px) {
       width: 100%;
    }
`

const Right = styled.div`
    width: 55%;
    @media only screen and (max-width:480px) {
        width: 100%;
    }
`

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    flex-direction: column;
    @media only screen and (max-width:480px) {
        padding: 20px;
    }
`

const Title = styled.h1`
    font-size: 40px;
`
const Desc = styled.p`
    font-size: 20px;
    margin-top: 20px;
    color: #555;
`

const CardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`
const Button = styled.button`
    width: 180px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    background-color: darkblue;
    font-size: 20px;
    color: #fff;
    padding: 15px;
    display: flex;
    align-items: center;
    margin-top: 20px;
`
const IconImage = styled.img`
    width: 20px;
    margin-right: 10px;

`

const Modal = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.4);
`
const CloseButton = styled.button`
    position: absolute;
    background-color: #fff;
    border: none;
    padding: 5px;
    border-radius: 5px;
    right: 5px;
    top: 35%;
`

const Services = () => {
    const smallScreen = window.screen.width <= 480 ? true : false
    const [open,setOpen] = useState(false)
    return (
        <Container>
            <Left>
                <Image open={open} src={ServiceImg}/>
                <Video open={open} 
                autoPlay 
                muted
                loop 
                controls 
                src={videoFile} />
            </Left>
            <Right>
                <Wrapper>
                    <Title>Simple Process to start</Title>
                    <Desc>
                        We provide digital experienced ressources to startups and small
                        company to looking for a partner of their digital media, design & developpment
                         tools , lead generation and communications requirements.
                        We work with you, not for you. Although we have good ressources
                    </Desc>
                    <CardContainer>
                        <Card/>
                        <Card/>
                        <Card/>
                    </CardContainer>
                    <Button onClick={()=>setOpen(true)}>
                        <IconImage src={Icon} /> 
                        How it works
                    </Button>
                </Wrapper>
            </Right>
            {open && smallScreen &&(
                <Modal>
                    <Video 
                    open={open} 
                    autoPlay 
                    loop 
                    muted
                    controls 
                    src={videoFile}/>
                    <CloseButton onClick={()=>setOpen(false)}>Close</CloseButton>
                </Modal>
            ) }
        </Container>
    );
};

export default Services;