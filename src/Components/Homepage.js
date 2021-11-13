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
      .then(data => {
        console.log(data)
        setJournals(data)
      })
  }, [])

    if (!journals) return <Loading />
  

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


