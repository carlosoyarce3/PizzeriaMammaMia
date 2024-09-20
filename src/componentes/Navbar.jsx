import React, { useContext } from 'react'
import {NavLink} from 'react-router-dom'
import { CartContext } from '../context/CartContext';
import { UserContext } from '../context/UserContext';


function Navbar() {
    const {total} = useContext(CartContext);
    const {token,logout} = useContext(UserContext);
    const loggedIn = () => (token ? "active" : "notActive");
    const loggedOut = () => (token ? "notActive" : "active");

  return (
    <div className='nav'>
        <div className='navLeft'>
            <p>Pizzería Mamma Mia!</p>
            <NavLink to="/"><button>🍕 Home</button></NavLink>
            <NavLink className={loggedOut} to="/login"><button>🔐 Login</button></NavLink>
            <NavLink className={loggedOut} to="/register"><button>🔐 Register</button></NavLink>
            <NavLink className={loggedIn} to="/profile"><button>👤 Perfil</button></NavLink>
        </div>
        <div className='navRight'>
          <NavLink className={loggedIn}><button onClick={()=>logout()}>Logout ↪️</button></NavLink>
          <NavLink to="/cart"><button>🛒 Total: ${total.toLocaleString()}</button></NavLink>
        </div>

    </div>
  )
}

export default Navbar