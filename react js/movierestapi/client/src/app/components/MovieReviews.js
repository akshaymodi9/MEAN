import React from "react"
import axios from "axios"
import _ from 'lodash'
import {ListReviews} from './ListReviews'
export class MovieReviews extends React.Component{

    constructor(props){
        super(props)
        var id=this.props.match.params.id
        this.state={
            movies:{}
        }
        axios.get('http://localhost:4000/api/movies/comments/'+id)
        .then((response)=>{
            console.log(response.data)
           this.setState({
               movies:response.data
           })
           console.log(this.state.movies)
        })
        .catch((err)=>{
            console.log("error")
        })
        
    }
    handleData(){
      return  _.map(this.state.movies,(movie)=><ListReviews movie={movie}/>)
    }


    render(){
       
        

        return(
            <div>
            <h1>Reviews</h1>
            <p>{this.handleData()}</p>
           

            </div>
        )
    }


}