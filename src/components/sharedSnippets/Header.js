import React from 'react';
import styled from 'styled-components'

const HeaderContainer = styled.header`
    width:100%;
    height:${props => props.theme.margin.xl};
` 

const Header = () => {
    return (
        <HeaderContainer>
            
        </HeaderContainer>
    );
};

export default Header;