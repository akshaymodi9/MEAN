
import React from 'react'
import {render} from "react-dom"


export class Main extends React.Component{

    //mandatory function

    handleChange(){

        this.props.onChangeName(this.refs.name.value)
    }

    render(){
        return(
            <div>
                <input type="text" ref="name"/>
                <button onClick={this.handleChange.bind(this)}> Change Name </button>
            </div>
        )
    }
}

