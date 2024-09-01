import React from 'react';
import { useState } from "react";


function RegisterPage() {

    const [datos, setDatos] = useState({
        email: "",
        password:"",
        cPassword:""
    });

    const actualizarFormulario = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value,
        })
    }

    const validate = () => {
        if(!datos.email||!datos.password||!datos.cPassword){
            alert("Debe llenar todos los campos")
        }
        else if(datos.password != datos.cPassword){
            alert("Ambas contaseñas deben ser iguales")
        }
        else if(datos.password.length < 6){
            alert("La contraseña debe tener al menos 6 caracteres")
        }
        else{
            setDatos({
                email: "",
                password:"",
                cPassword:""
            })
            alert("Usuario registrado con exito!")
        }
        

    }

    const enviarFormulario = (e) => {
        e.preventDefault();
        validate();

    }


  return (
    <div className='register'>
        <h1>Register</h1>
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
            <label htmlFor="cPass">Confirmar Contraseña:</label>
            <input 
            type="password" 
            name='cPassword' 
            value={datos.cPassword} 
            placeholder='Confirme su Contraseña' 
            onChange={actualizarFormulario}/>
            <button type="submit">Enviar</button>
        </form>

    </div>
  )
}

export default RegisterPage