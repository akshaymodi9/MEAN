/* first redux demo
import { createStore } from "redux"


var reducer = (state, action) => {

    switch (action.type) {

        case "ADD":
            state = state + action.payload
            break;
        case "SUB":
            state = state - action.payload
            break;
    }
    return state;   
}

const store = createStore(reducer, 100)

store.subscribe(() => {

    console.log("store updated " + store.getState())
})

store.dispatch({

    type: "ADD",
    payload: 200
})


store.dispatch({

    type: "SUB",
    payload: 100
})

*/

//second redux app
import React from "react"
import {render} from "react-dom"
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import App  from './components/app'

var reducer = (state, action) => {

    switch (action.type) {

        case "SET_NAME":
            state = {

                ...state,
                name: action.payload
            }
            console.log(state)
            break;
    }
    return state;
}

const store = createStore(combineReducers({user:reducer}))

store.subscribe(() => {

    console.log("New Name " + store.getState())
})

render(

    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('app')
)