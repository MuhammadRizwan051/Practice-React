import React, { useEffect, useState } from 'react'

function ClearUp() {
    const [widthCount, setWidthCount] = useState(window.screen.width)

    let currentScreenWidth = () => {
        setWidthCount(() => window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', currentScreenWidth)
    })

    return (
        <>
            <div className='main'>
                <h2 className='heading'>The size of the window is {widthCount} </h2>
            </div>
        </>
    )
}

export default ClearUp