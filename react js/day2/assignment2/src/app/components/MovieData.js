import React from 'react'
import { MovieList } from './MovieList'
export class MovieData extends React.Component {





    render() {

        return (
            <div className="row col-lg-12" >

                {this.props.movie.map((movies, index) => <MovieList movie={movies} />)}
            </div>
        )
    }

}