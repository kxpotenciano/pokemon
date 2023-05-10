import Header from "../component/header";
import { useState } from "react";
import axios from "axios";

export default function MoveSearch(){
    
    const [moveName, setMoveName] = useState ('')
    const [chosenMove, setChosenMove] = useState(false)
    const [move, setMove] = useState({
        name: "",
        effect: ""
    })

    const searchMove = (event) => {
        axios.get(`https://pokeapi.co/api/v2/move/${moveName}`).then((response) => {
            setMove({
                name: moveName,
                effect: response.data.effect_entries[0].effect
            }); setChosenMove(true);
        }) 
    
        event.preventDefault();
        } 
    

    return(
    <>
    <Header/> <br/>

    <div class="flex flex-col justify-center" role="group">
        <form>
            <input className="w-[300px] h-7 w-[250px] px-2 mb-2 text-base text-pink-500 placeholder-pink border rounded-lg focus:shadow-outline text-center" type="text"
                onChange={(event) => {setMoveName(event.target.value)}}
                /> <br/>
                <button className="h-6 px-5 text-white transition-colors duration-150 bg-pink-400 rounded-full focus:shadow-outline hover:bg-pink-200"
                    onClick={searchMove}
                >Get Pokemon Move</button>
            </form> <br/>
            <div className="inline-block">
            {!chosenMove ? (<h1 className="text-white text-2xl">Choose a Move</h1>) : (
                <div class="inline-block bg-white border border-pink-200 rounded-lg shadow dark:bg-pink-300 dark:border-white justify-center opacity-90 w-[500px]">
                <div class="p-5">
                        <p className="mb-3 font-bold text-pink-700 dark:text-pink-600 text-lg">Move: {move.name}</p>
                        <p className="mb-3 font-normal text-pink-700 dark:text-pink-600 text-lg">Move Effect: {move.effect}</p>
                </div>
                </div>
            )}     </div></div>  
</>
    )
}