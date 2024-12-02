// We need access to all the pokemon in this sidenav
// Oh yeah, any file named index is the default file that's ran.
// So when we import from utils, that automatically runs index.js
import { first151Pokemon, getFullPokedexNumber } from "../utils"

export function SideNav() {


    return (
        <nav>
            <div className={"header"}>
                <h1 className="text-gradient">Pokédex</h1>
            </div>
            < input/>
            {first151Pokemon.map((pokemon, pokemonIndex) => {
                return (
                    <button key={pokemonIndex} className={'nav-card'}>
                        <p>{getFullPokedexNumber(pokemonIndex)}</p>
                        <p>{pokemon}</p>
                    </button>
                )
            })}
        </nav>
    )
}