import React from 'react'
import {render} from "react-dom"
import {MovieComponent} from "./components/MovieComponents"

class App extends React.Component{

    //mandatory function

    render(){
        var movieObject={
            name:"DDLJ",
            actor:"SRK",
            rating:4,
            description:"Good movie"

        }
        return(<div>
                <MovieComponent movieObject={movieObject}/>
                </div>
            )
    }
}

render(<App/>,document.getElementById("app"))