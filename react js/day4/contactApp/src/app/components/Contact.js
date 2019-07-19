import React from 'react'
import {ContactForm} from './contactForm'
import {ContactData} from './ContactData'


var contact = [{
    Name: "Pralhad",
    Number: 88554477
},
{
    Name: "Akshay",
    Number: 8877554477
}]
export class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            contacts: []
        }
        this.add = this.handleAdd.bind(this)
    }

    componentDidMount() {

        this.setState({

            contact: contacts
        })
    }

    handleAdd(Name, Number) {

        this.state.contacts.push({

            Name:Name,
            Number:Number

        })
        this.componentDidMount()
    }


    render() {

        return (
            <div>
                <ContactForm data={this.add} />
                <ContactData data={this.state.contacts} />

            </div>
        )
    }

}

 