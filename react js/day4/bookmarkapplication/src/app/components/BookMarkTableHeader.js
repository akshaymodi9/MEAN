import React from "react"

export class BookMarkTableHeader extends React.Component{

    constructor(props){

        super(props)
    }

    render(){

        return(

            <div>
            <table>
            
                    <th>Name</th>
                    <th>Url</th>
                  
                </table>

                </div>
        )
    }
}