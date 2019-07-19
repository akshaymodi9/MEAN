import React from 'react'
import { MovieList } from "./MovieList"

export class MovieData extends React.Component {


    // constructor(props){
    //     super(props);
    //     this.view=this.handleView.bind(this)
    //     this.delete=this.handleDelete.bind(this)

    // }
    // handleView(){
    //     console.log(this.props.movies)
    // }

    // handleDelete(id){

    //     this.props.delete(this.refs.id.value)
    // }
    // render(){
    //     return(
    //         <div>
    //         <input type="text" ref="id"/>
    //         <button onClick={this.delete}> </button>
    //        <button onClick={this.view}>View</button>
    //         </div>
    //     )
    // }
    render() {
        var rows = [];


        this.props.movies.forEach((movie) => {
            if (movie.title.indexOf(this.props.filterText) === -1) {
                return;
            }
            else {

                rows.push(<MovieList movie={movie} />)

            }

            

        });
        return (
            <div className="row col-lg-8" >
                {rows}
               
                </div>
            
        );
    }

  
}