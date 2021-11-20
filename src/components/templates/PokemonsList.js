import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import { GetPokemonsList } from '../../api/GetPokemonsList';
import { ComponentContainer } from '../sharedSnippets/Containers';
import PokemonPresentationCard from './PokemonPresentationCard';

const ListContainer = styled(ComponentContainer)`
    display:grid;
    grid-template-columns:1fr;
    
    @media(min-width: ${props => props.theme.breakpoint.s}){
        grid-template-columns:1fr 1fr;
    }

    @media(min-width: ${props => props.theme.breakpoint.m}){
        grid-template-columns:1fr 1fr 1fr;
    }

    @media(min-width: ${props => props.theme.breakpoint.l}){
        grid-template-columns:1fr 1fr 1fr 1fr;
    }
`

const PokemonsList = () => {
    const pokemonsList = GetPokemonsList(20)
    const [pokemonsToShow, setPokemonsToShow] = useState([])

    useEffect(()=>{
        if (pokemonsList !== "loading") {
            setPokemonsToShow(pokemonsList.results)
        }
    }, [pokemonsList])


    return (
        <ListContainer>
            { pokemonsToShow.map( pokemon =>{
                return <PokemonPresentationCard key={pokemon.name}  pokemon={pokemon}/>
            })}
        </ListContainer>
    );
};

export default PokemonsList;