import React from "react"
import axios from "axios"
import {AddMovieData} from "./AddMovieData"

export class AddMovie extends React.Component{

    constructor(props){
        super(props)
        // this.addMovie=this.handleAddMovie.bind(this)
        // this.state={
        //     movies:[],
          
        // }
    }

    // componentDidMount(){
    //     axios.get('http://localhost:4000/api/movies')
    //     .then((response)=>{
       
    //         this.setState({
    //             movies:response.data
                
    //         })
                
    //     })
    // }

    
        
    
    render(){
        return(
            <div>
                <AddMovieData/>
            </div>
        )
    }



} 