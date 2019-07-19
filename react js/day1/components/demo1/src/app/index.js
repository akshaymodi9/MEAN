

import React from 'react'
import {render} from "react-dom"
import {HeaderComponent} from "./component/headerComponent"
import {BodyComponent} from "./component/bodyComponent"
import {FooterComponent} from "./component/footerComponent"

class App extends React.Component{

    //mandatory function

    render(){
        return(
            <div>
            <h1> First React Demo </h1>
            <HeaderComponent/>
            <BodyComponent/>
            <FooterComponent/>
            </div>
)
    }
}

render(<App/>,document.getElementById("app"))