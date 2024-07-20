import React, { useEffect, useState } from 'react'

const NotFoundMsg = () => {

    const [showError, setShowError] = useState<boolean>(true)

    useEffect(() => {
        setTimeout(() => {
            setShowError(false)
        }, 5000)
    }, [])

    return (
        <>
            {showError === true ? <article className='bg-red-500 text-white p-6 rounded-xl gap-6'>
            <h1>User Not Found :(</h1>
        </article> : null}
        </>
    )
}

export default NotFoundMsg