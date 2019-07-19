import React from 'react'

export class ContactDataContent extends React.Component{

    constructor(props){
        super(props);

    }

    render(){

        return(
            <div>
                <table>
                    <tr>
                        <td> {this.props.contact.Name}</td>
                        <td> {this.props.contact.Number}</td>
                    </tr>
                </table>
            </div>
            
        )
    }
}