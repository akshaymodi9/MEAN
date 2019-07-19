console.log("Helloworld")

import React from 'react'
import {render} from "react-dom"

class App extends React.Component{

    //mandatory function

    render(){
        return(
            <h1> First React Demo </h1>
        )
    }
}

render(<App/>,document.getElementById("app"))