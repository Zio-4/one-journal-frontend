import {useState} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import {Redirect} from 'react-router-dom'

function NewJournalPost({user}) {
    const params = useParams()
    const history = useHistory()
    const [errors, setErrors] = useState([])
    const [form, setForm] = useState({
        title: "",
        content: ""
    })

    function handleChange(e) {
        setForm({...form, [e.target.name]: e.target.value})
    }


    function handleSubmit(e) {
        e.preventDefault()
        fetch("/journal_posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
              title: form.title,
              content: form.content,
              journal_id: params.id
          }),
        })
          .then((r) => {
            if (r.ok) {
              r.json().then((data) => {
                  console.log("New journal post data:", data)
                setForm({
                    title: "",
                    content: ""
                });     
              });
              history.push(`/journals/${params.id}`)
            } else {
              r.json().then((err) => setErrors(err.errors));
            }
          })
    }

    if (!user) {
        return <Redirect to="/login" /> 
    }
    return (
        <div>
            <div className="ui middle aligned center aligned grid">
                <div className="column">
                    <h2 className="ui orange header">
                        <div className="content">
                            New journal post
                        </div>
                    </h2>
                    <form className="ui large form" onSubmit={handleSubmit}>
                        <div className="ui stacked segment">
                            <div className="field">
                                <input type="text" name="title" value={form.title} placeholder="Post Title (Optional)" onChange={handleChange}/>
                            </div>
                            <div className="field">
                                <textarea placeholder="Content" name="content" value={form.content} rows="2" onChange={handleChange}/>
                            </div>
                            <button className="ui fluid large orange submit button" type="submit">Post</button>
                        </div>                        
                    </form>
                </div>
            </div>
            {errors.length > 0 ? <div className="ui error message">{errors.length > 0 ? errors.map((error) => <p>{error}</p>) : null}</div> : null}
        </div>
    )
}

export default NewJournalPost
