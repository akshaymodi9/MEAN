import React from "react"
import {NavLink} from "react-router-dom"

export class Header extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                            <li><NavLink to="/"> Home</NavLink></li>
                            <li><NavLink to="/about"> About Us</NavLink></li>
                            <li><NavLink to="/manage"> Manage</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )


    }


}