import React from 'react'

function SignUp() {
    return (
        <form>
            <div class="ui middle aligned center aligned grid">
                <div class="column">
                    <h2 class="ui orange header">
                        <div class="content">
                            Create a new account
                        </div>
                    </h2>
                    <form class="ui large form">
                        <div class="ui stacked segment">
                            <div class="field">
                                    <input type="text" name="username" placeholder="Username"/>
                            </div>
                            <div class="field">
                                <input type="password" name="password" placeholder="Password"/>
                            </div>
                            <div class="field">
                                <input type="password" name="confirm-password" placeholder="Confirm Password"/>
                            </div>
                            <div class="field">
                                <input type="text" name="person-name" placeholder="First Name"/>
                            </div>
                            <div class="ui fluid large orange submit button">Sign Up</div>
                        </div>

                        <div class="ui error message"></div>
                    </form>

                    <div class="ui message">
                        Already have an account? <a href="#"> Sign In</a>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default SignUp
