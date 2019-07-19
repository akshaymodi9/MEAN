

import React from 'react'
import {render} from "react-dom"
import {Greeting} from './Greeting'

var fullname= "pralhad";
var age=22;

class App extends React.Component{

    //mandatory function

    render(){
        return(
            <div>
            <h1> Props Demo </h1>
            <Greeting name={fullname} age={age} /> 
            </div>
        )
    }
}

render(<App/>,document.getElementById("app"))