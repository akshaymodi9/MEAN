import React from 'react'
import {render} from "react-dom"
import {Main} from "./Main"
import {User} from "./User"
import {connect} from "react-redux"

class App extends React.Component{

    
    render(){
        return(
            <div>
                <Main onChangeName={(name)=>this.props.setName(name)}/>
                <User userName={this.props.user.name}/>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        user:state.user
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        setName:(name)=>{
            dispatch({
                type:"SET_NAME",
                payload:name
            })

        }
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(App)