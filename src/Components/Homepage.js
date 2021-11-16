import Journals from './Journals'
import {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Redirect} from 'react-router-dom'
import Loading from './Loading'

function Homepage({user, setJournals, journals, deleteJournal}) {
    const date = new Date()

    useEffect(() => {
      fetch("/journals")
      .then(res => res.json())
      .then(journalData => {
        console.log("journal data", journalData)
        setJournals(journalData)
      })
  }, [setJournals])

    if (!journals) return <Loading />
  
    const renderJournals = () => {
      if (journals.length > 0) {
        return journals.map(j => <Journals key={j.id} title={j.title} description={j.description} id={j.id} deleteJournal={deleteJournal}/>)
      } else {
        console.log("hit else")
        return <h3>You have not created any journals yet!</h3>
      }
    }
    // const renderedJournals = journals.map(j => <Journals key={j.id} title={j.title} description={j.description} id={j.id} deleteJournal={deleteJournal}/>)

    if (!user) {
        return <Redirect to="/login" /> 
    }
    return (
       <>
        <h2>How was your day today, {user.name}?</h2>
        {date.toDateString()}
        <h2>Journals</h2>
        {renderJournals()}
        <Link to='/journals/new' className="ui orange button">Create New Journal</Link>
       </>
    )
}

export default Homepage


