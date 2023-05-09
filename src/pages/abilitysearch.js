import Header from "../component/header";

export default function MoveSearch(){
    

    return(
    <>
    <Header/> <br/>

    <form>
        <input className="w-full h-7 w-[250px] px-2 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline text-center" type="text"></input> <br/>
        <button className="h-6 px-5 text-white transition-colors duration-150 bg-pink-400 rounded-full focus:shadow-outline hover:bg-pink-200">Get Ability</button>
        <div></div>
    </form>

    <div></div>
        
    </>
    )
}