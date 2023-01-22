import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import './Style.css'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function UseEffect() {
    const [count, setCount] = useState(0)

    let changeCount = (val) => {
        if (val === 'inc') {
            setCount(count + 1)
        }
        if (val === 'dec' && count >= 1) {
            setCount(count - 1)
        }
    }

    useEffect(() => {
        document.title = count
    }, [count])

    return (
        <>
            <Box className='main'>
                <AddIcon className='icon' onClick={() => changeCount('inc')} />
                <Typography className='count'>{count}</Typography>
                <RemoveIcon className='icon' onClick={() => changeCount('dec')} />
            </Box>
        </>
    )
}

export default UseEffect