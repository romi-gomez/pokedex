import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from './components/pages/Homepage'
import PokemonsList from './components/pages/PokemonsListPage'
import PokemonDetails from './components/pages/PokemonDetailsPage'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  height:100%;
  background-color: black;
`

const App = () => {

  return (
    <Wrapper className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/list" element={<PokemonsList />} />
        <Route path="/details" element={<PokemonDetails />} />
      </Routes>
    </Wrapper>
  );
}

export default App;
