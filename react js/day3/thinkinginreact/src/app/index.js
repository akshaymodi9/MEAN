

import React from 'react'
import { render } from "react-dom"
import { SearchBar } from './components/SearchBar'
import {MovieData} from './components/MovieData'

class App extends React.Component {

    //mandatory function

    render() {
        return (
            <div>
                <SearchBar />
                <MovieData/>
            </div>
        )
    }
}

render(<App />, document.getElementById("app"))