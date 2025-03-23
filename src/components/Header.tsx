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
    <div className='flex justify-end'>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  )
}

export default Header
