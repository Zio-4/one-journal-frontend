import {useParams, useHistory} from 'react-router-dom'
import {useEffect, useState} from 'react'
import {Redirect} from 'react-router-dom'

function JournalPostPage({user}) {
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
}, [jid, id])

// adding dependencies for useEffect hook

    if (!user) {
        return <Redirect to="/login" /> 
    }
    
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
            <div className="ui raised segment container">
                <p>{content}</p>
            </div>
        </>
    )
}

export default JournalPostPage
