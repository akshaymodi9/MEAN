import React from 'react'

export class Greeting extends React.Component {

    render() {
        return (
        <div >
            <h2> Name :{this.props.name} </h2>
            <h2> Age :{this.props.age} </h2>
        </div >
        )
}
}