import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import PokemonImage from './PokemonImage'
import Tag from './Tag'

const CardHeaderContainer = styled.header`
    width:100%;
    height:100%;
    max-height:180px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    background: #FFFFFF;
`
const HeaderInfo = styled.div`
    padding: ${props => props.theme.margin.m};
    display: grid;
    grid-template-rows:1fr 1fr;
`
const TagsContainer = styled.div`
    display: flex;
    justify-content:flex-end;
`
const PokemonName = styled.h2`
    font-size:${props => props.theme.fontSize.m};
    align-self:center;
    justify-self: end;
`

const CardHeader = (props) => {

    const pokemonTypes = props.pokemon.types
    const [typesNamesArray, setTypesNamesArray]= useState([])

    useEffect(()=>{
        let tempTypesNamesArray = []

        if(pokemonTypes !== undefined) {
            pokemonTypes.map(type=>tempTypesNamesArray.push(type.type.name)) 
            setTypesNamesArray(tempTypesNamesArray)
        }

    }, [pokemonTypes])

    return (
        <CardHeaderContainer>
            <PokemonImage imagePosition="bottom" imageSize="100px" imageSource={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.pokemon.id}.svg`}></PokemonImage>
            <HeaderInfo>
                <TagsContainer>
                {typesNamesArray.map(type =>{
                    return <Tag key={type} tagStyle="principal" tagContent={type} />
                })}
                </TagsContainer>
                <PokemonName>{props.pokemon.name}</PokemonName>
        </HeaderInfo>
        </CardHeaderContainer>
    );
};

export default CardHeader;