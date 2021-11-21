import React from 'react';
import styled from 'styled-components'

const HeaderContainer = styled.header`
    width:100%;
    box-shadow: 0px 1px 7px ${props => props.theme.color.greyLight};
` 

const HeaderContent = styled.div`
    display: grid;
    grid-template-columns:1fr 1fr;
    margin: 0 auto;
    padding: ${props=>props.theme.margin.xs};

    @media(min-width: ${props => props.theme.breakpoint.xl}){
        max-width: ${props => props.theme.breakpoint.xl};
    }
`

const Logo = styled.img`
    max-width:200px;
    margin-left:${props=>props.theme.margin.s};
`

const Title = styled.h1`
    padding: ${props=>props.theme.margin.xs};
    color: ${props => props.theme.color.highlight};
    font-size: ${props => props.theme.fontSize.m};
    justify-self:end;
    margin-right:${props=>props.theme.margin.s};
`  

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderContent>
                <Logo src={require('../../assets/images/houmLogo.svg').default}></Logo>
                <Title>Pokedex</Title>
            </HeaderContent>
        </HeaderContainer>
    );
};

export default Header;