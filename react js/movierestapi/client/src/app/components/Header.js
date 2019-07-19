import React from "react"
import {NavLink} from "react-router-dom"
import {Router} from "react-router"

export class Header extends React.Component {

 
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                            <li><NavLink to="/"> Home</NavLink></li>
                            <li><NavLink to="/about"> About Us</NavLink></li>
                            <li><NavLink to="/view"> View Movies</NavLink></li>
                            <li><NavLink to="/add"> Add Movies</NavLink></li>                        
                        </ul>
                    </div>
                </div>
            </nav>
        )


    }


}