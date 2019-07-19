
import React from 'react'
import { render } from "react-dom"
import {MovieReviews} from "./components/MovieReviews"
import {DeleteMovie} from "./components/DeleteMovie"
import { BrowserRouter as Router, Route } from "react-router-dom"
import {AddReviews} from "./components/AddReviews"
import { MovieApp } from "./components/MovieApp"
import {Home} from "./components/Home"
import {AboutUs} from "./components/AboutUs"
import {Header} from "./components/Header"
import {AddMovie} from "./components/AddMovie"
import {EditMovie} from './components/EditMovie'
class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={AboutUs} />
                    <Route path="/view" component={MovieApp} />
                    <Route path="/add" component={AddMovie} />
                    <Route path="/reviews/:id" component={MovieReviews}/>
                    <Route path="/deletem/:id" component={DeleteMovie}/>
                    <Route path="/addreviews/:id" component={AddReviews}/>
                    <Route path="/edit/:id" component={EditMovie}/>



                </div>
            </Router>
        )
    }
}



    render(<App /> , document.getElementById("app"))