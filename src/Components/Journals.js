import {Link} from 'react-router-dom'


function Journals({id, title, description}) {

    return (
            <div className="ui segment">
                <Link to={`/journals/${id}`}> <h2 className="ui left floated header">{title}</h2> 
                <div className="ui clearing divider"></div></Link> 
                <p className="ui left floated paragraph">{description}</p>
            </div>         
    )
}

export default Journals
