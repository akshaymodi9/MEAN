import React from "react"

export class BookMarkTableData extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        return (



            <tr>
                <td>{this.props.bookmarks.name}</td>
                <td>{this.props.bookmarks.url}</td>

            </tr>





        )
    }
}