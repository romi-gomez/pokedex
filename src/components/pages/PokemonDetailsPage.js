import React, {useState, useEffect} from 'react'
import { GetPokemonByName } from '../../api/GetPokemonByName';
import { ComponentContainer } from '../sharedSnippets/Containers';
import styled  from 'styled-components'


const PokemonDetailsPage = () => {
    const pokemon = GetPokemonByName("charmander")

    return (
        <ComponentContainer>
        </ComponentContainer>
    );
};

export default PokemonDetailsPage;