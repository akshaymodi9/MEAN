
import React from 'react'
import {render} from "react-dom"


export class User extends React.Component{

    //mandatory function

    render(){
        return(
            <div>
     
                <h1> {this.props.userName} </h1>
            </div>
        )
    }
}

