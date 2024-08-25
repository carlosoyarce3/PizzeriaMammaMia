import React from 'react'

function CardPizza({ pizzas }) {
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
          <button className='more'>Ver Más 👀</button>
          <button>Añadir 🛒</button>
        </div>
      </div>
    </div>
  )
}

export default CardPizza