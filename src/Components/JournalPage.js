import {useEffect, useState} from 'react'
import {useParams, Link} from 'react-router-dom'
import JournalPosts from './JournalPosts'
import {Redirect} from 'react-router-dom'


function JournalPage({user}) {
    const [journal, setJournal] = useState(null)
    const params = useParams()

    useEffect(() => {
        fetch(`/journals/${params.id}`)
        .then(r => r.json())
        .then(data => {
            setJournal(data)
        })
    }, [params.id])

    if (!user) {
        return <Redirect to="/login" /> 
    }
    
    if (!journal) return <h2>Loading...</h2>

    const renderedJournalPosts = journal.journal_posts.map(p => <JournalPosts key={p.id} title={p.title} date={p.post_date} summary={p.summary} postID={p.id} journalID={params.id}/>)


    return (
        <>
            <h2>Journal: {journal.title}</h2>
            <Link to={`/journals/${params.id}/journal_posts/new`}><input type="button" className="ui orange button" value="New Journal Post"/></Link>
            {renderedJournalPosts} 
        </>
    )
}
export default JournalPage
