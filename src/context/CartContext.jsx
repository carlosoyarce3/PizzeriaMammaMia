import { createContext, useState} from "react";
import pizzaCart from '../pizzas.js'

export const CartContext = createContext();

const CartProvider =({children})=>{

    const [cart,setCart] = useState(pizzaCart);
    const total = cart.reduce((acc, pizza) => acc + pizza.price * pizza.quantity,0);

    const add = (item) =>{
        item.quantity++;
        setCart([...cart])

    }

    const finder = (pizza) =>{
        let item = cart.find( x  => x.id == pizza.id);
        if ( item == undefined ){
            let newItem = { id: pizza.id , name: pizza.name, img: pizza.img , price: pizza.price , quantity: 1 };
            setCart([...cart,newItem])
        }else{
            add(item);
        }
    }
    return(
        <CartContext.Provider value={{cart,setCart,total,add,finder}}>
            {children}
        </CartContext.Provider>


    )

}

export default CartProvider;