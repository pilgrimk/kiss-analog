import React, { useContext } from 'react'
import { Context } from '../context/Context';
import './Logout.css'

function Logout() {
  const { dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });

    // navigate to the HOME screen
    window.location.replace("/");
  };

  return (
    <>
      <button className='logout' onClick={handleLogout}>Logout</button>
    </>
  )
}

export default Logout