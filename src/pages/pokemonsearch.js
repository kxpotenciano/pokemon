import Header from "../component/header";
import { useState } from "react";
import axios from "axios";

export default function PokemonSearch(){
    const [pokeName, setPokeName] = useState ('')
    const [chosenPokemon, setChosenPokemon] = useState(false)
    const [pokemon, setPokemon] = useState ({
        name: "", 
        img: "",
        type1: "",
        type2: "",
        move1: "",
        move2: "",
        move3: "",
        move4: "",
        hp: "",
        attack: "",
        defense: "",
        special_attack: "",
        special_defense: "",
        speed: "",
        index: ""
    })
    const [moves1, setMoves1] = useState ({
        pp: "",
        type: ""
    })
    const [moves2, setMoves2] = useState ({
        pp: "",
        type: ""
    })
    const [moves3, setMoves3] = useState ({
        pp: "",
        type: ""
    })
    const [moves4, setMoves4] = useState ({
        pp: "",
        type: ""
    })

    const searchPokemon = (event) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`).then((response) => 
        {
            if (response.data.types.length > 1)
            {setPokemon({
                name: pokeName, 
                img: response.data.sprites.front_default,
                type1: response.data.types[0].type['name'],
                type2: response.data.types[1].type['name'],
                move1: response.data.moves[0].move['name'],
                move2: response.data.moves[1].move['name'],
                move3: response.data.moves[2].move['name'],
                move4: response.data.moves[3].move['name'],
                hp: response.data.stats[0].base_stat,
                attack: response.data.stats[1].base_stat,
                defense: response.data.stats[2].base_stat,
                special_attack: response.data.stats[3].base_stat,
                special_defense: response.data.stats[4].base_stat,
                speed: response.data.stats[5].base_stat,
                
            })}
            else
            {setPokemon({
                name: pokeName, 
                img: response.data.sprites.front_default,
                type1: response.data.types[0].type['name'],
                type2: null,
                move1: response.data.moves[0].move['name'],
                move2: response.data.moves[1].move['name'],
                move3: response.data.moves[2].move['name'],
                move4: response.data.moves[3].move['name'],
                hp: response.data.stats[0].base_stat,
                attack: response.data.stats[1].base_stat,
                defense: response.data.stats[2].base_stat,
                special_attack: response.data.stats[3].base_stat,
                special_defense: response.data.stats[4].base_stat,
                speed: response.data.stats[5].base_stat,
                
            })}

            setChosenPokemon(true);
            axios.get(`https://pokeapi.co/api/v2/move/${pokemon.move1}`).then((response) => {
                setMoves1({
                    pp: response.data.pp,
                    type: response.data.type.name
                })
            })
            axios.get(`https://pokeapi.co/api/v2/move/${pokemon.move2}`).then((response) => {
                setMoves2({
                    pp: response.data.pp,
                    type: response.data.type.name
                })
            })
            axios.get(`https://pokeapi.co/api/v2/move/${pokemon.move3}`).then((response) => {
                setMoves3({
                    pp: response.data.pp,
                    type: response.data.type.name
                })
            })
            axios.get(`https://pokeapi.co/api/v2/move/${pokemon.move4}`).then((response) => {
                setMoves4({
                    pp: response.data.pp,
                    type: response.data.type.name
                })
            })
        })
       

        event.preventDefault();  
        }

        const pokemonTypeColor1 = (pokemon) => {
            if (pokemon.type1 === "fire"){
                return "dark:bg-red-200"
            }
        }
        
    return(
        <>
        <Header/>
        <br/>
        <div class="flex flex-col" role="group">
            <form>
                <input className="w-[300px] h-7 w-[250px] px-2 mb-2 text-base text-pink-500 placeholder-pink border rounded-lg focus:shadow-outline text-center" 
                type="text"
                onChange={(event) => {setPokeName(event.target.value)}}
                /> <br/>
                <button className="h-6 px-5 text-white transition-colors duration-150 bg-pink-400 rounded-full focus:shadow-outline hover:bg-pink-200"
                    onClick={searchPokemon}
                >Search</button>
            </form> <br/>
        </div> 
        <div className="inline-block">
            {!chosenPokemon ? (<h1 className="text-white text-2xl">Choose a Pokemon</h1>) : (
                <>
                <div class="inline-block bg-white border border-pink-200 rounded-lg shadow dark:bg-pink-300 dark:border-white justify-center w-[450px] opacity-90">
                    <img src={pokemon.img} className="inline-block h-[150px] w-[150px] opacity-100"/>
                <div class="p-5">
                        <p className="mb-3 font-bold text-pink-700 dark:text-pink-600 text-lg">{pokemon.name}</p>
                        <p className="mb-3 font-normal text-pink-700 dark:text-pink-600 text-lg">Type: <div className={`inline-block border border-pink-200 rounded-lg shadow ${pokemonTypeColor1} dark:border-white justify-center w-[100px] text-white`} >{pokemon.type1}</div> <div className=" inline-block border border-pink-200 rounded-lg shadow dark:bg-white dark:border-white justify-center w-[100px] text-gray-600">{pokemon.type2}</div></p>
                        <p className="mb-3 font-normal text-pink-700 dark:text-pink-600 text-lg">Move 1: {pokemon.move1} [Type: {moves1.type} PP: {moves1.pp}/{moves1.pp}]</p>
                        <p className="mb-3 font-normal text-pink-700 dark:text-pink-600 text-lg">Move 2: {pokemon.move2} [Type: {moves2.type} PP: {moves2.pp}/{moves2.pp}]</p>
                        <p className="mb-3 font-normal text-pink-700 dark:text-pink-600 text-lg">Move 3: {pokemon.move3} [Type: {moves3.type} PP: {moves3.pp}/{moves3.pp}]</p>
                        <p className="mb-3 font-normal text-pink-700 dark:text-pink-600 text-lg">Move 4: {pokemon.move4} [Type: {moves4.type} PP: {moves4.pp}/{moves4.pp}]</p>
                        <p className="mb-3 font-normal text-pink-700 dark:text-pink-600 text-lg">HP: {pokemon.hp} | Speed: {pokemon.speed}</p>
                        <p className="mb-3 font-normal text-pink-700 dark:text-pink-600 text-lg">Attack: {pokemon.attack} | Special Attack: {pokemon.special_attack}</p>
                        <p className="mb-3 font-normal text-pink-700 dark:text-pink-600 text-lg">Defense: {pokemon.defense} | Special Defense: {pokemon.special_defense}</p>
                    </div>
                </div>
                </>
            )}
        </div>
        </>
    )
}

