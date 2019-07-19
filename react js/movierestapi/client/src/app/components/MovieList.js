import React from 'react'
import {NavLink} from "react-router-dom"
import {Router,Redirect} from "react-router"

export class MovieList extends React.Component {

   

     

        render(){
            var reviews="/reviews/"+this.props.movie._id
            var deletem="/delete/"+this.props.movie._id
            var addreviews="/addreviews/"+this.props.movie._id
            var edit="/edit/"+this.props.movie._id
            return(
                
                <div className="col-sm-4 col-md-4 col-lg-4" >
                    <div className="thumbnail">
                        <img src={this.props.movie.poster} alt="..." />
                        <div className="caption">
                            <h3>{this.props.movie.title}</h3>
                            <p><a href={this.props.movie.trailer} >Watch Trailer</a></p>
                        </div>
                 
                            <p> {this.props.movie.description}</p>
                        
           
                            <p>Release:{this.props.movie.year}</p>
                            <p>Runtime:{this.props.movie.runtime}</p>
                            <p><button className="btn btn-primary pull-right"><NavLink to={edit}>Edit</NavLink></button>
                            <button className="btn btn-danger pull-right"><NavLink to={deletem}>Delete</NavLink></button>
                            <button className="btn btn-info"><NavLink to={reviews}>View Reviews</NavLink></button>
                            <button className="btn btn-success"><NavLink to={addreviews}>Add Reviews</NavLink></button></p>
                 
                    </div>
                </div>


            )
        }


}