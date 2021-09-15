import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import JournalPosts from './JournalPosts'


function JournalPage() {
    const [journal, setJournal] = useState(null)
    const params = useParams()

    useEffect(() => {
        fetch(`/journals/${params.id}`)
        .then(r => r.json())
        .then(data => {
            setJournal(data)
        })
    }, [params.id])

    if (!journal) return <h2>Loading...</h2>

    const renderedJournalPosts = journal.journal_posts.map(p => <JournalPosts key={p.id} title={p.title} date={p.post_date} summary={p.summary} postID={p.id} journalID={params.id}/>)

    return (
        <>
            <h2>Journal: {journal.title}</h2>
            {renderedJournalPosts} 
        </>
    )
}
export default JournalPage
