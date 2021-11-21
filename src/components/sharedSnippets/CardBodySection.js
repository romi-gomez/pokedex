import React from 'react';
import styled from 'styled-components'
import {FiZap} from "react-icons/fi"
import Tag from './Tag'

const CardBodySectionContainer = styled.div`
    padding: ${props => props.theme.margin.xs};
`
const CardBodySectionHeader = styled.div`
    display: flex;
    margin-bottom:${props => props.theme.margin.s};
    border-bottom: 1px dashed ${props=> props.theme.color.highlightLight};

        h3 {
        margin: ${props => props.theme.margin.xs};
        margin-left: ${props => props.theme.margin.s};
        font-size: ${props => props.theme.fontSize.s};
        font-weight:700;
        color: ${props => props.theme.color.grey}
    }
`
const IconContainer = styled.div`
    width: ${props=>props.theme.margin.s};
    height: ${props=>props.theme.margin.s};
    border-radius: 50%;
    padding:${props=>props.theme.margin.xs};
    font-size: ${props => props.theme.fontSize.s};
    color:${props=> props.theme.color.grey};
`

const CardBodySectionContent = styled.div`
    display: flex;
    flex-wrap:wrap;
`

const CardBodySection = (props) => {
    return (
        <div>
            <CardBodySectionContainer>
                <CardBodySectionHeader>
                    <IconContainer>
                        <FiZap/>                   
                    </IconContainer>
                    <h3>{props.sectionTitle}</h3>
                </CardBodySectionHeader>
                <CardBodySectionContent>
                    {props.sectionData.slice(0,7).map(data => {
                        return <Tag key={data} tagContent={data} />
                    })}
                </CardBodySectionContent>
            </CardBodySectionContainer>
        </div>
    );
};

export default CardBodySection;