import React from 'react'
import { useParams } from 'react-router-dom'
import ProjectView from '../components/gallery/ProjectView'

function Projects() {
  let { pageId } = useParams()
  return (
    <div className='mt-2 mx-5'>
      <ProjectView pageId={pageId}/>
    </div>
  )
}

export default Projects