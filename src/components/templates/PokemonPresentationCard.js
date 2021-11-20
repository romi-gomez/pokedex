import React, { useEffect, useState } from 'react';
import styled from 'styled-components'

import { GetPokemonByName } from '../../api/GetPokemonByName';

import { Card } from '../sharedSnippets/Card'
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
    background-color: #FFFFFF;
`
const CardBody = styled.div`
    width:100%;
    height:100%;
    display: grid;
    grid-template-columns: 1fr 1fr;

`

const PokemonPresentationCard = (props) => {
    const pokemon = GetPokemonByName(props.pokemon.name)

    return (
        <CardWrapper>
            <Card layout="vertical">
                <CardHeader></CardHeader>
                <CardBody>
                    <PokemonImage imagePosition="bottom" imageSize="100px" imageSource={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.order}.svg`}></PokemonImage>
                </CardBody>
            </Card>
        </CardWrapper>
    );
};

export default PokemonPresentationCard