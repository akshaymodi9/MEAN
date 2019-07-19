import React from "react"
import axios from "axios"

export class DeleteMovie extends React.Component{


    handleDelete(){
        var id=this.props.match.params.id
        console.log(id)
        axios.delete('http://localhost:4000/api/movies/'+id)
        .then((response)=>{
            console.log(response)

        })
        .catch((err)=>{
            console.log(err)
        })
    }
    render(){
      
        return(
            <h1>{this.handleDelete.bind(this)}</h1>
        )
    }
}