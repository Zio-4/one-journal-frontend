import React from 'react'
import {Link, useHistory} from 'react-router-dom'

function NavBar({onLogout, user}) {
    const history = useHistory()

    function logoutUser() {
        fetch("/logout", {
            method: "DELETE"
        })
        onLogout()
        history.push("/")
    }

    return (
        <div className="ui secondary pointing menu">
            <Link to='/' className="ui item">
                Home 
            </Link>
                <div className="right menu">
                    <button className="ui item" onClick={logoutUser}>
                        Logout
                    </button>
                </div>
        </div>
    )
}

export default NavBar
