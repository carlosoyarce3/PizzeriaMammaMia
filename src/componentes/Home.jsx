import React, { useEffect, useState } from 'react'
import Header from './Header'
import CardPizza from './CardPizza'
//import pizzas from '../pizzas.js'

function Home() {
  const [pizzas,setPizzas] = useState([]);

  const getPizzas = async()=>{
    const result = await fetch("http://localhost:5000/api/pizzas");
    const data = await result.json();
    setPizzas(data);
  }

  useEffect(()=>{getPizzas()},[])

  return (
    <div>
      <Header />
      <div className='container'>
        
        {pizzas.map((pizza,index) => (
          <div className='cardContainer' key={pizza.id}>
            <CardPizza pizzas={pizza}/>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Home