import {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'

function SignUp({onLogin}) {
    const history = useHistory()
    const [errors, setErrors] = useState([])
    const [form, setForm] = useState({
        personName: "",
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
        fetch('/signup', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(form)
        }).then((r) => {
                if (r.ok) {
                r.json().then((data) => onLogin(data))
                history.push("/home")
                } else {
                r.json().then((err) => setErrors(err.errors))
            }
        })
    }


    return (
        <form>
            <div className="ui middle aligned center aligned grid">
                <div className="column">
                    <h2 className="ui orange header">
                        <div className="content">
                            Create a new account
                        </div>
                    </h2>
                    <p>A password must have one uppercase letter, one lowercase letter, one digit, and one special character!</p>
                    <form className="ui large form" onSubmit={handleSubmit}>
                        <div className="ui stacked segment">
                            <div className="field">
                                    <input type="text" name="username" placeholder="Username" value={form.username} onChange={handleChange}/>
                            </div>
                            <div className="field">
                                <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange}/>
                            </div>
                            <div className="field">
                                <input type="password" name="confirm-password" placeholder="Confirm Password" value={form.password_confirmation} onChange={handleChange}/>
                            </div>
                            <div className="field">
                                <input type="text" name="personName" placeholder="First Name" value={form.personName} onChange={handleChange}/>
                            </div>
                            <div className="ui fluid large orange submit button">Sign Up</div>
                        </div>

                        <div className="ui error message">
                            {(errors.length > 0) ? errors.map((error) => <p>{error}</p>) : null}
                        </div>
                    </form>
                    <div className="ui message">
                        Already have an account? <Link to='/login'>Sign In</Link>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default SignUp
