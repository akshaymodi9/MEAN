import React from 'react'
import {ContactDataContent} from "./ContactDataContent"

export class ContactData extends React.Component {

    constructor(props) {
        super(props);
    }


    handleView() {
        return (_.map(this.props.data, (contact) => { <ContactDataContent key={contact.Number} contact={contact} /> }))

    }

    render() {

        return (

            <div>
                <table>
                    <thead>
                        <FormHeader />
                    </thead>
                    <tbody>
                        {this.handleView}
                    </tbody>
                </table>
            </div>
        )
    }
}
