import styled from 'styled-components'
import { ComponentContainer } from '../sharedSnippets/Containers';
import PokemonPresentationCard from './PokemonPresentationCard';

const ListContainer = styled(ComponentContainer)`
    display:grid;
    grid-template-columns:1fr;
    
    @media(min-width: ${props => props.theme.breakpoint.s}){
        grid-template-columns:1fr 1fr;
    }

    @media(min-width: ${props => props.theme.breakpoint.m}){
        grid-template-columns:1fr 1fr 1fr;
    }

    @media(min-width: ${props => props.theme.breakpoint.l}){
        grid-template-columns:1fr 1fr 1fr 1fr;
    }
`

const PokemonsList = (props) => {

    return (
        <ListContainer>
            { props.pokemonsToShow.map( pokemon =>{
                return <PokemonPresentationCard key={pokemon.name}  pokemon={pokemon}/>
            })}
        </ListContainer>
    );
};

export default PokemonsList;