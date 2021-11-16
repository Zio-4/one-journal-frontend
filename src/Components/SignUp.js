import {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {Redirect} from 'react-router-dom'

function SignUp({onLogin, user}) {
    const history = useHistory()
    const [errors, setErrors] = useState([])
    const [form, setForm] = useState({
        name: "",
        username: "",
        password: "",
        password_confirmation: ""
    })

    function handleChange(e) {
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        });
      }

      function handleSubmit(e) {
        e.preventDefault()
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                name: form.name,
                username: form.username,
                password: form.password,
                password_confirmation: form.password_confirmation
            })
        }).then((r) => {
                if (r.ok) {
                r.json().then((data) => {
                    onLogin(data)
                    setForm({
                        name: "",
                        username: "",
                        password: "",
                        password_confirmation: ""
                    })})
                history.push("/")
                } else {
                r.json().then((err) => setErrors(err.errors))
            }
        })
    }

    if (user) {
        return <Redirect to="/" /> 
    }
    return (
        <div>
            <div className="ui middle aligned center aligned grid">
                <div className="column">
                    <h2 className="ui orange header">
                        <div className="content">
                            Create a new account
                        </div>
                    </h2>
                    <p>A password must have one uppercase letter, one lowercase letter, one digit, and one special character!</p>

                        <div className="ui container centered">
                            <form className="ui form" id="signup-form" onSubmit={handleSubmit}>
                                <div className="ui stacked segment">
                                    <div className="field">
                                        <input type="text" name="username" placeholder="Username" value={form.username} onChange={handleChange}/>
                                    </div>
                                    <div className="field">
                                        <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange}/>
                                    </div>
                                    <div className="field">
                                        <input type="password" name="password_confirmation" placeholder="Confirm Password" value={form.password_confirmation} onChange={handleChange}/>
                                    </div>
                                    <div className="field">
                                        <input type="text" name="name" placeholder="First Name" value={form.personName} onChange={handleChange}/>
                                    </div>
                                    <button className="ui fluid large orange submit button" type="submit">Sign Up</button>
                                </div>
                            </form>
                        </div>
                    <div className="ui container centered message">
                        Already have an account? <Link to='/login'>Sign In</Link>
                    </div>
                </div>
            </div>
               {errors.length > 0 ? <div className="ui error message">
                    {errors.length > 0 ? errors.map((error) => <p key={error}>{error}</p>) : null}
                 </div> : null}
        </div>
    )
}

export default SignUp
