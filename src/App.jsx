import { useState } from 'react'
import { Route, Routes, useNavigate } from "react-router-dom";
import GameBoard from './components/GameBoard';
import MainMenu from './components/MainMenu'
import './App.css'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <div>
      <MainMenu/>
    </div> */}
    <div>
      <GameBoard />
      {/* <Routes>
        <Route path="/gameboard" element={<GameBoard />}/>
      </Routes> */}
    </div>
    </>
  )
}

export default App
