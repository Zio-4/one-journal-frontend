import {Link} from 'react-router-dom'
import {Redirect} from 'react-router-dom'


function Journals({id, title, description, user, deleteJournal}) {

    function handleDelete() {
        fetch(`/journals/${id}`, {
            method: "DELETE"
        })
        deleteJournal(id)
    }

    return (
            <div className="ui segment">
                <Link to={`/journals/${id}`}> <h2 className="ui left floated header">{title}</h2> 
                <div className="ui clearing divider"></div></Link> 
                <p className="ui left floated paragraph">{description}</p>
                <button className="ui red button" onClick={handleDelete}>Delete</button>
            </div>         
    )
}

export default Journals
