import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
        <div>
            <h1>¡Mamma Mia!</h1>
            <h4>La pagina que buscas no está disponible :(</h4>
            <Link to="/"><button>Volvamos a casa :(</button></Link>
        </div>
        <img src="https://static.vecteezy.com/system/resources/previews/026/776/277/original/cute-sad-pizza-character-funny-unhappy-pie-cartoon-emoticon-in-flat-style-food-emoji-illustration-vector.jpg" alt="Pizza Triste" className='notFound'/>
        
    </>
  )
}

export default NotFound