import React from 'react'
import {useParams} from 'react-router-dom'

function NewJournalPost({user}) {
    const params = useParams()
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
              content: form.title,
              journal_id: user.id
          }),
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
                                <input type="text" name="title" placeholder="Post Title (Optional)" onChange={handleChange}/>
                            </div>
                            <div className="field">
                                <textarea placeholder="Content" name="content" rows="2" onChange={handleChange}/>
                            </div>
                            <div className="ui fluid large orange submit button">Post</div>
                        </div>

                        <div className="ui error message">test</div>

                    </form>
                </div>
            </div>
    )
}

export default NewJournalPost
