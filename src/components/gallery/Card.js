import React from 'react'

function Card({name, description, link}) {
  return (
    <div className="card w-92 bg-neutral text-neutral-content mx-4 my-4 hover:bg-neutral-focus">
    <div className="card-body">
      <h2 className="card-title">{name}</h2>
      <p>{description}</p>
      <div className="card-actions justify-end">
      <a role="button" href={"gallery/"+link} className="btn">Try It!</a>
      </div>
    </div>
    </div>
  )
}

export default Card
