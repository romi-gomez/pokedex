import styled from 'styled-components'
import React from 'react';

const ImageContainer = styled.div`
    max-width:100px;
    height:100px;
    align-self:flex-end;
    margin: ${props => props.theme.margin.xs};
`

const ImageSource = styled.img`
    height:100%;
    width:100%;
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