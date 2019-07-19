import React from 'react'
import {Searchbar} from "./searchbar"
import {Producttable} from "./producttable"
export class Filterproducttable extends React.Component{

    //mandatory function

    render(){
        return(
            <div>
            <h1> FilterProduct component </h1>
            <Searchbar/>
            <Producttable/>
            </div>
        )
    }
}
