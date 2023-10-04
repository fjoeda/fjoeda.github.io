import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/landing/Navbar'
import ProjectView from '../components/gallery/ProjectView'

function Projects() {
  let { pageId } = useParams()
  return (
    <div className='mt-2 mx-5'>
      <Navbar />
      <ProjectView pageId={pageId}/>
    </div>
  )
}

export default Projects