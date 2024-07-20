'use client'

import SearchForm from '@/components/SearchForm'
import UserCardInfo from '@/components/UserCardInfo'
import React, { useState } from 'react'
import {User} from '@/interfaces/user'
import NotFoundMsg from '@/components/NotFoundMsg'


const Home = () => {

  const [user, setUser] = useState<User | null>(null)

  const getUser = async(username: string) => {
    const res = await fetch(`https://api.github.com/users/${username}`)
    setUser(await res.json())
    if(!res.ok){
      setUser(null)
    }
  }

  return (
    <>

      <SearchForm getUser={getUser}/>
      {user !== null ? <UserCardInfo user={user}/> : <NotFoundMsg />}

    </>
  )
}

export default Home