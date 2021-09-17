import {useState} from 'react'
import {useHistory} from 'react-router-dom'

function NewJournal({addJournal}) {
    const [errors, setErrors] = useState([])
    const [form, setForm] = useState({
        title: "",
        description: ""
    })
    const history = useHistory()

    function handleChange(e) {
        setForm({...form, [e.target.name]: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch("/journals", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(form),
        })
          .then((r) => {
            if (r.ok) {
              r.json().then((data) => {
                addJournal(data);
                setForm({
                    title: "",
                    description: ""
                });
                history.push(`/journals/${data.id}`)
              });
            } else {
              r.json().then((err) => setErrors(err.errors));
            }
          })
    }

    return (
        <div>
            <div className="ui middle aligned center aligned grid">
                <div className="column">
                    <h2 className="ui orange header">
                        <div className="content">
                            New journal
                        </div>
                    </h2>
                    <form className="ui large form" onSubmit={handleSubmit}>
                        <div className="ui stacked segment">
                            <div className="field">
                                <input type="text" name="journal-name" placeholder="Journal Name" onChange={handleChange}/>
                            </div>
                            <div className="field">
                                <textarea placeholder="description" rows="2" onChange={handleChange}/>
                            </div>
                            <div className="ui fluid large orange submit button">Create</div>
                        </div>

                        <div className="ui error message">{errors.length > 0 ? errors.map((error) => <p>{error}</p>) : null}</div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NewJournal
