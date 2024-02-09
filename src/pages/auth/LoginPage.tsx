import { Button, TextField } from '@mui/material';
import { useAuth } from '../../context/auth/AuthContextProvider';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./LoginPage.css"

const LoginPage = () => {
    const navigate = useNavigate()
    const { handleLogin, setError, error } = useAuth()
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    function handleAuth() {
        let formData = new FormData()
        formData.append('email', email)
        formData.append('password', password)
        handleLogin(formData, email, navigate)
    }

    useEffect(() => {
        setError(false)
    }, [])

    return error?(
       <h2>{error}</h2>
    ):(
        <div className='login-bg flex justify-center items-center'>
            <div  className='flex flex-col items-center gap-5 bg-white w-72 h-72 border rounded-2xl border-violet-700 border-solid'>
        <h1 className='pt-8'>Login</h1>

        <TextField  label="Email" color="secondary" focused type="text" onChange={(e) => setEmail(e.target.value)}/>
        <TextField label="Password" color="secondary" focused  type="password" onChange={(e) => setPassword(e.target.value)}/>
        <Button  variant="outlined" color="primary" href="#outlined-buttons"onClick={() => handleAuth()}>Login
</Button>
</div>
    </div>
    )
};

export default LoginPage;