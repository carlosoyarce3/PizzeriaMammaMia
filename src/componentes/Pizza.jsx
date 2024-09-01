import React, { useEffect, useState } from 'react'

const Pizza = () => {
    const [pizza,setPizza] = useState({})

    const getPizza = async() => {
        const result = await fetch("http://localhost:5000/api/pizzas/p001");
        const data = await result.json();
        setPizza(data);
    }

    useEffect(()=>{
        getPizza();
    },[])


  return (
    <div className='pizzaDisplay'>
        <div className="displayCard">
            <img src={pizza.img} alt={pizza.name} />
            <div className="description">
                <h2>{pizza.name}</h2>
                <span>{pizza.desc}</span>
            </div>
            <div className="ingredients">
                <p>🍕 Ingredientes:</p>
                <ul>
                    {pizza.ingredients?.map((ingredient,index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
            </div>
            <div className="checkOut">
                <h3>Precio: {pizza.price?.toLocaleString()}</h3>
                <button>Añadir 🛒</button>
            </div>
        </div>
    </div>
  )
}

export default Pizza