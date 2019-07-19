

import React from 'react'
import {render} from "react-dom"
import {MovieData} from "./components/MovieData"

class App extends React.Component{

    constructor()
    {
        super()
        this.title=this.handleTitleChange.bind(this)
        this.addmovie=this.handleAddMovie.bind(this)
        this.delete=this.handleDelete.bind(this)
        this.update=this.handleUpdate.bind(this)
        this.view=this.handleView.bind(this)
    }
    //mandatory function
    handleTitleChange(title)
    {
        alert("Tile changed" +title)
    }
    handleAddMovie(title,id,actor,desc){
        alert("movie added")
    }
    handleDelete(id){
        alert("movie deleted" +id)
    }
    handleUpdate(id,title){
        alert("movie update"+id+"changed value" +title)
    }
    handleView(){
        alert("All movies")
    }

    render(){
        return(
            <MovieData title={this.title} addmovie={this.addmovie} delete={this.delete} update={this.update} view={this.view}/>
        )
    }
}

render(<App/>,document.getElementById("app"))