import React from 'react'
import Card from './Card'

function CardView({ data }) {
  let content = data['projects'].map( item => 
    <div className='group relative'>
      <Card
        name={item.title}
        description={item.description.substring(0, 100) + "..."}
        link={item.pageId}
      />
    </div>
  )
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h1 className="font-semibold text-3xl text-center">Project Gallery</h1>
      <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-2'>
       {content}
      </div>
    </div>
  )
}

export default CardView
