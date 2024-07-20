import React from 'react'
import placeholderImg from '../../public/100x100.svg'
import LocationIcon from '@/components/icons/LocationIcon'
import LinkIcon from '@/components/icons/LinkIcon'
import XIcon from '@/components/icons/XIcon'
import GitHubIcon from '@/components/icons/GitHubIcon'
import {User} from '@/interfaces/user'


interface Props {
    user: User | null
}

function validateURL(url: string) {
    if(!/^https?:\/\//.test(url)) {
        url = `https://` + url
    }
    return url
}

const UserCardInfo = ({user}: Props) => {

    return (
        <article className='bg-[#1F2A47] text-white p-6 rounded-xl grid grid-cols-3 grid-rows-auto gap-6'>
            <div className='flex justify-center items-center rounded-full col-start-1 row-start-1 col-span-1 row-span-2 xl:row-span-2'>
                <img src={`${user?.avatar_url}` || placeholderImg} width={120} height={120} alt="User Image" className=' rounded-full border-2 border-color-white object-cover'/>
            </div>
            <div className='col-start-2 row-start-1 col-span-2 row-span-1 xl:col-span-1 xl:row-span-1'>
                <h2 className='font-bold text-3xl'>{user?.name}</h2>
                <p className='text-[#0079FF]'>@{user?.login}</p>
            </div>
            <div className='col-start-2 row-start-2 col-span-2 row-span-1 xl:col-start-3 xl:row-start-1 xl:col-span-1 xl:row-span-2 xl:pt-2 flex xl:justify-end'>
                <p>Joined {new Date(user?.created_at || "").toLocaleDateString( "en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
            </div>
            <div className='col-start-1 row-start-3 col-span-3 row-span-1 xl:col-start-2 xl:row-start-2 xl:col-span-2 xl:row-span-1'>
                <p>{user?.bio || "This profile has no bio"}</p>
            </div>
            <div className='flex justify-around col-start-1 row-start-4 col-span-3 row-span-1 xl:col-start-2 xl:col-span-2 xl:row-span-1 rounded-lg bg-[#151C2F] p-4 text-white'>
                <article>
                    <h5>Repos</h5>
                    <p className='font-bold text-2xl'>{user?.public_repos}</p>
                </article>
                <article>
                    <h5>Followers</h5>
                    <p className='font-bold text-2xl'>{user?.followers}</p>
                </article>
                <article>
                    <h5>Following</h5>
                    <p className='font-bold text-2xl'>{user?.following}</p>
                </article>
            </div>
            <div className='grid grid-cols-1 xl:grid-cols-2 col-start-1 row-start-5 col-span-3 row-span-1 xl:row-start-4 xl:col-start-2 xl:col-span-2'>
                <article className='flex justify-start items-center p-2 space-x-2'>
                    <i><LocationIcon width={18} className='fill-white'/></i>
                    {user?.location ? <p className='truncate'>{user?.location}</p> : <p>This profile has no location</p>}
                </article>
                <article className='flex justify-start items-center p-2 space-x-2'>
                    <i><LinkIcon width={18} className='fill-white'/></i>
                    {user?.blog ? <a href={validateURL(user?.blog)} target="_blank" rel="noopener noreferrer" className='truncate'>{user?.blog}</a> : <p>This profile has no Website</p>}
                </article>
                <article className='flex justify-start items-center p-2 space-x-2'>
                    <i><GitHubIcon width={18} className='fill-white'/></i>
                    <a href={`${user?.html_url}`} target="_blank" rel="noopener noreferrer" className='truncate'>{user?.login}</a>
                </article>
                <article className='flex justify-start items-center p-2 space-x-2'>
                    <i><XIcon width={18} className='fill-white'/></i>
                    {user?.twitter_username ? <a href={`https://twitter.com/${user?.twitter_username}`} target="_blank" rel="noopener noreferrer" className='truncate'>{user?.twitter_username}</a> : <p>This profile has no Twitter</p>}
                </article>
            </div>
        </article>
    )
}

export default UserCardInfo