import React, { useState } from 'react'
import './Form.css'

const Form = ({addIdea}) => {
  const [ideaName, setIdeaName] = useState('')
  const [ideaDesc, setIdeaDesc] = useState('')

 const submit = (e) => {
    e.preventDefault()
    const idea = {ideaName: ideaName, idea: ideaDesc}
    addIdea(idea)
    setIdeaDesc('')
    setIdeaName('')
  }

  return(
    <form>
      <input
        placeholder='Idea Name'
        onChange={(e) => setIdeaName(e.target.value)}
        value={ideaName}
      />
      <input 
        placeholder='Idea'
        onChange={(e) => setIdeaDesc(e.target.value)}
        value={ideaDesc}
      />
      <button onClick={submit}>Submit</button>

    </form>

  )



}

export default Form