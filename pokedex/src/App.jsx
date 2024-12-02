import { Header } from "./components/Header"
import { PokeCard } from "./components/PokeCard"
import { SideNav } from "./components/SideNav"

import { useState } from 'react'

// This is the parent/center of our React App
// DISCLAIMER, you don't need app.css if you are using Fanta.css

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(0)

  return (
    <>
      <Header />
      <SideNav selectedPokemon={selectedPokemon} setSelectedPokemon=
      {selectedPokemon}/>
      <PokeCard selectedPokemon={selectedPokemon} />    
    </>
  )
}

export default App
