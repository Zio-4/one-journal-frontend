import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from "react"
import {Redirect, useHistory} from 'react-router-dom'


function Login({onLogin, clearErrors, user}) {
    const history = useHistory()
    const [errors, setErrors] = useState([])
    const [form, setForm] = useState({
        username: "",
        password: ""
    })

    function handleInput(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
        clearErrors()
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        }).then((r) => {
            if (r.ok) {
                r.json().then((user) => {
                    console.log("user in login:", user)
                    onLogin(user)})
                    history.push("/")
            } else {
                r.json().then((err) => {
                    setErrors(err.errors)
                })
            }
        })
    }

    if (user) {
        console.log("redirecting from login component")
        return <Redirect to="/" /> 
    }
    return (
        <>
            <div className="ui middle aligned center aligned grid">
                <div className="column">
                    <h2 className="ui orange header">
                        <div className="content">
                            Log-in to your account
                        </div>
                    </h2>
                    <form className="ui large form" onSubmit={handleSubmit}>
                        <div className="ui stacked segment">
                            <div className="field">
                            <div className="ui left icon input">
                                <i className="user icon"></i>
                                <input type="text" name="username" placeholder="Username" value={form.username} onChange={handleInput}/>
                            </div>
                            </div>
                            <div className="field">
                            <div className="ui left icon input">
                                <i className="lock icon"></i>
                                <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleInput}/>
                            </div>
                            </div>
                            <button className="ui fluid large orange submit button" type="submit">Login</button>
                        </div>
                    </form>

                    <div className="ui message">
                        Don't have an account? <Link to='/signup'>Sign Up</Link> 
                    </div>
                </div>
            </div>
            {errors.length > 0 ? <div className="ui error message">
                {errors.length > 0 ? errors.map((error) => <h3>{error}</h3>) : null}
            </div> : null}
        </>
    )
}

export default Login
