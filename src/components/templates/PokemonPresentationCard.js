import React, { useEffect, useState } from 'react';
import styled from 'styled-components'

import { GetPokemonByName } from '../../api/GetPokemonByName';

import { Card } from '../sharedSnippets/Card'
import Tag from '../sharedSnippets/Tag'
import PokemonImage from '../sharedSnippets/PokemonImage'

const CardWrapper = styled.div`
    padding : ${props => props.theme.margin.s};
    transition: padding ease-in-out .2s;

     &:hover {
        padding : ${props => props.theme.margin.xs};
        cursor:pointer;
     }

     &:active{
        padding : ${props => props.theme.margin.s};
     }
`

const CardHeader = styled.header`
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
const CardBody = styled.div`
    width:100%;
    height:100%;
`


const PokemonPresentationCard = (props) => {
    const pokemon = GetPokemonByName(props.pokemon.name)
    console.log(pokemon)
  

    return (
        <CardWrapper>
            <Card layout="vertical">
                <CardHeader>
                    <PokemonImage imagePosition="bottom" imageSize="100px" imageSource={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.order}.svg`}></PokemonImage>
                    <HeaderInfo>
                        <Tag tagStyle="primary" tagTitle="Base exp." tagContent={pokemon.base_experience} />
                        <PokemonName>{pokemon.name}</PokemonName>
                    </HeaderInfo>
                </CardHeader>
                <CardBody>
                </CardBody>
            </Card>
        </CardWrapper>
    );
};

export default PokemonPresentationCard