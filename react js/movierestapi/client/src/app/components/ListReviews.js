import React from 'react'

export class ListReviews extends React.Component{

    render(){
        return(
            <div>
            <p>{this.props.movie.rating}</p>
            <p>{this.props.movie.comments}</p>
            </div>
        )
    }
}