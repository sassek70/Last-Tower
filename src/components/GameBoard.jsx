import { useEffect, useRef, useState } from "react"
import { Spawner } from "./Spawner"


const GameBoard = () => {
    const [spawnIntervalState, setSpawnIntervalState] = useState()

    // useRef acts like state but doesn't cause a rerender. This prevents the intervalID from changing
    const spawnInterval = useRef();
    let enemyCount = 0;
    let activeEnemies = [];



const startTest = () => {

    spawnInterval.current = setInterval(() => {
            const spawnedEnemy = Spawner(5, 1, 1, 2,3);
            console.log(spawnInterval)
            activeEnemies.push(spawnedEnemy)
            enemyCount++
            // activeEnemies.forEach ((enemy) => {
            // console.log(enemyArray)
            if(enemyCount === 10) {
                clearInterval(spawnInterval)
                console.log("interval cleared")
            }
       },1000)
}


// document.addEventListener("mousedown", () => {
//     ctx.fillRect(e.x, e.y, 50, 50)
// })

const stopTest = () => {
    // if(spawnIntervalState === true) {
        clearInterval(spawnInterval.current)
        setSpawnIntervalState(false)
        console.log("Interval cleared")
    // } else {
        // return
    // }
}



    return (
        <div className="game-root">
            {/* <h1>
                THE GAME
            </h1> */}
            <div className="spawn-area">
                {<div className="game-space-containter">
                    {/* <canvas id="game-area-canvas"></canvas> */}
                    {/* <div className="tower1"></div> */}
                    {/* <div className="tower2"></div> */}
                    {/* <div className="tower-range"></div> */}
                </div>}
            </div>

            <button onClick={() => startTest()}>test</button>
            <button onClick={() => stopTest()}>stop test</button>
        </div>
    )
}

export default GameBoard