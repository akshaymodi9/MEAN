

import React from 'react'
import {render} from "react-dom"

class App extends React.Component{

    //mandatory function


    // constructor(props){
    //     super(props)
    //     this.state={
    //         dtTime:new Date()
    //     }
    // }
    // tick(){
    //     this.setState({
    //         dtTime:new Date()
    //     })
    // }

    // componentWillMount(){
    //     console.log("Initial Rendering")
    // }
    // componentDidMount(){
    //     console.log("Component Mounted")
    //     this.timerId=setInterval(()=>this.tick(),2000);
    // }
    // componentWillReceiveProps(nextProps){
    //     console.log("component will receive this props: "+nextProps)
    // }
    // shouldComponentUpdate(nextProps,prevState){
    //     console.log("Component will update: ",nextProps,prevState)
    //     return true
    // }

    // componentDidUpdate(prevProps, prevState){
    //     console.log("Component did update "+prevProps,prevState)
    // }

    // componentWillmount(){

    //     console.log("Component Removed from the DOM")
    // }


    render(){
        return(
             <sample />
        )
    }
}

render(<App/>,document.getElementById("app"))