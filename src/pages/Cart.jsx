import React, { useEffect , useContext} from 'react'
import { CartContext } from '../context/CartContext';


const Cart = () => {
    const {cart,setCart,total,add} = useContext(CartContext);
    
    useEffect(()=>{
        cart.map((item, index) => {
            if(item.quantity === 0){
                cart.splice(index,1);
                setCart([...cart]);
            }
        })
    },[])


    const sub = (item) =>{
        item.quantity--;
        setCart([...cart]);
        
        if(item.quantity==0){
            let index = cart.findIndex(indx => indx.id === item.id);
            cart.splice(index,1);
            setCart([...cart]);
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