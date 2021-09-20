import {Link} from 'react-router-dom'
import {Redirect} from 'react-router-dom'

function JournalPosts({title, date, summary, postID, journalID, user}) {

    if (!user) {
        return <Redirect to="/login" /> 
    }
    return (
            <div className="ui segment">
                <Link to={`/journals/${journalID}/journal_posts/${postID}`}> <h2 className="ui left floated header">{title}</h2> 
                <p className="ui right floated header">{date}</p>
                <div className="ui clearing divider"></div></Link> 
                <p className="ui left floated paragraph">{summary}</p>
            </div> 
    )
}

export default JournalPosts
