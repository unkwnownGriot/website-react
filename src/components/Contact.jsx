import React from 'react';
import styled from 'styled-components';
import Map from '../img/map.png'
import Phone from '../img/phone.png'
import Send from '../img/send.png'
const Container = styled.div`
    height: 90%;
    background: url(https://storage.googleapis.com/subtlepatterns-production/designers/subtlepatterns/uploads/double-bubble-outline.png);
`

const Wrapper = styled.div`
    height: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width:480px) {
        flex-direction: column;
    }
`
const FormContainer = styled.div`
    width: 50%;
    @media only screen and (max-width:480px) {
       width: 100%;
    }
`

const Title = styled.h1`
    margin: 50px;
    margin-top: 0px;
    @media only screen and (max-width:480px) {
       margin: 20px;
    }
`
const Form = styled.form`
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width:480px) {
       flex-direction: column;
    }
`

const LeftForm = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 20px;
    @media only screen and (max-width:480px) {
       height: 50%;
       margin-right: 0;
    }
`
const RightForm = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media only screen and (max-width:480px) {
      height: 50%;
    }
`

const Input = styled.input`
    width: 200px;
    padding: 20px;
    outline: none;
    @media only screen and (max-width:480px) {
       padding: 5px;
    }
`
const TextArea = styled.textarea`
    width: 200px;
    outline: none;
    height: 60%;
    padding: 20px;
    @media only screen and (max-width:480px) {
      padding: 5px;
      margin-top: 20px;
    }
`

const Button = styled.button`
    &:hover{
        background-color: green;
    }
    border: none;
    padding: 15px;
    color: #fff;
    background-color: #479747;
    border-radius: 10px;
    font-size: 20px;
    cursor: pointer;
    margin-top: 20px;
    @media only screen and (max-width:480px) {
       padding: 5px;
       font-size: 14px;
    }
`
const AdressContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 50px;
    @media only screen and (max-width:480px) {
       width: 100%;
       margin-top: 20px;
    }
`

const AdressItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    @media only screen and (max-width:480px) {
      margin-bottom: 20px;
    }
`
const AdressIcon = styled.img`
    width: 20px;
    margin-right: 10px;
    @media only screen and (max-width:480px) {
       width: 15px;
    }
`
const AdressText = styled.span`
    font-size: 17px;
    margin-right: 26px;
    @media only screen and (max-width:480px) {
      font-size: 14px;
    }
`
const Contact = () => {
    return (
        <Container>
            <Wrapper>
                <FormContainer>
                    <Title>Questions ? <br /> Let us know </Title>
                    <Form>
                        <LeftForm>
                            < Input placeholder='your Name'/>
                            <Input placeholder='your Email'/>
                            <Input placeholder='Subject'/>
                        </LeftForm>
                        <RightForm>
                            <TextArea placeholder='your Message'/>
                            <Button>Send</Button>
                        </RightForm>
                        
                    </Form>
                </FormContainer>
                <AdressContainer>
                    <AdressItem>
                        <AdressIcon src={Map}/>
                        <AdressText>221B Baker St, London, United Kingdom </AdressText>
                    </AdressItem>
                    <AdressItem>
                        <AdressIcon src={Phone}/>
                        <AdressText>+44 513 1120 0924</AdressText>
                        <AdressText>+44 491 5210 9420</AdressText>
                    </AdressItem>
                    <AdressItem>
                        <AdressIcon src={Send}/>
                        <AdressText>Contact@elsam.dev </AdressText>
                        <AdressText>Sales@elsam.dev </AdressText>
                    </AdressItem>
                </AdressContainer>
            </Wrapper>
        </Container>
    );
};

export default Contact;