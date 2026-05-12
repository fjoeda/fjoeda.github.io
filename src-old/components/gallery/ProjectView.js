import React from 'react'
import data from '../../static/projects.json'


function ProjectView({pageId}) {
  const pageInfo = data['projects'].filter(item => item.pageId === pageId);
  if (pageInfo.length === 0) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h1 className="font-semibold text-3xl text-center">Project not found</h1>
        <a role="button" href="/gallery" className="btn">Back to gallery</a>
      </div>
    )
  } else {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        
        
        <iframe
          title='Demo'
          className='rounded-lg mx-6'
          src={pageInfo[0].iframeUrl}
          height="550"
          style={{width:"100%", border:"none"}}
        ></iframe>
        <div className="divider" />
        <h1 className="font-semibold text-xl mx-6">{pageInfo[0].title}</h1>
        <p className='mx-6 my-6'>
         {pageInfo[0].description}
        </p>
        <a role="button" href="/gallery" className="btn mx-5 my-6">Back to gallery</a>
      </div>
    )
  }

  
}

export default ProjectView