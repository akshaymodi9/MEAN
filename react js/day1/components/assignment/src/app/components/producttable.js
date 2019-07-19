import React from 'react'
import { Productcategory } from "./productcategory"
import { Productrow } from "./productrow"


export class Producttable extends React.Component {

    //mandatory function

    render() {
        return (
            <div>
                <h1> Producttable  component </h1>
                <table>
                    <thead>
                        <Productcategory />
                    </thead>
                    <tbody>
                        <Productrow />
                    </tbody>
                </table>
            </div>
        )
    }
}