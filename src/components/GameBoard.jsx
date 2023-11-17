import { useEffect, useState } from "react"
import { Spawner } from "./Spawner"

const GameBoard = () => {
    const [test, setTest] = useState(false)



const startTest = () => {
    setTest(true)
    // setTest((test) => Spawner(5, 1, 1, 2,3))
    // setTest((test) => RandomEnemyGenerator())
}

const stopTest = () => {
    setTest(false)
    // clearInterval(spawnEnemy)

}

// const spawnEnemy = setInterval(() => {
//         const enemy = Spawner(5, 1, 1, 2,3);
//         console.log(enemy)
// },1000)

if (test === true)


console.log(test)

    return (
        <div className="game-root">
            {/* <h1>
                THE GAME
            </h1> */}
            <div className="spawn-area">
                <div className="game-space">
                    <div className="tower1"></div>
                    <div className="tower2"></div>
                    <div className="tower-range"></div>
                </div>
            </div>
            <button onClick={() => startTest()}>test</button>
            <button onClick={() => stopTest()}>stop test</button>
        </div>
    )
}

export default GameBoard