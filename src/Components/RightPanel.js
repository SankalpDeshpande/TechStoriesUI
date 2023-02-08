import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function RightPanel() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    navigate('/');
  }
  return (
    <div className='rightPanel'>
      <button onClick={logout}>Logout</button>
    </div>
  )
}
