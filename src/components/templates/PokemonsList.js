import React from 'react';
import { GetPokemonsList } from '../../api/GetPokemonsList';
import { ComponentContainer } from '../sharedSnippets/Containers';

const PokemonsList = () => {
    const pokemonList = GetPokemonsList(20)
    console.log(pokemonList)

    return (
        <ComponentContainer>

        </ComponentContainer>
    );
};

export default PokemonsList;