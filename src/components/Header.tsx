"use client"
import React from 'react'
import { Button } from './ui/button'
import { redirect } from 'next/navigation'

const Header = () => {
    const handleLogout = () => {
        localStorage.removeItem("ACCESS_TOKEN")
        redirect("/")
    }
  return (
    <div className='flex justify-end items-center w-[650px] overflow-hidden'>
      <Button onClick={handleLogout} 
      className='button-primary'
      >Logout</Button>
    </div>
  )
}

export default Header
