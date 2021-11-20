import React, {useState, useEffect} from 'react'
import { GetPokemonByName } from '../../api/GetPokemonByName';
import { ComponentContainer } from '../sharedSnippets/Containers';
import styled from 'styled-components'


const PokemonDetailsPage = () => {
    const pokemon = GetPokemonByName("charmander")
    console.log(pokemon)

    return (
        <ComponentContainer backgroundColor="blue">
        </ComponentContainer>
    );
};

export default PokemonDetailsPage;