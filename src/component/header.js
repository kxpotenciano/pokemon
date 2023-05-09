export default function Header(){
    return(
        <div>
        <div className="text-center text-5xl text-purple-300"><a href="http://localhost:3000/home">POKEMON SEARCH </a></div><br></br>
        <div class="inline-flex" role="group">
            <button
                type="button"
                class="inline-block rounded-l border-2 border-primary px-6 pb-[6px] pt-2 text-xs text-white font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                data-te-ripple-init
                data-te-ripple-color="light">
                    <a href="http://localhost:3000/pokemonsearch">Pokemon</a>
            </button>
            <button
                type="button"
                class="-ml-0.5 inline-block rounded-l border-2 border-primary px-6 pb-[6px] pt-2 text-xs text-white font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                data-te-ripple-init
                data-te-ripple-color="light">
                <a href="http://localhost:3000/abilitysearch">Abilities</a>
            </button>
            <button
                type="button"
                class="-ml-0.5 inline-block rounded-l rounded-r border-2 border-primary px-6 pb-[6px] text-white pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-purple-200 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                data-te-ripple-init
                data-te-ripple-color="light">
                <a href="http://localhost:3000/movesearch">Moves</a>
            </button>
        </div>
        </div>
    )
}