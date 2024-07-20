'use client'

import React from 'react'
import SearchIcon from '@/components/icons/SearchIcon'

interface Props {
    getUser: (username: string) => Promise<void>
}

const SearchForm = ({getUser}: Props) => {

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const username = (e.currentTarget.username.value).trim()

        if(!username) return
        await getUser(username)
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='flex items-center space-x-2 bg-white dark:bg-[#1F2A47] p-2 rounded-xl'>
            <span>
                <SearchIcon className='fill-[#0079FF] min-w-5 max-w-7'/>
            </span>
            <input type="search" name="username" id="search-input" placeholder='Search GitHub Username' className='h-14 flex-1 bg-transparent p-2 rounded-lg placeholder-slate-600 dark:placeholder-white focus:outline-none focus:ring-2 focus:ring-[#0079FF] text-black dark:text-white'/>
            <button className='bg-[#0079FF] text-white font-bold rounded-lg p-4'>Search</button>
            </form>
        </div>
    )
    }

export default SearchForm