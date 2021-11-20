import React, {useState, useEffect}  from 'react';
import { ComponentContainer } from '../sharedSnippets/Containers';
import PokemonsList from '../templates/PokemonsList';
import styled from 'styled-components'

const Homepage = () => {
    return (
        <ComponentContainer>
           <PokemonsList></PokemonsList>
        </ComponentContainer>
    );
}

export default Homepage;