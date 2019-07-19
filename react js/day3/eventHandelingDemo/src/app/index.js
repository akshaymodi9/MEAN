
import React from 'react'
import {render} from "react-dom"
import {Data} from "./components/Data"

class App extends React.Component{

    constructor(){

        super();
        this.edit=this.handleEdit.bind(this);
        this.delete=this.handleDelete.bind(this);

    }

    //mandatory function
    handleEdit(){
        alert("You clicked me and im editing")
    }

    handleDelete(id){
        alert("You clicked me and im deleting"+id)
    }

    render(){
        return(
            <Data edit={this.edit} delete={this.delete} />
        )
    }
}

render(<App/>,document.getElementById("app"))