import React from 'react'
import {Link} from 'react-router-dom'

function SignUp() {
    return (
        <form>
            <div className="ui middle aligned center aligned grid">
                <div className="column">
                    <h2 className="ui orange header">
                        <div className="content">
                            Create a new account
                        </div>
                    </h2>
                    <form className="ui large form">
                        <div className="ui stacked segment">
                            <div className="field">
                                    <input type="text" name="username" placeholder="Username"/>
                            </div>
                            <div className="field">
                                <input type="password" name="password" placeholder="Password"/>
                            </div>
                            <div className="field">
                                <input type="password" name="confirm-password" placeholder="Confirm Password"/>
                            </div>
                            <div className="field">
                                <input type="text" name="person-name" placeholder="First Name"/>
                            </div>
                            <div className="ui fluid large orange submit button">Sign Up</div>
                        </div>

                        <div className="ui error message"></div>
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
