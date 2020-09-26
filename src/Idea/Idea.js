import React from 'react'
import './Idea.css'

const Idea = ({idea}) => {
  return(
    <div className='idea-card'>
      <h2>{idea.ideaName}</h2>
      <p>{idea.idea}</p>
    </div>
  )
}

export default Idea