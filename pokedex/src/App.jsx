import { Header } from "./components/Header"
import { PokeCard } from "./components/PokeCard"
import { SideNav } from "./components/SideNav"


// This is the parent/center of our React App
// DISCLAIMER, you don't need app.css if you are using Fanta.css

function App() {

  return (
    <>
      <Header />
      <SideNav />
      <PokeCard />    
    </>
  )
}

export default App
