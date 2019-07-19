
import React from 'react'
import {render} from "react-dom"
import {BookData} from "./components/BookStoreData"
class App extends React.Component{

    //mandatory function

    render(){
        return(
                <BookData />
        )
    }
}

render(<App/>,document.getElementById("app"))