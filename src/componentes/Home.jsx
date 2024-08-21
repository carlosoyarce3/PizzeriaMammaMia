import React from 'react'
import Header from './Header'
import CardPizza from './CardPizza'
import pizzas from '../pizzas.js'

function Home() {
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