

import React from 'react'
import {render} from "react-dom"
import {Filterproducttable} from "./components/FilteredProductTable" 

class App extends React.Component{

    //mandatory function

    render(){
        return(
            <div>
            <h1> Product App </h1>
            <Filterproducttable />
            </div>
        )
    }
}

render(<App/>,document.getElementById("app"))