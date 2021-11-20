import React from 'react';
import styled, { withTheme } from 'styled-components'
import { GetPokemonByName } from '../../api/GetPokemonByName';
import { Card } from '../sharedSnippets/Card'

const CardWrapper = styled.div`
    padding : ${props => props.theme.margin.s};
    transition: padding ease-in-out .2s;

     &:hover {
        padding : 0;
        cursor:pointer;
     }

     &:active{
        padding : ${props => props.theme.margin.xs};
     }
`

const CardHeader = styled.header`
    width:100%;
    height:100%;
    background: red;
`

const CardBody = styled.div`
    width:100%;
    height:100%;
    background: black;
`

const PokemonPresentationCard = (props) => {
    const pokemon = GetPokemonByName(props.pokemon.name)

    return (
        <CardWrapper>
            <Card></Card>
        </CardWrapper>
    );
};

export default withTheme(PokemonPresentationCard)