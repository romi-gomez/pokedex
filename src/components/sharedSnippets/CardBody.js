import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import CardBodySection from './CardBodySection';
import {AiOutlineColumnHeight} from "react-icons/ai"
import {GiWeight} from "react-icons/gi"

const CardBodyContainer = styled.div`
    width:100%;
    height:100%;
`
const HighlightsContainer = styled.div`
    width:100%;
    padding: ${props => props.theme.margin.xs} ${props => props.theme.margin.s};
    background-color: ${props=>props.theme.color.highlightLight};
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
`

const Highlight = styled.p`
    align-self:center;
    justify-self:center;
    color:#FFFFFF;
    font-weight:800;
`
const Icon = styled.span`
    align-self:center;
    justify-self:center;
    font-size: ${props => props.theme.fontSize.s};
`

const Span = styled.span`
    align-self:center;
    justify-self:center;
    font-weight:200;
    font-size: ${props => props.theme.fontSize.xs};
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
            <HighlightsContainer>
                <Highlight>{props.pokemon.base_experience} <Span>exp.</Span></Highlight>
                <Highlight><Icon><AiOutlineColumnHeight/> </Icon>{props.pokemon.height} </Highlight>
                <Highlight><Icon><GiWeight/> </Icon>{props.pokemon.weight} </Highlight>
            </HighlightsContainer>
            <CardBodySection sectionTitle={"Abilities"} sectionData={pokemonAbilities} />
        </CardBodyContainer>
    );
};

export default CardBody;