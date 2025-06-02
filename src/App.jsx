import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import PokeGrid from "./PokeGrid";
import Pokeflex from "./Pokeflex";
const App =() => {
  return(
    <Routes>
      <Route path="pokegrid" element={<PokeGrid/>}/>
     <Route path="pokeflex" element={<Pokeflex/>}/>
      
    
<Route path="/" element = {<Home/>} />

    </Routes>
  )
}
export default App