import React from "react"
import { BookMarkTableData } from "./BookMarkTableData"
import { BookMarkTableHeader } from "./BookMarkTableHeader"
import _ from "lodash"

export class BookMarkTable extends React.Component {

    constructor(props) {
        super(props);


    }
    handleData() {
        return _.map(this.props.bookmarks, (bookmark) => <BookMarkTableData key={bookmark.id} bookmarks={bookmark} />)
    }
    render() {

        return (

            <table>
                <thead>
                    <BookMarkTableHeader />
                </thead>
                <tbody>
                    {this.handleData()}
                </tbody>

            </table>
        )
    }
}