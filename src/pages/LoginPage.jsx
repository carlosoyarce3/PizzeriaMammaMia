import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';


function LoginPage() {

    const {login,email,setEmail,password,setPassword} = useContext(UserContext)


  return (
    <div className='register'>
        <h1>Login</h1>
        <form onSubmit={login}>
            <label htmlFor="email">Email:</label>
            <input 
            type="email" 
            name='email' 
            value={email} 
            placeholder='Ingrese su Email' 
            onChange={(e) => setEmail(e.target.value)}/>
            <label htmlFor="pass">Contraseña:</label>
            <input 
            type="password" 
            name='password' 
            value={password} 
            placeholder="Ingrese su Contraseña" 
            onChange={(e) => setPassword(e.target.value)}/>
            <button type="submit">Enviar</button>
        </form>

    </div>
  )
}

export default LoginPage