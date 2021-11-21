import styled from 'styled-components'
import React from 'react';

const ImageContainer = styled.div`
    max-width:120px;
    height:100px;
    margin-left:${props => props.theme.margin.m};
    justify-self:start;
    align-self:center;
`

const ImageSource = styled.img`
    height:100%;
    width:100%;
    
`

const PokemonImage = (props) => {
    return (
        <ImageContainer imageSize={props.imageSize}>
            <ImageSource src={props.imageSource}/>
        </ImageContainer>
    );
};

export default PokemonImage;