import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import { GetPokemonByName } from '../../api/GetPokemonByName';

import CardHeader from '../sharedSnippets/CardHeader'
import CardBody from '../sharedSnippets/CardBody';
import { Card } from '../sharedSnippets/Card'

const CardWrapper = styled.div`
    display:flex;
    padding : ${props => props.theme.margin.s};
    transition: margin-top ease-in-out .2s;
    opacity:.7;

     &:hover {
        margin-top : -10px ;
        opacity:1;
        cursor:pointer;
     }

     &:active{
        margin-top : 0 ;
     }
`

const PokemonPresentationCard = (props) => {
    const pokemon = GetPokemonByName(props.pokemon.name)
    console.log(pokemon)

    return (
        <CardWrapper>
            <Card layout="vertical">
                <CardHeader pokemon={pokemon} />                
                <CardBody pokemon={pokemon} />
            </Card>
        </CardWrapper>
    );
};

export default PokemonPresentationCard