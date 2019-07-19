import React from 'react'

export class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.view=this.handleView.bind(this)
        this.addMovie=this.handleAddMovie.bind(this)
    }

    handleView(){

        console.log(this.props.movies)
    }
    handleAddMovie(){
        
    }


    render(){
        return(
           <button onClick={this.view}>click</button>
        )
    }


}