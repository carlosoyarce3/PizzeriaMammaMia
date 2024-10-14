import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/UserContext'

const Profile = () => {
  const {logout} = useContext(UserContext);

  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if(token) {
      fetch("http://localhost:5000/api/auth/me", {
        headers: {
          Authorization : `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => setUser(data));
        
    }
  },[]);

  return (
    <div>
    {user ? (<div><h2>Email: {user.email}</h2>
        <button className='minCart' onClick={()=>logout()}>Cerrar Sesion</button></div>) : (<p>Please log in to view your profile</p>)}
    </div>
  )
}

export default Profile