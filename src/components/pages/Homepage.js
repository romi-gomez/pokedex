import React, {useState, useEffect}  from 'react';
import { PageContainer } from '../sharedSnippets/Containers';
import styled from 'styled-components'

const Button = styled.button`
    width:600px;
    height: 600px;
`

const Homepage = () => {

    return (
        <PageContainer backgroundColor="pink">
            <Button></Button>
        </PageContainer>
    );
}

export default Homepage;