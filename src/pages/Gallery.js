import React, { Component } from 'react'
import CardView from '../components/gallery/CardView'
import Navbar from '../components/landing/Navbar'
import data from '../static/projects.json'

export class Gallery extends Component {
  static propTypes = {}

  render() {
    return (
      <div className='mt-2 mx-5'>
        <Navbar />
        <CardView data={data}/>
      </div>
    )
  }
}

export default Gallery