import React from 'react'


export class MovieComponent extends React.Component {

    //mandatory function

    constructor(props) {
        super(props);
        this.state = {

            name: this.props.movieObject.name,

            actor: this.props.movieObject.actor,
            rating: this.props.movieObject.rating,
            description: this.props.movieObject.description
        }
    }

    handleChange() {

        this.setState({
            name:this.refs.cname.value
        })
    }


        render(){
            return (
            <div>
                <p>
                {this.state.name}
                {this.state.actor}
                {this.state.rating}
                {this.state.description}
                </p> 
                <input type="text" ref="cname" />
                <button onClick={this.handleChange.bind(this)}> Change Name</button>
            </div>
            )
        }
    }
