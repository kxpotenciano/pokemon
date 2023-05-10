import Header from "../component/header";
import { useState } from "react";
import axios from "axios";

export default function MoveSearch(){
    
    const [abilityName, setAbilityName] = useState ('')
    const [chosenAbility, setChosenAbility] = useState(false)
    const [ability, setAbility] = useState({
        name: "",
        effect: ""
    })

    const searchAbility = (event) => {
        axios.get(`https://pokeapi.co/api/v2/ability/${abilityName}`).then((response) => {
            setAbility({
                name: abilityName,
                effect: response.data.effect_entries[1].effect
            }); setChosenAbility(true);
        }) 
    
        event.preventDefault();
        } 
    

    return(
    <>
    <Header/> <br/>

    <div class="flex flex-col justify-center" role="group">
        <form>
            <input className="w-[300px] h-7 w-[250px] px-2 mb-2 text-base text-pink-500 placeholder-pink border rounded-lg focus:shadow-outline text-center" type="text"
                onChange={(event) => {setAbilityName(event.target.value)}}
                /> <br/>
                <button className="h-6 px-5 text-white transition-colors duration-150 bg-pink-400 rounded-full focus:shadow-outline hover:bg-pink-200"
                    onClick={searchAbility}
                >Get Pokemon Ability</button>
            </form> <br/>
            <div className="inline-block">
            {!chosenAbility ? (<h1 className="text-white text-2xl">Choose an Ability</h1>) : (
                <div class="inline-block bg-white border border-pink-200 rounded-lg shadow dark:bg-pink-300 dark:border-white justify-center w-[500px] opacity-90">
                <div class="p-5">
                        <p className="mb-3 font-bold text-pink-700 dark:text-pink-600 text-lg">Ability: {ability.name}</p>
                        <p className="mb-3 font-normal text-pink-700 dark:text-pink-600 text-lg">Ability Effect: {ability.effect}</p>
                </div>
                </div>
            )}     </div></div>  
</>
    )
}