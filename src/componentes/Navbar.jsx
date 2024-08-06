import React from 'react'



function Navbar() {
    const Total = 25000;
    const Token = false;

  return (
    <div className='nav'>
        <div className='navLeft'>
            <p>Pizzería Mamma Mia!</p>
            <button>🍕 Home</button>
            <button>🔐 Login</button>
            <button>🔐 Register</button>
        </div>
        <div className='navRight'>
         <button>🛒 Total: ${Total.toLocaleString()}</button>
        </div>

    </div>
  )
}

export default Navbar