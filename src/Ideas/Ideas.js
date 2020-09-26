import React from 'react'
import './Ideas.css'
import Idea from '../Idea/Idea'

const Ideas = ({ideas}) => {
  let ideasList = <span>Add an idea to get started!</span>
  console.log(ideas)
  if (ideas.length > 0 ) {
    ideasList = ideas.map(idea => {
      return <Idea key={idea.ideaName} idea={idea}/>
    }) 
  }
  return(
    <section className='ideas-section'>
      {ideasList}
    </section>
  )


}

export default Ideas