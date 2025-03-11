import { useState } from "react"
import StartGame from "./Components/StartGame"
import GamePlay from "./Components/GamePlay"

function App() {
  const[isGameStated,setIstGameStarted]=useState(false)
  const toggleGamePlay=()=>{
    setIstGameStarted((prev)=>!prev)
  }
  return (
    <>
    {isGameStated ? <GamePlay/>:<StartGame toggle={toggleGamePlay} />}
    </>
  )
}

export default App

