import Link from 'next/link'
import React from 'react'

function notFound() {
  return (
    <div className='grid place-items-center min-h-screen'>
        <div className="flex items-center justify-center">
            <img src="/Error404.png" alt="Not Found Error" className='w-full h-full object-contain' />
        </div>
        <h2 className='text-dark-gray text-4xl text-center'>Not Found</h2>
        <Link href='/'>Go Back</Link>
    </div>
  )
}

export default notFound