import React, {useState, useEffect}  from 'react';
import { PageContainer } from '../sharedSnippets/Containers';
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
        <PageContainer>
           <PokemonsList pokemonsToShow={pokemonsToShow}></PokemonsList>
        </PageContainer>
    );
}

export default Homepage;