import React from 'react'


export class Searchbar extends React.Component{

    //mandatory function

    render(){
        return(
            <div>
            <input type="text" placeholder="search" id="search"/>
            <input type="checkbox"/>
          
            </div>
        )
    }
}