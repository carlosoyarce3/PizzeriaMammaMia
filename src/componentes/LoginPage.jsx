import React from 'react';
import { useState } from "react";


function LoginPage() {

    const [datos, setDatos] = useState({
        email: "",
        password:"",
    });

    const actualizarFormulario = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value,
        })
    }

    const validate = () => {
        if(!datos.email||!datos.password){
            alert("Debe llenar todos los campos")
        }
        else if(datos.password.length < 6){
            alert("La contraseña debe tener al menos 6 caracteres")
        }
        else{
            setDatos({
                email: "",
                password:"",
            })
            alert("Los datos son correctos!")
        }
        

    }

    const enviarFormulario = (e) => {
        e.preventDefault();
        validate();

    }


  return (
    <div className='register'>
        <h1>Login</h1>
        <form onSubmit={enviarFormulario}>
            <label htmlFor="email">Email:</label>
            <input 
            type="email" 
            name='email' 
            value={datos.email} 
            placeholder='Ingrese su Email' 
            onChange={actualizarFormulario}/>
            <label htmlFor="pass">Contraseña:</label>
            <input 
            type="password" 
            name='password' 
            value={datos.password} 
            placeholder="Ingrese su Contraseña" 
            onChange={actualizarFormulario}/>
            <button type="submit">Enviar</button>
        </form>

    </div>
  )
}

export default LoginPage