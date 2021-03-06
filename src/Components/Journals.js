import {Link} from 'react-router-dom'


function Journals({id, title, description, deleteJournal}) {

    function handleDelete() {
        fetch(`/journals/${id}`, {
            method: "DELETE"
        })
        deleteJournal(id)
    }

    return (
            <div className="ui container segment">
                <Link to={`/journals/${id}`}> <h2 className="ui left floated header">{title}</h2> 
                <div className="ui clearing divider"></div></Link> 
                <p className="ui left floated paragraph">{description}</p>
                <Link to={`journals/${id}/update`}><button className="ui green button">Update</button></Link>
                <button className="ui red button" onClick={handleDelete}>Delete</button>          
            </div>         
    )
}

export default Journals
