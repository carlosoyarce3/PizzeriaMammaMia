import React,{useContext} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { CartContext } from '../context/CartContext';

function CardPizza({ pizzas }) {
  const {finder} = useContext(CartContext);
  const navegate = useNavigate();
  const irAPizza = () => {
    navegate(`/pizza/${pizzas.id}`)
  }

  return (
    <div className='pizzaCard'>
      <div className='cardTop'> 
        <img src={pizzas.img} alt={pizzas.name} />
        <h4>Pizza {pizzas.name}</h4>
      </div>
      <hr />
      <div className="cardMid">
        <p>🍕 Ingredientes: </p>
        <ul>
          {pizzas.ingredients.map((ingrediente,index) => (
            <li key={index}>{ingrediente}</li>
          ))}
        </ul>
      </div>
      <hr />
      <div className="cardBot">
        <h3>Precio: ${pizzas.price.toLocaleString()}</h3>
        <div className='btns'>
          <button className='more' onClick={irAPizza}>Ver Más 👀</button>
          <button onClick={()=>finder(pizzas)}>Añadir 🛒</button>
        </div>
      </div>
    </div>
  )
}

export default CardPizza