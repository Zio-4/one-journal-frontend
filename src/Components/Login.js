import React from 'react'

function Login() {
    return (
        <form>
            <div class="ui middle aligned center aligned grid">
                <div class="column">
                    <h2 class="ui orange header">
                        <div class="content">
                            Log-in to your account
                        </div>
                    </h2>
                    <form class="ui large form">
                        <div class="ui stacked segment">
                            <div class="field">
                            <div class="ui left icon input">
                                <i class="user icon"></i>
                                <input type="text" name="username" placeholder="Username"/>
                            </div>
                            </div>
                            <div class="field">
                            <div class="ui left icon input">
                                <i class="lock icon"></i>
                                <input type="password" name="password" placeholder="Password"/>
                            </div>
                            </div>
                            <div class="ui fluid large orange submit button">Login</div>
                        </div>

                        <div class="ui error message"></div>

                    </form>

                    <div class="ui message">
                        Don't have an account? <a href="#"> Sign Up</a>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Login
