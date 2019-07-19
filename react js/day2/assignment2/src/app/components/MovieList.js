import React from 'react'

export class MovieList extends React.Component {

        render(){
            return(
                
                <div className="col-sm-6 col-md-4 col-lg-4" >
                    <div className="thumbnail">
                        <img src={this.props.movie.poster} alt="..." />
                        <div className="caption">
                            <h3>{this.props.movie.title}</h3>
                            <p><button className="btn btn-primary"><a href={this.props.movie.trailer} role="button"></a>Trailer</button></p>
                        </div>
                 
                            <p> {this.props.movie.description}</p>
                        
           
                            <p>Rating:{this.props.movie.rating}</p>
                            <p>Production:{this.props.movie.production}</p>
                 
                    </div>
                </div>


            )
        }


}