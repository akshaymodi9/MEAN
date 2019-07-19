import React from 'react'


export class MovieComponent extends React.Component{

    //mandatory function

    constructor(props)
    {
        super(props);
        this.state={
            
            rating:this.props.rating
        }
    }

    handleChange(){
        console.log(this.state.rating)
        this.setState({
            rating:this.state.rating+1
        })
        
    console.log(this.state.rating)}
    
    render(){
        return(<div>
            {this.state.rating}
            <button onClick={this.handleChange.bind(this)}> Change </button>
                    </div>
            )
    }
}
