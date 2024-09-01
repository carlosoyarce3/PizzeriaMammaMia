import React from 'react'
import {Link} from 'react-router-dom'


function Navbar() {
    const Total = 25000;
    const Token = false;

  return (
    <div className='nav'>
        <div className='navLeft'>
            <p>Pizzería Mamma Mia!</p>
            <Link to="/"><button>🍕 Home</button></Link>
            <Link to="/login"><button>🔐 Login</button></Link>
            <Link to="/register"><button>🔐 Register</button></Link>
        </div>
        <div className='navRight'>
          <Link to="/profile"><button>👤 Perfil</button></Link>
          <Link to="/cart"><button>🛒 Total: ${Total.toLocaleString()}</button></Link>
        </div>

    </div>
  )
}

export default Navbar