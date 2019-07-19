

import React from 'react'
import { render } from "react-dom"
import { UserInfo } from "./components/userinfo"
import { TodoList } from "./components/TodoList"

class App extends React.Component {

    //mandatory function

    render() {

        
        var playerName = ["ABd", "Gayle"]
        var fullname = "LTI"
        var user = {
            fullnume: "DDLJ",
            Director: "Yash Chopra",
            Release: 1995,
            Poster: "https://quintype-01.imgix.net/thequint/2015-10/4053b745-4f9c-472e-b2a4-438ba5c75d9f/DDLJ-remake.jpg",
            actors: ["SRk", "kajol"]
        }

        var todo=[
            {taskname:"Watch movie",description:"movie",status:"c"},
            {taskname:"asdad movie",description:"masdovie",status:"c"}
    ]



        return (
            <div>
                
            <UserInfo player={playerName} fullname={fullname} user={user}/>
            <TodoList todo={todo}/>
            </div>
        )
    }
}

render(<App />, document.getElementById("app"))