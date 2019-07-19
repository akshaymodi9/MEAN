

import React from "react"
import { BookMarkForm } from "./BookMarkForm"
import { BookMarkTable } from "./BookMarkTable"


var BookMark = [

    { id: 1, name: "Facebook", url: "http://www.facebook.com" },
    { id: 2, name: "Twitter", url: "http://www.twitter.com" }
]

var nid=3;
export class BookMarkApp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            bookmarks: []
        }
        this.addBookmark=this.handleAddBookmark.bind(this)

    }

    componentDidMount() {

        this.setState({

            bookmarks: BookMark
        })
        console.log(bookmarks)

    }

    handleAddBookmark(nname,nurl)
    {
        this.state.bookmarks.push({
            id:nid++,
            name:nname,
            url:nurl
            
        })

        this.componentDidMount()
    }
    render() {

        return (
            <div>
                <BookMarkForm addBookmark={this.addBookmark} />

                <BookMarkTable bookmarks={this.state.bookmarks} />
            </div>

        )
    }
}