import React from 'react'
import {render} from "react-dom"
import {SearchBar} from "./components/SearchBar"
import axios from 'axios'

class App extends React.Component{

    constructor(){
        super();
        this.addMovie=this.handleAddMovie.bind(this)
        this.state={
            movies:[]
        }
    }

    componentDidMount(){

        axios.get('http://localhost:3500/api/movies')
        .then((response)=>{
            console.log(response.data)

            this.setState({
            movies:this.response.data
            })
            
        })
        .catch(function(err){
            console.log(err)
        })

    }

    handleAddMovie(movieObj)
    {
        axios.post('http://localhost:3500/api/movies',{movieObj})
        .then((response)=>{
            console.log(response)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    //mandatory function

    render(){
        return(
            <div>
                <SearchBar movies={this.state.movies} addMovie={this.addMovie}/>
                </div>
        )
    }
}

render(<App/>,document.getElementById("app"))