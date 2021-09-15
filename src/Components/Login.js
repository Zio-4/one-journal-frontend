import React from 'react'
import {Link} from 'react-router-dom'

function Login() {
    return (
        <form>
            <div className="ui middle aligned center aligned grid">
                <div className="column">
                    <h2 className="ui orange header">
                        <div className="content">
                            Log-in to your account
                        </div>
                    </h2>
                    <form className="ui large form">
                        <div className="ui stacked segment">
                            <div className="field">
                            <div className="ui left icon input">
                                <i className="user icon"></i>
                                <input type="text" name="username" placeholder="Username"/>
                            </div>
                            </div>
                            <div className="field">
                            <div className="ui left icon input">
                                <i className="lock icon"></i>
                                <input type="password" name="password" placeholder="Password"/>
                            </div>
                            </div>
                            <div className="ui fluid large orange submit button">Login</div>
                        </div>

                        <div className="ui error message">test</div>

                    </form>

                    <div className="ui message">
                        Don't have an account? <Link to='/signup'>Sign Up</Link> 
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Login
