import React, {useEffect, useState} from 'react';
import '../App/App.css';
import Form from '../Form/Form'
import Ideas from '../Ideas/Ideas'

const App = () => {

  const [ideas, setIdeas] = useState([])

  const getIdeas = () => {
    const ideaList = [
      {ideaName: 'Dog', idea: 'Mechanical Squirrel'},
      { ideaName: 'Cat', idea: 'Mechanical Bird' }
    ]
    setIdeas(ideaList)
  }

  useEffect(() => {
    getIdeas()
  }, [])

  const addIdea = (idea) => {
    const ideasCopy = ideas
    ideasCopy.push(idea)
    setIdeas(ideasCopy)
  }


  return (
    <div className="App">
      <header className="App-header">
        Ideabox with Hooks
      </header>
      <Form addIdea={addIdea}/>
      <Ideas ideas={ideas}/>
    </div>
  );
}

export default App;
