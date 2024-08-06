import React from 'react'

function CardPizza(props) {
  return (
    <div className='pizzaCard'>
      <div className='cardTop'> 
        <img src={props.img} alt={props.name} />
        <h4>Pizza {props.name}</h4>
      </div>
      <hr />
      <div className="cardMid">
        <p>Ingredientes</p>
        <span>🍕 {props.ingredients.join(", ")}</span>
      </div>
      <hr />
      <div className="cardBot">
        <h3>Precio: ${props.price.toLocaleString()}</h3>
        <div className='btns'>
          <button className='more'>Ver Más 👀</button>
          <button>Añadir 🛒</button>
        </div>
      </div>
    </div>
  )
}

export default CardPizza