import styled from 'styled-components'

export const PageContainer = styled.div`
    width:100%;
    height: 100%;
    margin: 0 auto;
    padding-top:${props=>props.theme.margin.xl};

    @media (min-width: ${props => props.theme.breakpoint.xl} ){
        max-width: ${props => props.theme.breakpoint.xl} ;
    }

`


export const ComponentContainer = styled.div`
    width:100%;
    height: 100%;
`

