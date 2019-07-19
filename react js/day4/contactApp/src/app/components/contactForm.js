import React from 'react'
import _ from 'lodash'
export class ContactForm extends React.Component{

    constructor(props){
        super(props);
    }

    handleAdd(){
        this.props.addBookmark(this.refs.name.value,this.refs.url.value)
    }
    render(){

        return(

            <div>
                <input type="text" ref="name"/>
                <input type="text" ref="number"/>
                <button> Add New Contact </button>
            </div>
            
        )
    }
}
