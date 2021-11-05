import React, { useState } from 'react'

const App = () => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({})
  const [popular, setPopular] = useState({})

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const setRandom = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const setVote = selected => {
    const newVotes = { 
      ...votes, 
      [selected]: votes[selected] ? votes[selected] + 1 : 1  
    }
    setVotes(newVotes);
    getPopular();
  }

  const getPopular = () => {
    var mostPopular = Object.keys(votes).reduce((a, b) => votes[a] > votes[b] ? a : b, 0);
    setPopular({[mostPopular]: votes[mostPopular] ? votes[mostPopular] + 1 : 1});
    console.log(popular)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <button onClick={() => setVote(selected)}>vote</button>
      <button onClick={setRandom}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[Object.keys(popular)[0]]}</p>
      { Object.values(popular)[0] ?
      <> 
        has { Object.values(popular)[0] } votes
      </> : <>No anecdoctes have been voted yet.</> }
    </div>
  )
}

export default App