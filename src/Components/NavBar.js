import React from 'react'
import {Link} from 'react-router-dom'

function NavBar() {
    return (
        <div className="ui secondary pointing menu">
            <Link to='/home' className="ui item">
                Home 
            </Link>
                <div className="right menu">
                    <button className="ui item">
                    Logout
                    </button>
                </div>
        </div>
    )
}

export default NavBar
