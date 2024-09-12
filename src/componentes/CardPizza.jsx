import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import { CartContext } from '../context/CartContext';

function CardPizza({ pizzas }) {
  const {finder} = useContext(CartContext);
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
          <Link to="/pizza/p001"><button className='more'>Ver Más 👀</button></Link>
          <button onClick={()=>finder(pizzas)}>Añadir 🛒</button>
        </div>
      </div>
    </div>
  )
}

export default CardPizza