import React from 'react';
import styled from 'styled-components'
import {FiZap} from "react-icons/fi"

const IconContainer = styled.div`
    width: ${props=>props.theme.margin.s};
    height: ${props=>props.theme.margin.s};
    border-radius: 50%;
    padding:${props=>props.theme.margin.xs};
    font-size: ${props => props.theme.fontSize.s};
    color:${props=> props.theme.color.grey};
`

const Icon = () => {
    return (
        <IconContainer>
            <FiZap/>
        </IconContainer>
    );
};

export default Icon;