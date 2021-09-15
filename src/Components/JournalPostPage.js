import {useParams, useHistory} from 'react-router-dom'
import {useEffect, useState} from 'react'

function JournalPostPage() {
    const params = useParams()
    let { jid } = useParams()
    let { id } = useParams()
    const [journalPost, setJournalPost] = useState(null)

    const history = useHistory()
    

   useEffect(() => {
    fetch(`/journals/${jid}/journal_posts/${id}`)
    .then(res => res.json())
    .then(data => {
      setJournalPost(data)
    })
}, [])

    if (!journalPost) return <h2>Loading...</h2>

    function handleClick() {
        history.push(`/journals/${jid}`)
    }


    const {title, post_date, content} = journalPost
   
    return (
        <>
            <input className="ui orange button" type="button" value="Back to Journal" onClick={handleClick}/>
            <p className="ui header">{title}</p>
            <p className="ui content">{post_date}</p> 
            <div className="ui raised segment">
                <p>{content}</p>
            </div>
        </>
    )
}

export default JournalPostPage
