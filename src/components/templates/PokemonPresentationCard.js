import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import CardHeader from '../sharedSnippets/CardHeader'
import { GetPokemonByName } from '../../api/GetPokemonByName';

import { Card } from '../sharedSnippets/Card'
import Icon from '../sharedSnippets/Icon'

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
const CardBody = styled.div`
    width:100%;
    height:100%;
    padding: ${props => props.theme.margin.s};
`
const CardBodySection = styled.div`
    display: flex;

    h3 {
        margin: ${props => props.theme.margin.xs};
        font-size: ${props => props.theme.fontSize.s};
        font-weight:700;
        color: ${props => props.theme.color.grey}
    }

    p {
        font-size: ${props => props.theme.fontSize.xs};
        color: ${props => props.theme.color.greyLight}
    }
`

const PokemonPresentationCard = (props) => {
    const pokemon = GetPokemonByName(props.pokemon.name)
    const [pokemonAbilities, setPokemonAbilities] = useState([])

    useEffect(()=>{
        if (pokemon !== "loading" ) {
            let tempPokemonAbilities = pokemon.abilities
            if(tempPokemonAbilities !== undefined ){
                setPokemonAbilities(tempPokemonAbilities)
            }
        }
    }, [pokemon, pokemonAbilities])

    return (
        <CardWrapper>
            <Card layout="vertical">
                <CardHeader pokemon={pokemon} />                
                <CardBody>
                    <CardBodySection>
                        <Icon />
                        <h3>Abilities</h3>
                        {pokemonAbilities.map(ability=>{
                            return <p>{ability.ability.name}</p>
                        })}
                    </CardBodySection>
                </CardBody>
            </Card>
        </CardWrapper>
    );
};

export default PokemonPresentationCard