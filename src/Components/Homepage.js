import Journals from './Journals'
import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

function Homepage() {
    const date = new Date()

    const [journals, setJournals] = useState([])

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
