import React from 'react'
import { render } from "react-dom"
import {MovieData} from './MovieData'
import {SearchMovie} from './SearchMovie'
import {AddMovie} from "./AddMovie"
import axios from 'axios'
export class MovieApp extends React.Component{
    
        constructor(){
            super();  
            // this.delete=this.handleDeleteTask.bind(this);
            this.state={
                movies:[],
                filterText: ''
            }
            this.handleTextInput = this.handleTextInput.bind(this);
            
        }
    
        handleTextInput(filterText) {
            this.setState({
              filterText: filterText
            });
          }
          
        componentDidMount(){
            axios.get('http://localhost:4000/api/movies')
            .then((response)=>{
                this.state.movies=response.data
                this.setState({
                    movies:this.state.movies  
                    
                })
                    
            })
            .catch(function(err){
                console.log(err)
            })
        }
    
    
        // handleDeleteTask(id){
        //     axios.delete('http://localhost:4000/api/movies/'+id)
        //     .then((response)=>{
        //         console.log(response)
        //     })
        //     .catch(function(err){
        //         console.log(err)
        //     })
        // }
    
        render(){
            return(
                <div>
            <SearchMovie filterText={this.state.filterText} onFilterTextInput={this.handleTextInput}
    />
           <MovieData movies={this.state.movies} filterText={this.state.filterText}/>
           
           </div>
            )
        }
    
       
    
    }