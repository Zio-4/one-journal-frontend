import React from 'react'
import { useState, useEffect } from "react"
import {useHistory, useParams} from 'react-router-dom'

function UpdateJournal({clearErrors}) {
    const history = useHistory()
    const [errors, setErrors] = useState([])
    const [journal, setJournal] = useState(null)
    const params = useParams()
    const [form, setForm] = useState({
        username: "",
        description: ""
    })

    useEffect(() => {
        fetch(`/journals/${params.id}`)
        .then(r => r.json())
        .then(data => {
            console.log("use effect", journal)
            setJournal(data)
        })
    }, [params.id])


    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
        clearErrors()
    }

    function handleSubmit() {

    }


    return (
        <div>
            <div className="ui middle aligned center aligned grid">
                <div className="column">
                    <h2 className="ui orange header">
                        <div className="content">
                            Update journal
                        </div>
                    </h2>
                    <form className="ui large form" onSubmit={handleSubmit}>
                        <div className="ui stacked segment">
                            <div className="field">
                                <input type="text" name="title" value={form.title}  onChange={handleChange}/>
                                {console.log("JSX return")}
                            </div>
                            <div className="field">
                                <textarea  name="description" rows="2" value={form.description} onChange={handleChange}/>
                            </div>
                            <button className="ui fluid large orange submit button">Update</button>
                        </div>
                    </form>
                </div>
            </div>
            {errors.length > 0 ? <div className="ui error message">{errors.length > 0 ? errors.map((error) => <p>{error}</p>) : null}</div> : null}
        </div>
    )
}

export default UpdateJournal


// placeholder={`${journal.title}`}  placeholder={`${journal.description}`}


//How do i get journal keys for placeholders? useEffect happens after returning of the JSX