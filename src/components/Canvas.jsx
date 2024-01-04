import { useEffect, useRef } from "react"

const Canvas = () => {
    //height = 80vh, width = 40vh for development
    const canvasRef = useRef();
    let canvasWidth
    let canvasHeight
    let ctx

    const setupCanvas = () => {
        //set reference
        const canvas = canvasRef.current;
        //set canvas context
        ctx = canvas.getContext('2d');
        //set canvas size
        
        canvasWidth = 40 * window.screen.availWidth / 100
        canvasHeight = 80 * window.screen.availHeight / 100
        
        canvas.width = canvasWidth
        canvas.height = canvasHeight
        canvas.style.width = canvasWidth
        canvas.style.height = canvasHeight

    }



    useEffect(() => {
        setupCanvas()

        ctx.fillStyle="red"
        ctx.fillRect(5,5, canvasHeight, canvasWidth)

    },[])

    return (
        <canvas ref={canvasRef} height={canvasHeight} width={canvasWidth}/>
    )
}

export default Canvas;