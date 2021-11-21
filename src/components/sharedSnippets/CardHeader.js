import React from 'react';
import styled from 'styled-components'
import PokemonImage from './PokemonImage'
import Tag from './Tag'

const CardHeaderContainer = styled.header`
    width:100%;
    height:100%;
    display: grid;
    grid-template-columns: 1fr 2fr;
    background: #FFFFFF;
`
const HeaderInfo = styled.div`
    padding: ${props => props.theme.margin.m};
    display: grid;
    grid-template-rows:1fr 1fr;
`
const PokemonName = styled.h2`
    font-size:${props => props.theme.fontSize.m};
    align-self:center;
    justify-self: end;
`

const CardHeader = (props) => {
    return (
        <CardHeaderContainer>
            <PokemonImage imagePosition="bottom" imageSize="100px" imageSource={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.pokemon.id}.svg`}></PokemonImage>
            <HeaderInfo>
                <Tag tagStyle="default" tagTitle="Base exp." tagContent={props.pokemon.base_experience} />
                <PokemonName>{props.pokemon.name}</PokemonName>
        </HeaderInfo>
        </CardHeaderContainer>
    );
};

export default CardHeader;