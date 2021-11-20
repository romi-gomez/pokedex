import styled from 'styled-components'
import React from 'react';

const ImageContainer = styled.div`
    max-width:120px;
    height:100px;
    text-align:center;
    align-self:flex-start;
`

const ImageSource = styled.img`
    height:90%;
    width:70%;
    position: relative;
`

const PokemonImage = (props) => {
    return (
        <ImageContainer imageSize={props.imageSize}>
            <ImageSource src={props.imageSource}/>
        </ImageContainer>
    );
};

export default PokemonImage;