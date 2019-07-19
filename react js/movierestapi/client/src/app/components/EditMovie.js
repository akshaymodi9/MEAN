import React from "react"
import axios from "axios"

export class EditMovie extends React.Component {

    handleEdit(){
        var id=this.props.match.params.id
        var runtime=this.refs.runtime.value
        console.log(runtime)
        axios.put('http://localhost:4000/api/movies/'+id,runtime)
        .then((response)=>{
            console.log(response)
        })
        .catch((err)=>{
            console.log(err)
        })
    }


    render() {
        return (
            <div>
                <p><input type="text" ref="runtime"/></p>
                <p><button onClick={this.handleEdit.bind(this)}>Edit</button></p>
                </div>
                )
    }
}