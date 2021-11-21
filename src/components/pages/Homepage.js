import React, {useState, useEffect}  from 'react';
import { ComponentContainer } from '../sharedSnippets/Containers';
import { GetPokemonsList } from '../../api/GetPokemonsList'
import PokemonsList from '../templates/PokemonsList';

const Homepage = (props) => {
    
const pokemonsListData = GetPokemonsList(300)
const [pokemonsToShow, setPokemonsToShow] = useState([])

useEffect(()=>{
    if (pokemonsListData !== "loading") {
        setPokemonsToShow(pokemonsListData.results)
    }
}, [pokemonsListData])

    return (
        <ComponentContainer>
           <PokemonsList pokemonsToShow={pokemonsToShow}></PokemonsList>
        </ComponentContainer>
    );
}

export default Homepage;