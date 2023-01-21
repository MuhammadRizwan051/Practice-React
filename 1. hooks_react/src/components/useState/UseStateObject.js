import React, { useState } from 'react'
import { Input, Box, Typography } from '@mui/material'
import './Style.css'

function UseStateObject() {
    let obj = {
        userName: '',
        email: '',
        password: '',
        confirm_password: ''
    }
    const [formData, setFormData] = useState(obj)

    let handleInput = (e) => {
        const name = e.target.name
        const value = e.target.value

        console.log('Name: ', name, 'Value', value)

        setFormData((prev) => {
            return { ...prev, [name]: value }
        })
    }

    return (
        <>
            <Box className='main'>
                <Box className='form'>
                    <input placeholder='User Name' className='inputs' name='userName' value={formData.userName} onChange={handleInput} />
                    <input placeholder='Email' className='inputs' name='email' value={formData.email} onChange={handleInput} />
                    <input placeholder='Password' className='inputs' name='password' value={formData.password} onChange={handleInput} />
                    <input placeholder='Confirm Password' className='inputs' name='confirm_password' value={formData.confirm_password} onChange={handleInput} />
                    <Box sx={{bgcolor:'white'}}>
                    <Typography>Name: {formData.userName}</Typography>
                    <Typography>Email: {formData.email}</Typography>
                    <Typography>Password: {formData.password}</Typography>
                    <Typography>Confirm_Password: {formData.confirm_password}</Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}


export default UseStateObject