
import React from 'react'
import {render} from "react-dom"
import {MovieComponent} from "./components/MovieComponents"

class App extends React.Component{

    //mandatory function

    render(){
        var rating=2;
        var userObject={
            name:"Akshay",
            age:40
        }
        return(<div>
                <MovieComponent rating={rating} userObject={userObject}/>
                </div>
            )
    }
}

render(<App/>,document.getElementById("app"))