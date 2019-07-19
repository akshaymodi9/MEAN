import React from 'react'
import axios from 'axios'

export class AddReviews extends React.Component{


    handleAdd(){
        var id=this.props.match.params.id
        var reviewObj = {
            "reviewer_name": this.refs.rname.value,
            "rating": this.refs.rating.value,
            "comments": this.refs.comments.value
            
        }
        console.log(reviewObj);
        axios.put('http://localhost:4000/api/movies/comments/'+id,reviewObj)
            .then((response) => {
                console.log(response)
            })
            .catch(function (err) {
                console.log(err)
            })
    }
    render(){
        return(
           
            <table className="table table-bordered table-striped">
            <tr>
            <td>Name:</td>
            <td><input type="text" ref="rname" /></td>
            </tr>
            <tr>
            <td>Rating:</td>
            <td><input type="text" ref="rating" /></td>
            </tr>
            <tr>
            <td>Comments:</td>
            <td><input type="text" ref="comments" /></td>
            </tr>
            <tr>
            <td></td>
            <td><button onClick={this.handleAdd.bind(this)}>Add</button></td>
            </tr>
            </table>
            
        )
    }


}