import React from 'react'

export const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4 w-full absolute'>
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer z-10'>NETFLIX</h1>
        <div>
            <button className='text-white pr-2'>Sign In</button>
            <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>Sign Up</button>
        </div>
    </div>
  )
}
