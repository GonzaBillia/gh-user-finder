import React from 'react'
import Image from 'next/image'
import placeholderImg from '../../public/100x100.svg'
import LocationIcon from '@/components/icons/LocationIcon'
import LinkIcon from '@/components/icons/LinkIcon'
import XIcon from '@/components/icons/XIcon'
import GitHubIcon from '@/components/icons/GitHubIcon'

const UserCardInfo = () => {

    return (
        <article className='bg-[#1F2A47] text-white p-6 rounded-xl grid grid-cols-3 grid-rows-auto gap-6'>
            <div className='flex justify-center items-center rounded-full col-start-1 row-start-1 col-span-1 row-span-2 xl:row-span-2'>
                <Image src={placeholderImg} alt="User Image" className='w-[100px] h-[100px] rounded-full object-cover'/>
            </div>
            <div className='col-start-2 row-start-1 col-span-2 row-span-1 xl:col-span-1 xl:row-span-1'>
                <h2 className='font-bold text-3xl'>Fullname</h2>
                <p className='text-[#0079FF]'>@username</p>
            </div>
            <div className='col-start-2 row-start-2 col-span-2 row-span-1 xl:col-start-3 xl:row-start-1 xl:col-span-1 xl:row-span-2 xl:pt-2 flex xl:justify-end'>
                <p>joined date</p>
            </div>
            <div className='col-start-1 row-start-3 col-span-3 row-span-1 xl:col-start-2 xl:row-start-2 xl:col-span-2 xl:row-span-1'>
                <p>Don't have Bio yet</p>
            </div>
            <div className='flex justify-around col-start-1 row-start-4 col-span-3 row-span-1 xl:col-start-2 xl:col-span-2 xl:row-span-1 rounded-lg bg-[#151C2F] p-4 text-white'>
                <article>
                    <h5>Repos</h5>
                    <p className='font-bold text-2xl'>197</p>
                </article>
                <article>
                    <h5>Followers</h5>
                    <p className='font-bold text-2xl'>3251</p>
                </article>
                <article>
                    <h5>Following</h5>
                    <p className='font-bold text-2xl'>17</p>
                </article>
            </div>
            <div className='grid grid-cols-1 xl:grid-cols-2 col-start-1 row-start-5 col-span-3 row-span-1 xl:row-start-4 xl:col-start-2 xl:col-span-2'>
                <article className='flex justify-start items-center p-2 space-x-2'>
                    <i><LocationIcon width={18} className='fill-white'/></i>
                    <p>Location</p>
                </article>
                <article className='flex justify-start items-center p-2 space-x-2'>
                    <i><LinkIcon width={18} className='fill-white'/></i>
                    <p>Website</p>
                </article>
                <article className='flex justify-start items-center p-2 space-x-2'>
                    <i><GitHubIcon width={18} className='fill-white'/></i>
                    <p>GitHub</p>
                </article>
                <article className='flex justify-start items-center p-2 space-x-2'>
                    <i><XIcon width={18} className='fill-white'/></i>
                    <p>Blog</p>
                </article>
            </div>
        </article>
    )
}

export default UserCardInfo