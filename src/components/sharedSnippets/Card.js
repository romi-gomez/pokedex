import styled from 'styled-components'

export const Card =  styled.article`
    display: grid;
    grid-template-columns:${props => props.layout === "horizontal" ? "2fr 3fr" : ""};
    grid-template-rows:${props => props.layout === "vertical" ? "auto 1fr" : ""};
    width:100%;
    min-height:200px;
    border-radius: ${props => props.theme.margin.s};
    overflow:hidden;
    background-color:${props => props.theme.color.white};
    box-shadow: 0px 1px 2px ${props => props.theme.color.greyLight};
    overflow:hidden;
`