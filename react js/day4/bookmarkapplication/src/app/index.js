
import React from 'react'
import { render } from "react-dom"
import { BookMarkApp } from "./components/BookMarkApp"
import { Home } from "./components/Home"
import { AboutUs } from "./components/AboutUs"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Header } from "./components/Header"
class App extends React.Component {

    //mandatory function

    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={AboutUs} />
                    <Route path="/manage" component={BookMarkApp} />

                </div>
            </Router>
        )
    }
}

render(<App />, document.getElementById("app"))

// how to delete 

// 1. write delete code in parent com

// deletetask(id){
// axios.delete(url+id)
// .then(response=>{
// alert ("")
// this.componentDidMount()
// })

// }

// 2.in the sub child call this method like this
// map function
// <ToDoList key={} todo={todo} remove={this.props.delete}>

// 3.In the grand child

// call remove
//onclick={this.removeData.bind(this,this.props.todo._id)}  