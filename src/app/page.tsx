import React from 'react'
import SearchIcon from '@/components/icons/SearchIcon'

const Home = () => {
  return (
    <>
      <div>
        <form className='flex items-center gap-2 bg-[#1F2A47] p-2 rounded-xl'>
          <span>
            <SearchIcon className='fill-[#0079FF] min-w-5 max-w-7'/>
          </span>
          <input type="search" name="search" id="search-input" placeholder='Search GitHub Username' className='h-14 flex-1 bg-transparent p-2 rounded-lg placeholder-white focus:outline-none focus:ring-2 focus:ring-[#0079FF]'/>
          <button className='bg-[#0079FF] text-white font-bold rounded-lg p-4'>Search</button>
        </form>
      </div>
      <div>
        <article>
          Descripcion de pagina
        </article>
      </div>
    </>
  )
}

export default Home