import { useState } from 'react'
import { Route, Routes, useNavigate } from "react-router-dom";
import GameBoard from './components/GameBoard';
import MainMenu from './components/MainMenu';
import Canvas from './components/Canvas';
import './App.css'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <div>
      <MainMenu/>
    </div> */}
    <div>
      {/* <GameBoard /> */}
      <Canvas canvasHeight={"80vh"} canvasWidth={"40vw"}/>
      {/* <Routes>
        <Route path="/gameboard" element={<GameBoard />}/>
      </Routes> */}
    </div>
    </>
  )
}

export default App
