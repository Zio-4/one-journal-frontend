import React from 'react'
import {Link, useHistory} from 'react-router-dom'

function NavBar({onLogout, user}) {
    const history = useHistory()

    function logoutUser() {
        fetch("/logout", {
            method: "DELETE"
        })
        onLogout()
        history.push("/login")
    }

    return (
        <div className="ui secondary pointing menu">
            <Link to='/' className="ui item">
                Home 
            </Link>
                <div className="right menu">
                    <button className="ui yellow button" onClick={logoutUser}>
                        Logout
                    </button>
                </div>
        </div>
    )
}

export default NavBar
