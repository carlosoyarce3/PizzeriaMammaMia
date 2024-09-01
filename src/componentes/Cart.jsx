import React, { useState } from 'react'
import pizzaCart from '../pizzas.js'

const Cart = () => {
    const [cart,setCart] = useState(pizzaCart);
    const total = cart.reduce((acc, pizza) => acc + pizza.price * pizza.quantity,0);
    console.log(total);

    const add = (item) =>{
        item.quantity++;
        setCart([...cart])
        console.log(item.quantity)

    }

    const sub = (item) =>{
        item.quantity--;
        setCart([...cart]);
        let index = cart.findIndex(indx => indx.id === item.id);
        if(item.quantity==0){
            const newCart = cart.splice(index,1);
            setCart([...cart]);
            console.log(cart);
        }
    }

    return (
        <div className='cartDisp'>
            <div className='cartContainer'>
                {cart.map((item, index) => (
                    <div className='cartCard' key={item.id}>
                        <img src={item.img} alt={item.name} key={index} />
                        <div className="cartInfo">
                            <h3>{item.name}</h3>
                            <h5>Cantidad: {item.quantity}</h5>
                            <h5>Precio: {item.price.toLocaleString()}</h5>
                            <h5>Subtotal: {(item.price * item.quantity).toLocaleString()}</h5>
                            <div className="cartButtons" key={"btns" + (index)}>
                                <button className='addCart cartBtn' onClick={()=>add(item)}>+</button>
                                <button className='minCart cartBtn' onClick={()=>sub(item)}>-</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="pagar">
                <h2>Total : {total.toLocaleString()}</h2>
                <button>Pagar</button>
            </div>
        </div>

    )
}

export default Cart