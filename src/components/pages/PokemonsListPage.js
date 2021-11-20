import React from 'react';
import { GetPokemonsList } from '../../api/GetPokemonsList';
import { PageContainer } from '../sharedSnippets/Containers';

const PokemonsList = () => {
    const pokemonList = GetPokemonsList(20)
    console.log(pokemonList)

    return (
        <PageContainer backgroundColor="yellow">
            
        </PageContainer>
    );
};

export default PokemonsList;