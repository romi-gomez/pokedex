import React from 'react';
import styled from 'styled-components'

const CardContainer = styled.div`
    display: grid;
    grid-template-columns:${props => props.layout === "horizontal" ? "1fr 1fr" : ""};
    grid-template-rows:${props => props.layout === "vertical" ? "1fr 1fr" : ""};
`



const Card = (props) => {
    return (
        <CardContainer cardLayout={props.layout}>

        </CardContainer>
    );
};

export default Card;