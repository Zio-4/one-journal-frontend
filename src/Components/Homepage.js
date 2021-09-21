import Journals from './Journals'
import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {Redirect} from 'react-router-dom'

function Homepage({user, onLogout, setJournals, journals, deleteJournal}) {
    const date = new Date()

    useEffect(() => {
      fetch("/journals")
      .then(res => res.json())
      .then(data => {
        console.log("journals:", data)
        setJournals(data)
      })
  }, [])

  console.log("user in homepage:", user)
  

    const renderedJournals = journals.map(j => <Journals key={j.id} title={j.title} description={j.description} id={j.id} deleteJournal={deleteJournal}/>)

    if (!user) {
        return <Redirect to="/login" /> 
    }
    return (
       <>
        <h2>How was your day today, {user.name}?</h2>
        {date.toDateString()}
        <h2>Journals</h2>
        {renderedJournals}
        <Link to='/journals/new' className="ui orange button">Create New Journal</Link>
       </>
    )
}

export default Homepage
