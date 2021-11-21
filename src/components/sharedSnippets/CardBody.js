import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import CardBodySection from './CardBodySection';

const CardBodyContainer = styled.div`
    width:100%;
    height:100%;
    padding: ${props => props.theme.margin.s};
`

const CardBody = (props) => {
    const [pokemonAbilities, setPokemonAbilities] = useState([])
    
    useEffect(()=>{
        if (props.pokemon !== "loading" ) {
            let tempPokemonAbilities = props.pokemon.abilities
            let pokemonAbilitiesTempArray = []

            if(tempPokemonAbilities !== undefined ){
                tempPokemonAbilities.map(ability => {
                    pokemonAbilitiesTempArray.push(ability.ability.name)
                })
                setPokemonAbilities(pokemonAbilitiesTempArray)
            }
        }
    }, [props.pokemon])

    return (
        <CardBodyContainer>
            <CardBodySection sectionTitle={"Abilities"} sectionData={pokemonAbilities} />
        </CardBodyContainer>
    );
};

export default CardBody;