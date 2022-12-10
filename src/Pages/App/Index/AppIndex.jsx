import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../../Components/Header/Header'

const AppIndex = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default AppIndex