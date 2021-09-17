import Journals from './Journals'
import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

function Homepage({user, onLogout, setJournals, journals}) {
    //creates a new date every time the page is rendered
    const date = new Date()

    useEffect(() => {
      fetch("/journals")
      .then(res => res.json())
      .then(data => {
        setJournals(data)
      })
  }, [])

    const renderedJournals = journals.map(j => <Journals key={j.id} title={j.title} description={j.description} id={j.id}/>)

    return (
       <>
        <h2>How was your day today, "users name"?</h2>
        {date.toDateString()}
        <h2>Journals</h2>
        {renderedJournals}
        <Link to='/journals/new' className="ui orange button">Create New Journal</Link>
       </>
    )
}

export default Homepage
