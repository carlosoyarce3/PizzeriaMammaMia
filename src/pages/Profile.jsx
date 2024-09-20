import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const Profile = () => {
  const {logout} = useContext(UserContext);

  return (
    <div>
        <h2>Email: user@user.com</h2>
        <button className='minCart' onClick={()=>logout()}>Cerrar Sesion</button>
    </div>
  )
}

export default Profile