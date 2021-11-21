import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import Header from './components/sharedSnippets/Header'
import Homepage from './components/pages/Homepage'
import PokemonDetails from './components/pages/PokemonDetailsPage'
import styled from 'styled-components'

const theme = {
  color:{
    principal:"#E94934",
    principalLight:"#FBDAD0", 
    principalLighter:"#FEF8F8",
    highlight:"#263238",
    highlightLight:"#607D8B",
    highlightLighter:"#ECEFF1",
    grey:"#424242", 
    greyLight:"#828282",
    greyLighter:"#F4F4F4",
    white:"#F9f9f9",
  }, 
  fontSize:{
    xs:".75em", 
    s:"1em", 
    m:"1.5em",
    l:"2em", 
    xl:"4em"
  },
  margin:{
    xs:".5em", 
    s:"1em", 
    m:"1.5em",
    l:"2em", 
    xl:"4em"
  },
  breakpoint:{  
      xl:"1280px",
      l:"1080px",
      m:"767px",
      s:"465px",
      xs:"320px"
  }
}

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;

  @media(min-width: ${props => props.theme.breakpoint.xl}){
    max-width: ${props => props.theme.breakpoint.xl};
  }

`

const App = () => {

  return (
    <ThemeProvider className="App" theme={theme}>
      <Header></Header>
      <Wrapper>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/details" element={<PokemonDetails />} />
        </Routes>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
