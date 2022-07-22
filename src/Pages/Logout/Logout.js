import React from 'react'
import { useDispatch } from 'react-redux';
import userSlice from '../.././store/user'
import { Navigate } from 'react-router-dom'

const Logout = () => {

  const dispatch = useDispatch();

  localStorage.removeItem('accessToken')
  dispatch( userSlice.actions.removeUser() )

  return (
    <Navigate to='/login' />
  )
}

export default Logout