import React from 'react'
import LightIcon from '@/components/icons/LightIcon'
import DarkIcon from '@/components/icons/DarkIcon'

const Navbar = () => {
    return (
        <header className='flex justify-between items-center px-2'>
            <h1 className='text-3xl font-bold text-white flex-1'>Devfinder</h1>
            <div className='flex items-center space-x-2'>
                <span className='uppercase text-white'>Light</span>
                <button><LightIcon width={24} className='fill-white' /></button>
            </div>
        </header>
    )
}

export default Navbar