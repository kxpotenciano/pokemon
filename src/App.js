import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/home"
import PokemonSearch from "./pages/pokemonsearch"
import AbilitySearch from "./pages/abilitysearch"
import MoveSearch from "./pages/movesearch"
import backimage from "./backimage.jpg"

function App() {
  return (
    <div className="App" style={{backgroundImage: `url(${backimage})`, height: `100vh`, width: `100vw`}}>
      <div className="place-content-center text-center">
        <BrowserRouter>
          <Routes>
            <Route index element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/pokemonsearch' element={<PokemonSearch/>}/>
            <Route path='/abilitysearch' element={<AbilitySearch/>}/>
            <Route path='/movesearch' element={<MoveSearch/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
