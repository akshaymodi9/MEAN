import React from 'react'

export class MovieData extends React.Component{
        constructor(){
            super()
  
            this.titleChange=this.handleTileChange.bind(this)
            this.addmovie=this.handleAddMovie.bind(this)
            this.delete=this.handleDelete.bind(this)
            this.update=this.handleUpdate.bind(this)
            
        }

        handleAddMovie(){
            this.props.addmovie(this.refs.title.value,this.refs.id.value,this.refs.actor.value,this.refs.description.value)
        }

        handleTileChange(){

            this.props.title(this.refs.title.value)
        }
        handleDelete(){
            this.props.delete(this.refs.id.value)
        }
        handleUpdate(){
            this.props.update(this.refs.id.value,this.refs.title.value)
        }
   

    render(){
        return(
            <div>
                <p>Title:<input type="text" ref="title"/></p>
                <p>id:<input type="text" ref="id"/></p>
                <p>actor:<input type="text" ref="actor"/></p>
                <p>description:<input type="text" ref="description"/></p>
                <button onClick={this.titleChange}>change title</button>
                <button onClick={this.addmovie}>Add Movie</button>
                <button onClick={this.delete}>Delete</button>
                <button onClick={this.update}>Update</button>
                <button onClick={this.props.view}>View</button>
            </div>
        )
    }
    


}