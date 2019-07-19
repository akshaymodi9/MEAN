

import React from 'react'
import {render} from "react-dom"
import {Contact} from "./components/Contact"

class App extends React.Component{

    //mandatory function

    render(){
        return(
           <Contact />
        )
    }
}

render(<App/>,document.getElementById("app"))