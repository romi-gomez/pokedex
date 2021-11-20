import styled, { withTheme } from 'styled-components'

export const Card = withTheme( styled.article`
    display: grid;
    grid-template-columns:${props => props.layout === "horizontal" ? "1fr 3fr" : ""};
    grid-template-rows:${props => props.layout === "vertical" ? "1fr 3fr" : ""};
    width:100%;
    min-height:200px;
    border-radius:${props => props.theme.margin.s};
    background-color:${props => props.theme.color.white};
    box-shadow: 0px 0px 2px ${props => props.theme.color.greyLight};

    &:hover{
        background-color:${props => props.theme.color.principalLighter};
        box-shadow: 0px 0px 2px ${props => props.theme.color.principal};
    }
`
)