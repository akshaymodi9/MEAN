import React from "react"

export class BookMarkForm extends React.Component{
    
        constructor(props){
    
            super(props)
            this.addBookmark=this.handleAddBookmark.bind(this)
        }
        
        handleAddBookmark(){
            this.props.addBookmark(this.refs.name.value,this.refs.url.value)
        }
        
        render(){
    
            return(
    
                <div>
                    <input type="text" ref="name"/>
                    <input type="text" ref="url"/>
                    <button onClick={this.addBookmark}> Add </button>
    
                    </div>
            )
        }
    }