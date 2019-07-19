import React from "react"
import axios from "axios"
export class AddMovieData extends React.Component {

    constructor(props) {
        super(props)
    }


    handleAddMovie() {
        var movieobj = {
            "title": this.refs.title.value,
            "description": this.refs.description.value,
            "trailer": this.refs.trailer.value,
            "poster": this.refs.poster.value,
            "year": this.refs.year.value,
            "runtime": this.refs.runtime.value,
        }
        console.log(movieobj);
        axios.post('http://localhost:4000/api/movies',movieobj)
            .then((response) => {
                console.log(response)
            })
            .catch(function (err) {
                console.log(err)
            })
    }


    render() {
        return (
            <table className="table table-bordered table-striped">
                <tr>
                <td>Title:</td>
                <td><input type="text" ref="title" /></td>
                </tr>
                <tr>
                <td>Description:</td>
                <td><input type="text" ref="description" /></td>
                </tr>
                <tr>
                <td>Trailer:</td>
                 <td><input type="text" ref="trailer" /></td>
                </tr>
                <tr>
                <td>Poster:</td>
                <td><input type="text" ref="poster" /></td>
                </tr>
                <tr>
                <td>year:</td>
                <td><input type="text" ref="year" /></td>
                </tr>
                <tr>
                <td>runtime:</td>
                <td><input type="text" ref="runtime" /></td>
                </tr>
                <tr>
                <td></td>
                <td><button onClick={this.handleAddMovie.bind(this)}>Add</button></td>
                </tr>

            </table>
        )
    }
}  