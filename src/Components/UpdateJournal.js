import React from 'react'
import { useState, useEffect } from "react"
import {useHistory, useParams} from 'react-router-dom'
import Loading from './Loading'

function UpdateJournal({clearErrors}) {
    const history = useHistory()
    const [errors, setErrors] = useState([])
    const [journal, setJournal] = useState(null)
    const params = useParams()
    const [form, setForm] = useState({
        title: "",
        description: ""
    })

    useEffect(() => {
        fetch(`/journals/${params.id}`)
        .then(r => r.json())
        .then(data => {
            setJournal(data)
        })
    }, [params.id])

    if (!journal) return <Loading />

    const {title, description} = journal


    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
        clearErrors()
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch(`/journals/${params.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: form.title || {title},
                description: form.description || {description}
            })
        })
            .then(r => {
                if (r.ok) {
                    console.log("RES", r)
                    r.json().then((data) => {
                        setForm({
                            title: "",
                            description: "" 
                        })
                    })
                    history.push("/")
                } else {
                    r.json().then((err) =>
                        setErrors(err))
            }
        })
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

                    <div className="ui container">
                        <form className="ui large form" onSubmit={handleSubmit}>
                            <div className="ui stacked segment">
                                <div className="field">
                                    <input type="text" name="title" value={form.title} placeholder={title}  onChange={handleChange}/>
                                </div>
                                <div className="field">
                                    <textarea  name="description" rows="2" value={form.description} placeholder={description} onChange={handleChange}/>
                                </div>
                                <button className="ui fluid large orange submit button">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {errors.length > 0 ? <div className="ui error message">{errors.length > 0 ? errors.map((error) => <p>{error}</p>) : null}</div> : null}
        </div>
    )
}

export default UpdateJournal
