import React from 'react';
import styled from 'styled-components'
import Icon from './Icon'
import Tag from './Tag'

const CardBodySectionContainer = styled.div`
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
const CardBodySectionContent = styled.div`
    display: flex;
    flex-wrap:wrap;
`


const CardBodySection = (props) => {
    return (
        <div>
            <CardBodySectionContainer>
                <CardBodySectionHeader>
                    <Icon />
                    <h3>{props.sectionTitle}</h3>
                </CardBodySectionHeader>
                <CardBodySectionContent>
                    {props.sectionData.map(data => {
                        return <Tag key={data} tagContent={data} />
                    })}
                </CardBodySectionContent>
            </CardBodySectionContainer>
        </div>
    );
};

export default CardBodySection;