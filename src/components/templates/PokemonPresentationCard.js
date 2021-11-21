import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import { GetPokemonByName } from '../../api/GetPokemonByName';

import CardHeader from '../sharedSnippets/CardHeader'
import CardBody from '../sharedSnippets/CardBody';
import { Card } from '../sharedSnippets/Card'

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

const PokemonPresentationCard = (props) => {
    const pokemon = GetPokemonByName(props.pokemon.name)

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