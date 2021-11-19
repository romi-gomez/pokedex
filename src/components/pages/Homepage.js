import React, {useEffect, useState}  from 'react';
import GetApiData from '../../api/GetApiData';
import { PageContainer } from '../sharedSnippets/Containers';

const Homepage = () => {
    
    const [searchedPokemon, setSearchedPokemon] = useState("")

    useEffect(() => {


    }, [searchedPokemon]);

    return (
        <PageContainer backgroundColor="pink">

        </PageContainer>
    );
}

export default Homepage;