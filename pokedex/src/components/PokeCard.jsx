import { useEffect, useState } from 'react'
import { getPokedexNumber, getFullPokedexNumber } from '../utils'

export function PokeCard(props) {
    const { selectedPokemon } = props
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)

    const{name, height, abilities, stats, types, moves, sprites} = data || {}

    // the useEffect() function fetches the pokemon information

    useEffect(() => {
        // if loading, exit loop
        // If local storage doesn't exist, we won't run the logic
        if (loading || !localStorage) { return } // <-- Just to make sure we don't get any errors
        
        // check if the selected pokemon information is available in the cache
        // 1. define the cache as an object since the API info is an object
        let cache = {}
        if (localStorage.getItem('pokedex')) {
            cache = JSON.parse(localStorage.getItem('pokedex'))
        }

        // 2. check if the selected pokemon is in the cache, otherwise fetch from API

        if (selectedPokemon in cache) {
            // read from cache
            setData(cache[selectedPokemon])
            return
        }

        // we passed all the cache stuff to no avail and now need to fetch the data from the API
        
        async function fetchPokemonData() {
            setLoading(true)
            try {
                const baseUrl = 'https://pokeapi.co/api/v2'
                const suffix = 'pokemon/' + getPokedexNumber 
                const finalUrl = baseUrl + suffix
                const res = await fetch(finalUrl)
                const pokemonData = await res.json()
                setData(pokemonData)

                cache[selectedPokemon] = pokemonData
                localStorage.setItem('pokedex', JSON.stringify(cache))

            } catch (err) {
                console.log(err.message)
            } finally {
                setLoading(false)
            }
        }

        fetchPokemonData

        // if we fetch from the API, make sure to save the information to the cache for next time.
    }, [selectedPokemon])

    if (loading || !data) {
        return (
            <div>
                <h4>Loading...</h4>
            </div>
        )
    }

    return (
        <div className='poke-card'>
            <div>
                <h4>#{getFullPokedexNumber(selectedPokemon)}</h4>
                <h2>{name}</h2>
            </div>
        </div>
    )
}