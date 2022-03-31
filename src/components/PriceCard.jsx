import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    padding: 20px;
    box-shadow: 0px 0px 17px -11px rgba(0,0,0,0.58);
    -webkit-box-shadow: 0px 0px 17px -11px rgba(0,0,0,0.58);
    background-color:#fff ;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 50px;
    @media only screen and (max-width:480px) {
       margin-right: 0;
       margin-bottom: 10px;
       padding: 10px;
    }
`
const PriceContainer = styled.div`
    display: flex;
    align-items: center;
`
const Price = styled.span`
    font-weight: bold;
    font-size: 50px;
    @media only screen and (max-width:480px) {
        font-size: 30px;
    }
    `
const Type = styled.button`
    padding: 10px;
    margin: 10px 0px;
    border: 1.5px solid crimson;
    color: crimson;
    background-color: #fff;
    border-radius: 20px;
    @media only screen and (max-width:480px) {
        display: none;
    }
`
const List = styled.ul`
    list-style:none;
    
    `


const ListItem = styled.li`
    margin: 30px 0px;
    @media only screen and (max-width:480px) {
        margin: 20px;
        font-size: 12px;
    }
`
const Button = styled.button`
    border: none;
    background-color: darkblue;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    padding: 15px;
    border-radius: 10px;
    cursor: pointer;
    @media only screen and (max-width:480px) {
        font-size: 12px;
        padding: 5px;
    }
`

const PriceCard = ({price,type}) => {
    return (
        <Container>
            <PriceContainer>
                $<Price>{price} </Price>/month
            </PriceContainer>
                <Type>{type} plan</Type>
                <List>
                    <ListItem>200 hand-crafted templates</ListItem>
                    <ListItem>Exclusive support</ListItem>
                    <ListItem>+50 Prebuilt websites</ListItem>
                    <ListItem>Prenium plugins</ListItem> {" "}
                </List>
                <Button>Join Now</Button>
        
        </Container>
    );
};

export default PriceCard;