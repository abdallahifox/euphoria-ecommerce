import { NotFoundComponent } from '@/app/Components'
import { Metadata } from 'next'
import React from 'react'

 export const metadata:Metadata = {
  title:'Not-Found'
}

function NotFound() {
  return (
    <div>

      <NotFoundComponent/>
    </div>
  )
}

export default NotFound