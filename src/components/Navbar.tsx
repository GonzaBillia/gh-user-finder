'use client'

import React, { useEffect, useState } from 'react'
import LightIcon from '@/components/icons/LightIcon'
import DarkIcon from '@/components/icons/DarkIcon'

const Navbar = () => {

    const initialTheme = (): "light" | "dark" => {
        if(localStorage.getItem("theme")){
            return localStorage.getItem("theme") as "light" | "dark"
        }else {
            return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
        }
    }

    const [theme, setTheme] = useState<"light" | "dark">(initialTheme)

    const handleTheme = () => {
        theme === "light" ? setTheme("dark") : setTheme("light")
    }

    useEffect(() => {
        if(theme === "dark"){
            document.documentElement.classList.add("dark")
        }else{
            document.documentElement.classList.remove("dark")
        }
        localStorage.setItem("theme", theme)
    },[theme])

    return (
        <header className='flex justify-between items-center px-2'>
            <h1 className='text-3xl font-bold text-[#151C2F] dark:text-white flex-1'>Devfinder</h1>
            <div className='flex items-center space-x-4'>
                <span className='uppercase text-[#151C2F] dark:text-white'>{theme === "dark" ? "Light" : "Dark"}</span>
                <button onClick={handleTheme}>{theme === "dark" ? <LightIcon height={24} className=' text-[#151C2F] dark:fill-white fill-[#151C2F]'/> : <DarkIcon width={24} className=' text-[#151C2F] dark:fill-white fill-[#151C2F]'/>}</button>
            </div>
        </header>
    )
}

export default Navbar