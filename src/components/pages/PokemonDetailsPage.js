import React, {useState, useEffect} from 'react'
import { GetPokemonByName } from '../../api/GetPokemonByName';
import { PageContainer } from '../sharedSnippets/Containers';
import styled from 'styled-components'


const PokemonDetailsPage = () => {
    const pokemon = GetPokemonByName("charmander")
    console.log(pokemon)

    return (
        <PageContainer backgroundColor="blue">
        </PageContainer>
    );
};

export default PokemonDetailsPage;