import React from 'react'

export class Data extends React.Component{


    constructor(){
        super();
        this.delete=this.deleteById.bind(this)
    }

    deleteById(){

        this.props.delete(this.refs.Id.value)
    }

    render(){

        return(
            <div>
                <input type="text" ref="Id"/>
            <button onClick={this.props.edit}>Click for Edit</button>
            <button onClick={this.delete}>Click for Delete</button>
            </div>
        )
        
    }
}