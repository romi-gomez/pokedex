import React from 'react';
import styled, {withTheme} from 'styled-components';

const TagContainer = styled.div`
    align-self:center;
    justify-self: end;
    margin-left:${props => props.theme.margin.xs};
    padding: ${props => props.theme.margin.xs} ${props => props.theme.margin.s};
    margin-bottom:${props => props.theme.margin.xs};
    border-radius:${props => props.theme.margin.s};
    font-size:${props => props.theme.fontSize.xs};
    font-weight:700; 

    background-color:${props=>props.styles.backgroundColor};
    color:${props=>props.styles.color};

    span{
        font-weight:500;
    }
`

const Tag = (props) => {

    const getTagStyles = (tagColor) => {
        switch (tagColor) {
            case "principal":
                return {
                    backgroundColor: props.theme.color.principalLight,
                    color: props.theme.color.principal
                }
            default: return {
                backgroundColor: props.theme.color.highlightLighter,
                color: props.theme.color.highlightLight
            }
        }
    }

    return (
        <TagContainer styles={getTagStyles(props.tagStyle)}>
            <span>{props.tagTitle} </span>{props.tagContent}
        </TagContainer>
    );
};

export default withTheme(Tag);